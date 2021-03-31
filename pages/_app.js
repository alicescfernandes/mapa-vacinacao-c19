import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.scss';
import '@babel/polyfill';
import { trackPlausible } from '../utils';
import { Footer } from '../components/Footer';
import { Metatags } from '../components/MetaTags';
import { Header } from '../components/Header';
import { RegiaoContext } from './../components/context/regiao';
import { useEffect } from 'react';
import { initSockets } from '../hooks/initSockets';
function NextApp({ Component, props }) {
	// Unconventional way of not having multiple sockets connected between pages
	useEffect(() => {
		// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
		var firebaseConfig = {
			apiKey: 'AIzaSyBcHZc1Rk5CeJDkwwaBOdCzYgdA6V5WK3g',
			authDomain: 'covid19-249f1.firebaseapp.com',
			projectId: 'covid19-249f1',
			storageBucket: 'covid19-249f1.appspot.com',
			messagingSenderId: '636238011730',
			appId: '1:636238011730:web:bf4a0deef86c884c3b6e8b',
			measurementId: 'G-DYYRVR03RS',
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		const messaging = firebase.messaging();
		console.log(firebase);
		messaging
			.getToken({ vapidKey: 'BHtOyn7DJeWzTT1uCITnVOzCpFI4jyOGNo_NQCKoJktP56tHqSVCPtyn99tgpWPRsWzRTu07ahM6fjljP_01K3g' })
			.then((currentToken) => {
				console.log(currentToken);
				if (currentToken) {
					fetch('/api/messaging', {
						method: 'POST',
						body: JSON.stringify({ fcm_token: currentToken }),
						headers: { 'content-type': 'application/json' },
					}).then((res) => {
						console.log(res.status);
					});
				} else {
					console.log('No registration token available. Request permission to generate one.');
				}
			})
			.catch((err) => {
				console.log('An error occurred while retrieving token. ', err);
			});

		messaging.onMessage((payload) => {
			console.log(payload);
			new Notification(payload.notification.title, {
				body: payload.notification.body,
				icon: '/android-icon-192x192.png',
			});
		});

		initSockets(function (data) {
			let event = new Event('socket_update');
			event.data = data;
			window.dispatchEvent(event);
		});
	}, []);
	return (
		<RegiaoContext.Provider value={props.regiao}>
			<Metatags></Metatags>
			<Header></Header>
			<Component />
			<Footer></Footer>
		</RegiaoContext.Provider>
	);
}

NextApp.getInitialProps = async (app) => {
	trackPlausible(app.ctx.req);
	let url = app?.ctx?.req?.url.replace('/', '') || app.ctx.pathname.replace('/', '');
	let regiao = 'portugal';
	if (url !== '') {
		regiao = url;
	}

	return { props: { regiao: regiao, pusher: '' } };
};

export default NextApp;
