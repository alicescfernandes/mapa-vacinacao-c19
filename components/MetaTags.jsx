import vaccines from '../data/vaccines.json';
import date from '../data/last-update.json';
import Head from 'next/head';
export function Metatags() {
	let options = {
		month: '2-digit',
		day: 'numeric',
	};
	let vacinas = vaccines[vaccines.length - 1];
	let numberFormatter = new Intl.NumberFormat();
	let dateFormater = new Intl.DateTimeFormat('pt-PT', options);
	let parts = dateFormater.formatToParts(vacinas.Data);
	let num = numberFormatter.format(vacinas.Vacinados_Ac).replace(',', ' ');
	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="title" content="Plano de Vacinação - COVID 19" />
			<meta name="description" content={`Sabia que até dia ${parts[2].value}/${parts[0].value} foram administradas ${num} vacinas? Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://vacinacaocovid19.pt/" />
			<meta property="og:title" content="Plano de Vacinação - COVID 19" />
			<meta property="og:updated_time" content={new Date(date.date).toISOString()} />
			<meta property="og:description" content={`Sabia que até dia ${parts[2].value}/${parts[0].value} foram administradas ${num} vacinas? Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="og:image" content="https://vacinacaocovid19.pt/imagem.png" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://vacinacaocovid19.pt/" />
			<meta property="twitter:title" content="Plano de Vacinação - COVID 19" />
			<meta property="twitter:description" content={`Sabia que até dia ${parts[2].value}/${parts[0].value} foram administradas ${num} vacinas? Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="twitter:image" content="https://vacinacaocovid19.pt/imagem.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<meta name="msapplication-TileColor" content="#01AE97" />
			<meta name="theme-color" content="#01AE97" />
			<title>Plano de Vacinação - COVID 19</title>
		</Head>
	);
}
