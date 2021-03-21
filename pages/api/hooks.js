require('dotenv').config({ path: './../.env' });
const crypto = require('crypto');

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
			resolve('Request body empty');
		}
		const sig = Buffer.from(req.headers[process.env.HOOKS_HEADER_NAME] || '', 'utf8');
		const hmac = crypto.createHmac(process.env.HOOKS_SHA, process.env.HOOKS_SECRET);
		const digest = Buffer.from(process.env.HOOKS_SHA + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8');

		if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
			resolve(`Request body digest (${digest}) did not match ${process.env.HOOKS_HEADER_NAME} (${sig})`);
		} else {
			resolve('Valid Key');

			shelljs('yarn update:server');
		}
	});
}

export default async function handler(req, res) {
	const data = await webhookPayloadParser(req);
	req.rawBody = data;
	await verifyPostData(req, res);
	res.statusCode = 200;
	res.json({});
}
