let numberFormatter = new Intl.NumberFormat('pt-PT', {
	minimumIntegerDigits: 2,
});

export const formatNumber = (number) => {
	if (number > 9) {
		return numberFormatter.format(number).replace(/,/gm, ' ');
	}
	return 0;
};
