const getCurrentUA = (): string => navigator.userAgent;
const currentUA = getCurrentUA();

export { currentUA, getCurrentUA };
