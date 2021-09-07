import Cors from 'cors';
import convertVaccines from '../../automation/convert-csv:vaccines';
import { trackPlausible } from '../../utils';
import vaccines from './../../data/vaccines_dssg.json';

function initMiddleware(middleware) {
	//comment
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
