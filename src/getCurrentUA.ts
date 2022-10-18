const getCurrentUA = (): string => {
	return navigator.userAgent;
};
const currentUA = getCurrentUA();

export { currentUA, getCurrentUA };
