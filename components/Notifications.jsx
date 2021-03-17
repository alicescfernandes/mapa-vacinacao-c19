import { useEffect } from 'react';

export function Notifications({ children }) {
	function allowNotifications() {
		OneSignal.getNotificationPermission().then((e) => {
			if (e !== 'granted') {
				OneSignal.showNativePrompt();
			} else {
				alert('Já recebe as nossas notificações');
			}
		});
	}
	useEffect(function () {
		window.OneSignal = window.OneSignal || [];
		const OneSignal = window.OneSignal;
		OneSignal.log.setLevel('trace');
		OneSignal.push(() => {
			OneSignal.init({
				appId: 'cfd30a9a-e080-4657-851f-e5063de051c6',
				safari_web_id: 'web.onesignal.auto.2c31ff0c-1624-4aec-8f89-a4f0b1da0ea1',
			});

			OneSignal.getNotificationPermission().then((e) => {
				if (e === 'granted') {
				}
			});

			OneSignal.on('notificationDisplay', function (event) {
				new Notification(event.heading, {
					body: event.content,
					icon: '/android-icon-192x192.png',
				});
			});

			OneSignal.on('subscriptionChange', function (isSubscribed) {
				// console.log("The user's subscription state is now:", isSubscribed);
			});
		});
	}, []);

	return <span onClick={allowNotifications}>{children} </span>;
}
