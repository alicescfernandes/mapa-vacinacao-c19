require('dotenv').config({ path: './../.env' });
let data = require('../data/vaccines.json');
let fs = require('fs');
let twitterText = fs.readFileSync('./twitter.txt').toString();
let numberFormatter = new Intl.NumberFormat();
let twitterLastUpdate = {
	last_update: 0,
};
if (fs.existsSync('./twitter-conf.json')) {
	twitterLastUpdate = JSON.parse(fs.readFileSync('./twitter-conf.json')); //do not cache this pls
}

let todayDate = new Date();
todayDate.setMinutes(0);
todayDate.setMilliseconds(0);
todayDate.setSeconds(0);
todayDate.setHours(0);

let Twitter = require('twitter');

var client = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

if (data[data.length - 1].Data > twitterLastUpdate.last_update) {
	let yesterday = data[data.length - 2];
	let today = data[data.length - 1];
	twitterLastUpdate.last_update = today.Data;
	fs.writeFileSync('./twitter-conf.json', JSON.stringify(twitterLastUpdate));

	let postVariables = {
		'{{novas_total}}': numberFormatter.format(today.Vacinados_Ac - yesterday.Vacinados_Ac).replace(',', ' '),
		'{{total_total}}': numberFormatter.format(today.Vacinados_Ac).replace(',', ' '),
		'{{novas_in1}}': numberFormatter.format(today.Inoculacao1_Ac - yesterday.Inoculacao1_Ac).replace(',', ' '),
		'{{novas_in2}}': numberFormatter.format(today.Inoculacao2_Ac - yesterday.Inoculacao2_Ac).replace(',', ' '),
		'{{total_in1}}': numberFormatter.format(today.Inoculacao1_Ac).replace(',', ' '),
		'{{total_in2}}': numberFormatter.format(today.Inoculacao2_Ac).replace(',', ' '),
		'{{dia}}': todayDate.getDate().toLocaleString('en-US', {
			minimumIntegerDigits: 2,
		}),
		'{{mes}}': (todayDate.getMonth() + 1).toLocaleString('en-US', {
			minimumIntegerDigits: 2,
		}),
		'{{ano}}': todayDate.getFullYear(),
	};
	let post = twitterText;

	for (let key of Object.keys(postVariables)) {
		post = post.replace(key, postVariables[key]);
	}
	client.post('account/update_profile', {
		description: `Sabia que até dia ${postVariables['{{dia}}']}/${postVariables['{{mes}}']} foram administradas ${postVariables['{{total_total}}']} vacinas? Veja aqui mais info sobre plano de vacinação contra a covid 19. Não somos um site do governo`,
	});

	client.post('statuses/update', { status: post }, function (error, tweet, response) {
		if (!error) {
			console.log(post);
		}
	});
}
