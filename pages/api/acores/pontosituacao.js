import acores_pds from './../../../data/acores_pds.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(acores_pds);
}
