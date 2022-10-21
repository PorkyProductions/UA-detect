const productID = window.navigator.product;


export const getProductID = (): string | 'Gecko' | 'WebKit' | 'Trident' | 'Presto' | 'Unknown' | Error => {
	if (productID === 'Gecko') {
		return 'Gecko';
	} else if (productID === 'WebKit') {
		return 'WebKit';
	} else if (productID === 'Trident') {
		return 'Trident';
	} else if (productID === 'Presto') {
		return 'Presto';
	} else {
		console.error(`Unknown engine (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);  // throw error;
		return 'Unknown';
	}
};

const engine = getProductID();

export {engine};