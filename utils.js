let numberFormatter = new Intl.NumberFormat();

export const formatNumber = (number) => {
	return numberFormatter.format(number).replace(/,/gm, ' ');
};
