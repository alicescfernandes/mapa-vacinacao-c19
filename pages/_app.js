import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.scss';
import '@babel/polyfill';
import { trackPlausible } from '../utils';
function NextApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

NextApp.getInitialProps = async (app) => {
	trackPlausible(app.ctx.req);
	return {};
};

export default NextApp;
