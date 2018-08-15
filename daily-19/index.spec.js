import { findNumber } from './index';

describe('Test function findNumber', () => {
	it('Test case 1:', () => {
		const result = findNumber('ABC');
		expect(result).toBe(2);
	});

	it('Test case 2:', () => {
		const result = findNumber('AACECAAAA');
		expect(result).toBe(2);
	});
});
