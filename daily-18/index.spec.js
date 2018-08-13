import { 
    kmpMatching
} from './index.js';

describe('Test for KMP algorithm', () => {
    it('Case 1: ', () => {
        const string = 'AABBACAADAABAABA',
          substring = 'AABA';
        const result = kmpMatching(string, substring);
        expect(result).toBe(9);
    });
    it('Case 2: ', () => {
      const string = 'bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba',
        substring = 'babaaa';
      const result = kmpMatching(string, substring);
      expect(result).toBe(48);
    });
    it('Case 3: ', () => {
      const string = 'aabaaaababaabbbabbabbbaabababaaaaaababaaabbabbabbabbaaaabbbbbbaabbabbbbbabababbaaabbaabbbababbb',
        substring = 'bba';
      const result = kmpMatching(string, substring);
      expect(result).toBe(13);
    });
})