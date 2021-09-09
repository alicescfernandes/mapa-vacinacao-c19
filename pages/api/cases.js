import convertCases from '../../automation/convert-csv:cases';
import * as fs from 'fs';

/* import cases from './../../data/cases_v2.json';

export default async function handler_old(req, res) {
	res.statusCode = 200;
	res.json(cases);
}

 */
export default async function handler(req, res) {
	let data = {};
	try {
		data = await convertCases();
		console.log('remote');
	} catch (e) {
		let filedir = process.cwd() + '/data/cases_v2.json';
		data = JSON.parse(fs.readFileSync(filedir)); //fallback to the stored data
	}
	res.statusCode = 200;
	res.json(data); //get data directly from the enpoint
}
