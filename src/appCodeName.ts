const appCodeName = window.navigator.appCodeName;

export const getCodeName = (): string | 'mozilla' | 'Microsoft' | 'Apple' | 'Google' | Error => {
	if (appCodeName === 'Mozilla') {
		return 'mozilla';
	} else if (appCodeName === 'Microsoft') {
		return 'Microsoft';
	} else if (appCodeName === 'Apple Computer, Inc.') {
		return 'Apple';
	} else if (appCodeName === 'Google Inc.') {
		return 'Google';
	} else {
		console.error(`Unknown appCodeName (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
		return 'Unknown';
	}
};

const codeName = getCodeName();


export { codeName };