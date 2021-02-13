import Cors from 'cors';
import ecdc from './../../data/ecdc.json';

export default async function handler(req, res) {
	res.statusCode = 200;
	res.json(ecdc);
}
