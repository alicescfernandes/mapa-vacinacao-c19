import madeira_pds from './../../../data/madeira_pds.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(madeira_pds);
}
