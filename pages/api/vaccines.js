import Cors from 'cors';
import vaccines from './../../data/vaccines_v2.json';
// Initialize the cors middleware

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
	await cors(req, res);
	res.statusCode = 200;
	res.json(vaccines);
}
