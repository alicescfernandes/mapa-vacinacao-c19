import madeira from './../../data/madeira.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(madeira);
}
