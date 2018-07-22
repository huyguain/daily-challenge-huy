function antiDiagonals (arr) {
	let result = [];
	const len = arr[0].length * 2 - 1;
	// result.length = len;
	for (let i = 0; i < len; i++) {
		result[i] = []; 
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			result[i + j].push(arr[i][j]);
		}
	}
	console.log(result);
	return result;
}

describe('Test daily-9-7', () => {
  it('should return', () => {
    const result = antiDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1], [2, 4], [3, 5, 7], [6, 8], [9]]);
  });
});