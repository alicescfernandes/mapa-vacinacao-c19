import Cors from 'cors';
import vaccines from './../../data/vaccines_v2.json';
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
	trackPlausible(req.headers.host, req.url, req.headers['user-agent']);
	await cors(req, res);
	res.statusCode = 200;
	res.json(vaccines);
}
