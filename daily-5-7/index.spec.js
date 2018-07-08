import { findNumber } from './index';


describe('Test daily-5-7', () => {
  it('should return', async () => {
    const result = findNumber([-1,3,-2,-9,2,1]);
    expect(result).toBe(4);
  });
});
