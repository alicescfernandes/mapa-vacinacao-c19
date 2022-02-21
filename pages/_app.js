import './../wydr';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.scss';
import '@babel/polyfill';
import { Footer } from '../components/Footer';
import { Metatags } from '../components/MetaTags';
import { Header } from '../components/Header';
import { RegiaoContext } from './../components/context/regiao';
import { useEffect } from 'react';

let allowed_regioes = ['/', 'acores', 'madeira'];
function NextApp({ Component, props }) {
	// Unconventional way of not having multiple sockets connected between pages
	useEffect(() => {}, []);
	return (
		<>
			<Metatags></Metatags>
			<Header></Header>
			<Component />
			<Footer></Footer>
		</>
	);
}

NextApp.getInitialProps = async (app) => {
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
