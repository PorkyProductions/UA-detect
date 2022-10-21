const productID = window.navigator.product;

export const getProductID = (): string | 'Gecko' | 'WebKit' | 'Trident' | 'Presto' | 'Unknown' | Error => {
	if (productID === 'Gecko') {
		return 'Gecko';
	} if (productID === 'WebKit') {
		return 'WebKit';
	} if (productID === 'Trident') {
		return 'Trident';
	} if (productID === 'Presto') {
		return 'Presto';
	}
	console.error(`Unknown engine (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`); // throw error;
	return 'Unknown';
};

const engine = getProductID();

export { engine };
