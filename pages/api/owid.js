import owid from './../../data/owid_filter.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(owid);
}
