function squareRoot(number) {
	if (number === 0 || number === 1) return number;
	let start = 1;
	let end = number;
	let result = 0;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (mid * mid === number) return mid;
		else if (mid * mid < number) {
			start = mid + 1;
			result = mid;
		} else {
			end = mid - 1;
		}
	}
	return result;
}

function countPainter(arr, mid) {
	let leng = arr.length,
		total = 0,
		count = 1;
	for (let i = 0; i < leng; i++) {
		total += arr[i];
		if (total > mid) {
			count++;
			total = arr[i];
		}
	}
	return count;
}

function minimumTime(arr, k) {
	let start = Math.max(...arr);
	let end = arr.reduce((a, b) => a + b);
	console.log(start, end);
	while (start < end) {
		const mid = Math.floor((start + end) / 2);
		painter = countPainter(arr, mid);
		if (painter <= k) end = mid;
		else start = mid + 1;
	}
	return start;
}

console.log(minimumTime([10, 20, 30, 40], 2));

export { squareRoot };
