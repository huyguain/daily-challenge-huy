import { convert } from './index';

describe('Test convert function', () => {
	it('Test case 1:', () => {
		const result = convert('PAYPALISHIRING', 3);
		expect(result).toBe('PAHNAPLSIIGYIR');
	});

	it('Test case 2:', () => {
		const result = convert('ABCD', 2);
		expect(result).toBe('ACBD');
	});
});
