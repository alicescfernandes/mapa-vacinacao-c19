fetch('https://archive.ph/submit/', {
	headers: {
		accept:
			'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
		'cache-control': 'no-cache',
		'content-type': 'application/x-www-form-urlencoded',
		pragma: 'no-cache',
		'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
		'sec-ch-ua-mobile': '?0',
		'sec-fetch-dest': 'document',
		'sec-fetch-mode': 'navigate',
		'sec-fetch-site': 'same-origin',
		'sec-fetch-user': '?1',
		'upgrade-insecure-requests': '1',
	},
	referrer: 'https://archive.ph/',
	referrerPolicy: 'strict-origin-when-cross-origin',
	body:
		'submitid=cbt75NWSv4KRpJMhs0F77KonRU54UHb5wuZfMwv4qHQFeBCAxk5yF9ZSllqKjT0O&url=https%3A%2F%2Fwww.sns.gov.pt%2Fmonitorizacao-do-sns%2Fvacinas-covid-19%2F',
	method: 'POST',
	mode: 'cors',
	credentials: 'include',
});
