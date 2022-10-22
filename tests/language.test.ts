const lang = window.navigator.language;
describe('the language component', function() {
	beforeEach(() => {
		expect(lang).toBeDefined();
	});
	test('regular expressions work', () => {
		expect(/en/.test(lang)).toBeTruthy();
	});
	test('returns are created', () => {
		const checkIfEnglish = () => {
			if (/en/.test(lang)) {
				return 'English';
			}
		};
		const isEnglish = checkIfEnglish();
		expect(isEnglish).toBe('English');
	});
});