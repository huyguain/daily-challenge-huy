// 1. Thuat toan truc tiep
function largestSum (arr) {
	const lenArr = arr.length;
	let max = -999;
	for (let i = 0; i < lenArr; i++) {
		let sum = 0;
		for (let j = i; j < lenArr; j++) {
			sum += arr[j];
			if (sum > max) {
				max = sum;
			}
		}
	}
	return max;
}

console.log(largestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

