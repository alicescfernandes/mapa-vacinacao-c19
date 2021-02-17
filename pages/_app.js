import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.scss';
import '@babel/polyfill';
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
