const getMaxTouchPoints = () => {
	return navigator.maxTouchPoints;
};
const maxTouchPoints: number = getMaxTouchPoints();

export { maxTouchPoints, getMaxTouchPoints };