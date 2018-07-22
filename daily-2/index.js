const n = 10;
let arr = [];

for (let i = 0; i < n; i++) {
	arr[i] = [];
}

arr[0][0] = 1;

for (let i = 1; i < n; i++) {
	for (let j = 0; j < i + 1; j++) {
		let t1 = arr[i-1][j-1] ? arr[i-1][j-1] : 0;
		let t2 = arr[i-1][j] ? arr[i-1][j] : 0;
		arr[i][j] = t1 + t2;
	}
}

console.log(arr);