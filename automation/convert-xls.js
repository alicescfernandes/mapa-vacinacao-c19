const excelToJson = require('convert-excel-to-json');
const { default: fetch } = require('node-fetch');
const fs = require('fs');
var shell = require('shelljs');
const path = require('path');
let rts = {};
let json = require('./../data/last-update.json');

const scrapRt = async function (onUpdate) {
	let files = await fetch(
		'http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/'
	)
		.then((res) => res.text())
		.then((text) => text.match(/http.*xlsx/gm));

	for await (file of files) {
		let parsed = path.parse(file);
		let contents = await fetch(file).then((res) => res.buffer());
		const result = excelToJson({
			source: contents,
			sheets: [
				{
					name: 'Sheet 1',
					header: {
						rows: 1,
					},
					columnToKey: {
						A: 'Data',
						B: 'rt_numero_de_reproducao',
						C: 'limite_inferior_IC95',
						D: 'limite_superior_IC95',
					},
				},
			],
		});
		rts[parsed.name.toLowerCase()] = result['Sheet 1'];
		fs.writeFileSync(`./data/rt/${parsed.name.toLowerCase()}.json`, JSON.stringify(result['Sheet 1']), () => {});
	}

	fs.writeFileSync(`./data/rt/rt_todas.json`, JSON.stringify(rts), () => {});

	json.dateRt = rts.rt_nacional.reverse()[0].Data;
	fs.writeFileSync('./data/last-update.json', JSON.stringify(json), () => {});

	shell.exec('git status | grep rt_todas.json', { silent: true }, (code, stdout) => {
		if (code == 0 && onUpdate) {
			onUpdate();
		}
	});
};

module.exports = scrapRt;
