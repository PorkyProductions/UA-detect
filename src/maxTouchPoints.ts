const getMaxTouchPoints = () => navigator.maxTouchPoints;
const maxTouchPoints: number = getMaxTouchPoints();

export { maxTouchPoints, getMaxTouchPoints };
