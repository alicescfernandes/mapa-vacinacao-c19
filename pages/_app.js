import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.scss';
import '@babel/polyfill';
import { trackPlausible } from '../utils';
import { Footer } from '../components/Footer';
import { Metatags } from '../components/MetaTags';
import { Header } from '../components/Header';
import { RegiaoContext } from './../components/context/regiao';

function NextApp({ Component, props }) {
	console.log('pageProps', props.url);
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

	return { props: { regiao: regiao } };
};

export default NextApp;
