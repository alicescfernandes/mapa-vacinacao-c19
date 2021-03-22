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
	let title = 'Vacinação COVID-19 - Dashboard sobre os dados da campanha de vacinação contra a COVID-19 em Portugal e Arquipélagos';
	let descricao = `Site informativo sobre a administração das vacinas em Portugal. É atualizado sempre que possível, assim que os dados forem sendo atualizados. Contamos com dados da Direção-Geral da Saúde, Our World in Data, Centro Europeu de Controlo de Doenças e informação do Governo de Portugal, temos gráficos sobre as vacinas administradas por dia e desde o início da campanha de vacinação, compradas, a faixa etária dos inoculados, infeções, óbitos, entre outros e temos números relacionados com a imunidade de grupo entre outros. Todo o nosso código é open-source, e pode ser consultado no github onde está alojado. Temos ainda uma conta no twitter onde pode seguir as últimas atualizações em relação aos números da campanha de vacinação da COVID-19.`;
	useEffect(() => {
		if (isUpdating) {
			document.title = 'Atualizado - ' + title;
		}
	}, [isUpdating]);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="title" content={title} />
				<meta name="description" content={descricao} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://vacinacaocovid19.pt/" />
				<meta property="og:title" content="Vacinação - COVID 19" />
				<meta property="og:description" content={descricao} />
				<meta property="og:image" content="https://vacinacaocovid19.pt/imagem.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://vacinacaocovid19.pt/" />
				<meta property="twitter:title" content="Vacinação - COVID 19" />
				<meta property="twitter:description" content={descricao} />
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
			<p className="hide-except-seo">{descricao}</p>
		</>
	);
}
