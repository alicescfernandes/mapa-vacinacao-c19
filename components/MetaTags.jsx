import vaccines from '../data/vaccines.json';
import date from '../data/last-update.json';
import Head from 'next/head';
import { useEffect } from 'react';
import { formatNumber } from '../utils';
export function Metatags({ isUpdating }) {
	let options = {
		month: '2-digit',
		day: 'numeric',
	};
	let vacinas = vaccines[vaccines.length - 1];
	let data = new Date(vacinas.Data);
	let num = formatNumber(vacinas.Vacinados_Ac);
	let title = 'Vacinação COVID-19';
	useEffect(() => {
		if (isUpdating) {
			document.title = 'Atualizado - ' + title;
		}
	}, [isUpdating]);

	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="title" content="Vacinação - COVID 19" />
			<meta name="description" content={`Sabia que até dia ${data.getDate()}/${data.getMonth()+1} foram administradas ${num} vacinas? Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://vacinacaocovid19.pt/" />
			<meta property="og:title" content="Vacinação - COVID 19" />
			<meta property="og:updated_time" content={new Date(date.date).toISOString()} />
			<meta property="og:description" content={`Sabia que até dia ${data.getDate()}/${data.getMonth()+1} foram administradas ${num} vacinas? Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="og:image" content="https://vacinacaocovid19.pt/imagem.png" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://vacinacaocovid19.pt/" />
			<meta property="twitter:title" content="Vacinação - COVID 19" />
			<meta property="twitter:description" content={`Sabia que até dia ${data.getDate()}/${data.getMonth()+1} foram administradas ${num} vacinas? Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="twitter:image" content="https://vacinacaocovid19.pt/imagem.png" />
			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#01AE97" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="msapplication-TileColor" content="#01AE97" />
			<meta name="theme-color" content="#01AE97" />
			<title>{title}</title>
		</Head>
	);
}
