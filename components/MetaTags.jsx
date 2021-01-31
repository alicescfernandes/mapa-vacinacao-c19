import { useData } from '../hooks/useData';
import vaccines from '../data/vaccines.json';

export function Metatags() {
	let options = {
		month: '2-digit',
		day: 'numeric',
	};
	let vacinas = vaccines[vaccines.length - 1];
	let numberFormatter = new Intl.NumberFormat();
	let dateFormater = new Intl.DateTimeFormat('pt-PT', options);
	let parts = dateFormater.formatToParts(vacinas.Data);
	console.log(parts);
	let num = numberFormatter.format(vacinas.Vacinados_Ac).replace(',', ' ');
	return (
		<>
			<title> de Vacinação - COVID 19</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="title" content="Plano de Vacinação - COVID 19" />
			<meta name="description" content={`Sabia que até dia ${parts[2].value}/${parts[0].value} foram administradas ${num} vacinas. Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://vacinacaocovid19.pt/" />
			<meta property="og:title" content="Plano de Vacinação - COVID 19" />
			<meta property="og:description" content={`Sabia que até dia ${parts[2].value}/${parts[0].value} foram administradas ${num} vacinas. Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="og:image" content="https://vacinacaocovid19.pt/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://vacinacaocovid19.pt/" />
			<meta property="twitter:title" content="Plano de Vacinação - COVID 19" />
			<meta property="twitter:description" content={`Sabia que até dia ${parts[2].value}/${parts[0].value} foram administradas ${num} vacinas. Veja esta e mais informação aqui mais informação sobre o plano de vacinação contra a covid 19.`} />
			<meta property="twitter:image" content="https://vacinacaocovid19.pt/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
		</>
	);
}
