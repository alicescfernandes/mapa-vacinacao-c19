import Cors from 'cors';
import ars from './../../data/ars.json';
import { trackPlausible } from '../../utils';
function initMiddleware(middleware) {
	return (req, res) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result) => {
				if (result instanceof Error) {
					return reject(result);
				}
				return resolve(result);
			});
		});
}

const cors = initMiddleware(
	Cors({
		methods: ['GET'],
	})
);

export default async function handler(req, res) {
	trackPlausible(req);
	await cors(req, res);
	res.statusCode = 200;
	res.json(ars);
}
