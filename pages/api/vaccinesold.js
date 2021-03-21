import vaccines from './../../data/vaccines.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(vaccines);
}
