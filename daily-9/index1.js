// 1. Thuat toan chia de tri
function maxLeft (arr, i, j) {
	let max = -999, sum = 0;
	for (let t = j; t >= i; t--) {
		sum += arr[t];
		if (max < sum) max = sum;
	}
	return max;
}

function maxRight (arr, i, j) {
	let max = -999, sum = 0;
	for (let t = i; t <= j; t++) {
		sum += arr[t];
		if (max < sum) max = sum;
	}
	return max;
}

function maxSub (arr, i, j) {
	if (i === j) return arr[i];
	const m = Math.floor((i + j)/2);
	const wL = maxSub(arr, i, m);
	const wR = maxSub(arr, m+1, j);
	const wM = maxLeft(arr, i, m) + maxRight(arr, m+1, j);
	const max = Math.max(wL, wM, wR);
	return max;
}

console.log(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4], 0, 8));

