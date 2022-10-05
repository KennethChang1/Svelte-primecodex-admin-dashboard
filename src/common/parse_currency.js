export const parseCurrency = (inputNum) => {
	const formatter = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	return formatter.format(Number(inputNum));
};
