import acores from './../../../data/acores.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(acores);
}
