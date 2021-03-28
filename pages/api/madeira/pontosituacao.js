let data = [
	{
		Data: '2020-03-26',
		total: 8245,
		total_novos: 31,
		recuperados: 7686,
		recuperados_novos: 43,
		obitos: 70,
		obitos_var: 0,
		ativos: 489,
		ativos_var: -9,
	},
];

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(data);
}
