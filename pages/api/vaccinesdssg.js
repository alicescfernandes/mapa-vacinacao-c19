import Cors from 'cors';
import convertVaccines from '../../automation/convert-csv:vaccines';
import { trackPlausible } from '../../utils';
import * as fs from 'fs';

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
	let data = {};
	console.log(1)

	data = await convertVaccines();
	
	res.statusCode = 200;
	res.json(data); //get data directly from the enpoint
}

/* 
//Use the next-js way

import vaccines_json from './../../data/vaccines_dssg.json';

export async function handler_local(req, res) {
	await cors(req, res);
	res.statusCode = 200;
	res.json(vaccines_json);
}
 */
