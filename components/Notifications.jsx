import Plausible from 'plausible-tracker';
import { useEffect } from 'react';

var firebaseConfig = {
	apiKey: 'AIzaSyBcHZc1Rk5CeJDkwwaBOdCzYgdA6V5WK3g',
	authDomain: 'covid19-249f1.firebaseapp.com',
	projectId: 'covid19-249f1',
	storageBucket: 'covid19-249f1.appspot.com',
	messagingSenderId: '636238011730',
	appId: '1:636238011730:web:bf4a0deef86c884c3b6e8b',
	measurementId: 'G-DYYRVR03RS',
};

export function Notifications({ children }) {
	const plausible = Plausible({
		domain: 'vacinacaocovid19.pt',
		trackLocalhost: true,
	});

	function registerOnFirebase(callback) {
		if (firebase.apps.length === 0) {
			firebase.initializeApp(firebaseConfig);
		}
		const messaging = firebase.messaging();
		messaging
			.getToken({ vapidKey: 'BHtOyn7DJeWzTT1uCITnVOzCpFI4jyOGNo_NQCKoJktP56tHqSVCPtyn99tgpWPRsWzRTu07ahM6fjljP_01K3g' })
			.then((currentToken, b, c) => {
				if (currentToken) {
					fetch('/api/messaging/register', {
						method: 'POST',
						body: JSON.stringify({ fcm_token: currentToken }),
						headers: { 'content-type': 'application/json' },
					}).then((res) => {
						plausible.trackEvent('notifications', { type: 'granted' });
						callback?.();
					});
				} else {
					console.log('No registration token available. Request permission to generate one.');
				}
			})
			.catch((err) => {
				alert('Não conseguimos ativar as notificações. Certifique-se que não estão bloqueadas para este site ou tente mais tarde.');
			});
		messaging.onMessage((payload) => {
			let n = new Notification(payload.notification.title, {
				body: payload.notification.body,
				icon: '/android-icon-192x192.png',
			});

			n.onclick = function (event) {
				window.open('https://www.vacinacaocovid19.pt/?utm_source=notifications&utm_medium=notifications&utm_campaign=notifications');
			};
		});
	}
	function allowNotifications() {
		if (Notification.permission === 'granted') {
			alert('Já recebes as nossas notificações');
			return;
		}

		registerOnFirebase(function () {
			new Notification('Vacinação COVID-19', {
				body: 'Subscreveste às nossas notificações diárias com os dados das vacinas',
				icon: '/android-icon-192x192.png',
			});
		});
	}
	useEffect(function () {
		if (Notification.permission === 'granted') {
			registerOnFirebase();
		}
	}, []);

	return <span onClick={allowNotifications}>{children} </span>;
}
