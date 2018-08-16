import { minXOR } from './index';

describe('Test minXOR function', () => {
    it ('Test case 1:', () => {
        const result = minXOR([0, 2, 5, 7]);
        expect(result).toBe(2);
    });

    it('Test case 2:', () => {
      const result = minXOR([0, 4, 7, 9]);
      expect(result).toBe(3);
    });
})