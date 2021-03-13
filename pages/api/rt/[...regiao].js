const regioes = {
	continente: 'rt_continente.json',
	nacional: 'rt_nacional.json',
	alentejo: 'rt_alentejo.json',
	algarve: 'rt_algarve.json',
	lvt: 'rt_lvt.json',
	madeira: 'rt_ram.json',
	acores: 'rt_raa.json',
};

export default async function handler(req, res) {
	const { regiao } = req.query;

	if (!regiao || !(regiao in regioes)) {
		res.statusCode = 404;
		res.end();
	}

	let data = await import(`./../../../data/${regioes[regiao]}`);
	res.end(JSON.stringify(data));
}
