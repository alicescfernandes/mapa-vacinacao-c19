const regioes = {
	continente: '/api/rt/continente',
	nacional: '/api/rt/nacional',
	alentejo: '/api/rt/alentejo',
	algarve: '/api/rt/algarve',
	lvt: '/api/rt/lvt',
	madeira: '/api/rt/madeira',
	acores: '/api/rt/acores',
};

export default async function handler(req, res) {
	res.end(JSON.stringify(regioes));
}
