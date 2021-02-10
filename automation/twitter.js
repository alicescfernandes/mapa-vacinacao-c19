require('dotenv').config({ path: './../.env' });
let data = require('../data/vaccines.json');
let fs = require('fs');
let twitterLastUpdate = JSON.parse(fs.readFileSync('./twitter-conf.json')); //do not cache this pls
let twitterText = fs.readFileSync('./twitter.txt').toString();
let numberFormatter = new Intl.NumberFormat();

let today = new Date();
today.setMinutes(0);
today.setMilliseconds(0);
today.setSeconds(0);
today.setHours(0);

let Twitter = require('twitter');

var client = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

if (data[data.length - 1].Data >= twitterLastUpdate.last_update) {
	fs.writeFileSync('./twitter-conf.json', JSON.stringify(twitterLastUpdate));
	let today = data[data.length - 1];
	let yesterday = data[data.length - 2];
	let postVariables = {
		'{{novas_total}}': today.Vacinados_Ac - yesterday.Vacinados_Ac,
		'{{total_total}}': today.Vacinados_Ac,
		'{{novas_in1}}': today.Inoculacao1_Ac - yesterday.Inoculacao1_Ac,
		'{{novas_in2}}': today.Inoculacao2_Ac - yesterday.Inoculacao2_Ac,
		'{{total_in1}}': today.Inoculacao1_Ac,
		'{{total_in2}}': today.Inoculacao2_Ac,
	};
	let post = twitterText;

	for (let key of Object.keys(postVariables)) {
		post = post.replace(key, numberFormatter.format(postVariables[key]).replace(',', ' '));
	}

	/* 	client.post('statuses/update', { status: `test` }, function (error, tweet, response) {
		if (!error) {
			console.log(tweet);
		}
	});
 */
}
