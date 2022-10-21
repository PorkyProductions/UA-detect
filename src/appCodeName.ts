const { appCodeName } = window.navigator;

export const getCodeName = (): string | 'mozilla' | 'Microsoft' | 'Apple' | 'Google' | Error => {
	if (appCodeName === 'Mozilla') {
		return 'mozilla';
	} if (appCodeName === 'Microsoft') {
		return 'Microsoft';
	} if (appCodeName === 'Apple Computer, Inc.') {
		return 'Apple';
	} if (appCodeName === 'Google Inc.') {
		return 'Google';
	}
	console.error(`Unknown appCodeName (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	return 'Unknown';
};

const codeName = getCodeName();

export { codeName };
