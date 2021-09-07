const url = 'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/vacinas_detalhe.csv';
var csv = require('csvtojson');
import Cors from 'cors';
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

	let contents = await fetch(url).then((res) => res.buffer());

	csv({
		colParser: {
			doses: 'number',
			doses_novas: 'number',
			doses1: 'number',
			doses1_novas: 'number',
			doses2: 'number',
			doses2_novas: 'number',
			pessoas_vacinadas_completamente: 'number',
			pessoas_vacinadas_completamente_novas: 'number',
			pessoas_vacinadas_parcialmente: 'number',
			pessoas_vacinadas_parcialmente_novas: 'number',
			pessoas_inoculadas: 'number',
			pessoas_inoculadas_novas: 'number',
			vacinas: 'number',
			vacinas_novas: 'number',
		},
	})
		.fromString(contents.toString())
		.then(function (jsonArrayObj) {
			res.json(jsonArrayObj);
		});
}
