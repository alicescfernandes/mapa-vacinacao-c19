export let FOREGROUND_COLOR = '#01AE97';
export let COLOR_1 = '#017a6a';
export let COLOR_2 = '#01574c';
export let COLOR_3 = '#00342d';
export let COLOR_4 = '#80d7cb';

export let COLOR_5 = '#AD1413';
export let COLOR_6 = '#0A6CAD';
export let COLOR_7 = '#AD6E13';

// Tints
export let TINT_70 = '#b3e7e0';
export let TINT_50 = '#80d7cb';
export let TINT_30 = '#4dc6b6';

export let COLOR = '#01AE97';

// Shades
export let SHADE_30 = '#017a6a';
export let SHADE_50 = '#01574c';
export let SHADE_70 = '#00342d';

// Square Complement
export let COMPLEMENT_1 = '#0A9DD1';
export let COMPLEMENT_2 = '#D11541';
export let COMPLEMENT_3 = '#D17615';

export let RESIZE_TRESHOLD = 1040;

export let lineChartCommon = {
	fill: true,
	lineTension: 0.5,
	lineBorder: 1,
	borderWidth: 3,
	borderJoinStyle: 'miter',
	pointBorderWidth: 1,
	pointHoverRadius: 3,
	pointHoverBorderWidth: 2,
	pointRadius: 1,
	pointHitRadius: 10,
};
export let lineChartCommon2 = {
	fill: false,
	lineTension: 0.5,
	lineBorder: 1,
	borderWidth: 3,
	borderJoinStyle: 'miter',
	pointBorderWidth: 0,
	pointHoverRadius: 0,
	pointHoverBorderWidth: 0,
	pointRadius: 0,
	pointHitRadius: 0,
};

export const REGIOES = {
	MADEIRA: 'madeira',
	PORTUGAL: 'portugal',
	ACORES: 'ACORES',
};

export const ECDC_MAPPING = {
	alentejo: 'PTCSR01',
	algarve: 'PTCSR02',
	acores: 'PTCSR03',
	centro: 'PTCSR04',
	lisboa: 'PTCSR05',
	madeira: 'PTCSR06',
	norte: 'PTCSR07',
	portugal: 'PT',

	PTCSR01: 'alentejo',
	PTCSR02: 'algarve',
	PTCSR03: 'acores',
	PTCSR04: 'centro',
	PTCSR05: 'lisboa',
	PTCSR06: 'madeira',
	PTCSR07: 'norte',
	PT: 'portugal',
};

export const MADEIRA_DICOS = {
	3101: 'calheta',
	3102: 'camara_lobos',
	3108: 'santa_cruz',
	3201: 'porto_santo',
	3106: 'porto_moniz',
	3110: 'svincente',
	3109: 'santana',
	3105: 'ponta_sol',
	3103: 'funchal',
	3104: 'machico',
	3107: 'ribeira_brava',

	calheta: '3101',
	camara_lobos: '3102',
	santa_cruz: '3108',
	porto_santo: '3201',
	porto_moniz: '3106',
	svincente: '3110',
	santana: '3109',
	ponta_sol: '3105',
	funchal: '3103',
	machico: '3104',
	ribeira_brava: '3107',
};

export const ACORES_DICOS = {
	49: 'corvo',
	48: 'flores',
	47: 'faial',
	46: 'pico',
	45: 'sao_jorge',
	44: 'graciosa',
	43: 'terceira',
	42: 'sao_miguel',
	41: 'santa_maria',

	corvo: 49,
	flores: 48,
	faial: 47,
	pico: 46,
	sao_jorge: 45,
	graciosa: 44,
	terceira: 43,
	sao_miguel: 42,
	santa_maria: 41,
};

export const ACORES_DICOS_CONCELHOS = {
	4901: 'corvo',
	4802: 'flores',
	4801: 'flores',
	4701: 'faial',
	4602: 'pico',
	4603: 'pico',
	4601: 'pico',
	4501: 'sao_jorge',
	4502: 'sao_jorge',
	4401: 'graciosa',
	4301: 'terceira',
	4302: 'terceira',
	4201: 'sao_miguel',
	4202: 'sao_miguel',
	4203: 'sao_miguel',
	4204: 'sao_miguel',
	4205: 'sao_miguel',
	4206: 'sao_miguel',
	4101: 'santa_maria',
};

export const ARS_MAPPING = {
	alentejo: 'ARS Alentejo',
	algarve: 'ARS Algarve',
	lvt: 'ARS Lisboa e Vale do Tejo',
	norte: 'ARS Norte',
	centro: 'ARS Centro',

	'ARS Alentejo': 'alentejo',
	'ARS Algarve': 'algarve',
	'ARS Lisboa e Vale do Tejo': 'lvt',
	'ARS Norte': 'norte',
	'ARS Centro': 'centro',
};

export const SNS_WEEKS = {
	'08/02/2021': 'De 27/12 a 14/02',
	'15/02/2021': '15/02 a 21/02',
	'22/02/2021': '22/02 a 28/02',
	'01/03/2021': '01/03 a 07/03',
	'08/03/2021': '08/03 a 14/03',
	'15/03/2021': '15/03 a 21/03',
	'22/03/2021': '22/03 a 28/03',
	'29/03/2021': '29/03 a 04/04',
	'05/04/2021': '05/04 a 11/04',
	'12/04/2021': '12/04 a 18/04',
	'19/04/2021': '19/04 a 25/04',
	'26/04/2021': '26/04 a 02/05',
	'03/05/2021': '03/05 a 09/05',
	'10/05/2021': '10/05 a 16/05',

	'2021-02-08': 'De 27/12 a 14/02',
	'2021-02-15': '15/02 a 21/02',
	'2021-02-22': '22/02 a 28/02',
	'2021-03-01': '01/03 a 07/03',
	'2021-03-08': '08/03 a 14/03',
	'2021-03-15': '15/03 a 21/03',
	'2021-03-22': '22/03 a 28/03',
	'2021-03-29': '29/03 a 04/04',
	'2021-04-05': '05/04 a 11/04',
	'2021-04-12': '12/04 a 18/04',
	'2021-04-19': '19/04 a 25/04',
	'2021-04-19': '19/04 a 25/04',
	'2021-04-26': '26/04 a 02/05',
	'2021-03-05': '03/05 a 09/05',
	'2021-03-10': '10/05 a 16/05',
};
