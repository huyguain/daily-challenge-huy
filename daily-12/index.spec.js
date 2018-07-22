import { excelColumnNumber } from './index.js'
describe('Excel Column Number', () => {
    it('should return', () => {
        const result = excelColumnNumber('AB');
        expect(result).toBe(28);
    });
});