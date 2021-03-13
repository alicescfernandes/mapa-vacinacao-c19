const excelToJson = require('convert-excel-to-json');
const { default: fetch } = require('node-fetch');
const fs = require('fs');
const path = require('path');

(async () => {
	let files = await fetch(
		'http://www.insa.min-saude.pt/category/areas-de-atuacao/epidemiologia/covid-19-curva-epidemica-e-parametros-de-transmissibilidade/'
	)
		.then((res) => res.text())
		.then((text) => text.match(/http.*xlsx/gm));

	files.forEach(async (file) => {
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
						B: 'Rt_número_de_reprodução',
						C: 'limite_inferior_IC95',
						D: 'limite_superior_IC95',
					},
				},
			],
		});

		fs.writeFile(`./data/rt/${parsed.name.toLowerCase()}.json`, JSON.stringify(result['Sheet 1']), () => {});
	});

	// Convert a csv file with csvtojson
})();
