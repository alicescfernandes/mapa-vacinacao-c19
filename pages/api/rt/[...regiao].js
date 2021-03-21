const regioes = {
	continente: 'rt_continente.json',
	nacional: 'rt_nacional.json',
	alentejo: 'rt_alentejo.json',
	algarve: 'rt_algarve.json',
	lvt: 'rt_lvt.json',
	madeira: 'rt_ram.json',
	centro: 'rt_centro.json',
	acores: 'rt_raa.json',
	todas: 'rt_todas.json',
};

export default async function handler(req, res) {
	const { regiao } = req.query;
	if (!regiao || !(regiao in regioes)) {
		res.statusCode = 404;
		res.end();
	}

	let data = await import(`./../../../data/rt/${regioes[regiao]}`);
	res.end(JSON.stringify(data.default));
}
