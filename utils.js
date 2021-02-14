let numberFormatter = new Intl.NumberFormat('pt-PT', {
	minimumIntegerDigits: 2,
});

export const formatNumber = (number) => {
	return numberFormatter.format(number).replace(/,/gm, ' ');
};
