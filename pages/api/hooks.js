require('dotenv').config({ path: './../.env' });
const crypto = require('crypto');
var shell = require('shelljs');

export const config = {
	api: {
		bodyParser: false,
	},
};

const webhookPayloadParser = (req) =>
	new Promise((resolve) => {
		let data = '';
		req.on('data', (chunk) => {
			data += chunk;
		});
		req.on('end', () => {
			resolve(Buffer.from(data).toString());
		});
	});

function verifyPostData(req, res) {
	return new Promise((resolve, rej) => {
		if (!req.rawBody) {
			resolve(false);
		}
		const sig = Buffer.from(req.headers[process.env.HOOKS_HEADER_NAME] || '', 'utf8');
		const hmac = crypto.createHmac(process.env.HOOKS_SHA, process.env.HOOKS_SECRET);
		const digest = Buffer.from(process.env.HOOKS_SHA + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8');

		if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
			console.log(`Request body digest (${digest}) did not match ${process.env.HOOKS_HEADER_NAME} (${sig})`);
			resolve(false);
		} else {
			let json_string = decodeURIComponent(req.rawBody).split('payload=')[1];
			let json = JSON.parse(json_string);

			resolve(json.ref === 'refs/heads/develop' ? true : false);
		}
	});
}

export default async function handler(req, res) {
	const data = await webhookPayloadParser(req);
	req.rawBody = data;
	let allowed = await verifyPostData(req, res);
	console.log('hook received');
	if (allowed) {
		shell.exec('echo "working" & yarn update:server &');
	}
	//set out to execute the command
	res.statusCode = 200;
	res.json({});
}
