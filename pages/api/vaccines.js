import vaccines from './../../data/vaccines.json';

export default (req, res) => {
	res.statusCode = 200;
	res.json(vaccines);
};
