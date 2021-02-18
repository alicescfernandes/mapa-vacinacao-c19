import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.scss';
import '@babel/polyfill';
import fetchNode from 'node-fetch';
import { trackPlausible } from '../utils';
function NextApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

NextApp.getInitialProps = async (app) => {
	trackPlausible(app.ctx.req.headers.host, app.ctx.req.url, app.ctx.req.headers['user-agent']);
	return {};
};

export default NextApp;
