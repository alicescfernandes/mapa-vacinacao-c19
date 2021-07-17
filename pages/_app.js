import './../wydr';
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
let allowed_regioes = ['/', 'acores', 'madeira'];
function NextApp({ Component, props }) {
	// Unconventional way of not having multiple sockets connected between pages
	useEffect(() => {
		initSockets(function (data) {
			let event = new Event('socket_update');
			event.data = data;
			window.dispatchEvent(event);
		});

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js', { scope: './' }).then(
				function (registration) {
					/* success */
				},
				function (error) {
					/* error */
				}
			);
		} else {
			//not supported
		}
	}, []);
	return (
		<RegiaoContext.Provider value={props.regiao || 'portugal'}>
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
	url = url.split('?')[0];
	let regiao = 'portugal';
	if (url !== '') {
		regiao = url;
	}

	if (!allowed_regioes.includes(regiao)) regiao = 'portugal';
	return { props: { regiao: regiao, pusher: '' } };
};

export default NextApp;
