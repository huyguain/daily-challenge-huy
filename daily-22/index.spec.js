import { addBinaryString } from './index';

describe('Test add binary string', () => {
	it('case 1:', () => {
		const result = addBinaryString('100', '11');
		expect(result).toEqual('111');
	});
	it('case 1:', () => {
		const result = addBinaryString('1010110111001101101000', '1000011011000000111100110');
		expect(result).toEqual('1001110001111010101001110');
	});
});