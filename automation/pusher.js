require('dotenv').config({ path: './../.env' });
const Pusher = require('pusher');

const pusher = new Pusher({
	appId: process.env.PUSHER_APP_ID,
	key: process.env.PUSHER_APP_KEY,
	secret: process.env.PUSHER_APP_SECRET,
	cluster: 'eu',
	useTLS: true,
});

function publishEvent(type, data) {
	pusher.trigger('covid19', 'update', {
		type,
		data,
	});
}

publishEvent('reload');
