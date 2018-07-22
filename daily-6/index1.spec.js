function rotateMatrix (arr) {
	const n = arr.length;
	for (let c = 0; c < Math.floor(n/2); c++) {
		const l = n - c - 1;
		for (let i = 0; i < l - c; i++) {
			const t 		= arr[l - i][c];	
			arr[l - i][c] 	= arr[l][l - i];
			arr[l][l - i] 	= arr[c + i][l];
			arr[c + i][l] 	= arr[c][c + i];
			arr[c][c + i] 	= t;
		}
	}
	console.log(arr);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotateMatrix(arr)