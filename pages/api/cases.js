import cases from './../../data/cases.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(cases);
}
