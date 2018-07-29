import { squareRoot } from './index.js';

describe('Square root', () => {
	it('should return 1', () => {
		const result = squareRoot(11);
        expect(result).toBe(3);
	})
	it('should return 20', () => {
		const result = squareRoot(20);
        expect(result).toBe(4);
	})
})