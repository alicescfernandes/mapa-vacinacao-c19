import weeks from './../../data/weeks.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(weeks);
}
