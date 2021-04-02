//TODO: Turn this into a hook
export function initSockets(onUpdate) {
	if (!window.pusher) {
		window.pusher = new Pusher('4dd4d1d504254af64544', {
			cluster: 'eu',
		});
		let channel = window.pusher.subscribe('covid19');

		channel.bind('update', function (data) {
			onUpdate?.(data);
		});
	}
}

/* initSockets(function (data) {
	updateData(data.type, data.data);
	setUpdating(true);
	setTimeout(() => {
		setUpdating(false);
	}, 1000);
});
 */
