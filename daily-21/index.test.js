import { countnndSay } from './index';

describe('Test countnndSay function', () => {
    it ('Test case 1:', () => {
        const result = countnndSay(4);
        expect(result).toBe('1211');
    });

    it('Test case 2:', () => {
      const result = countnndSay(10);
      expect(result).toBe('13211311123113112211');
    });
})