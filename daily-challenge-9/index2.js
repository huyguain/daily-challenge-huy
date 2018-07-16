function maxSub (arr) {
	let s = [];
	let max = -999, lenArr = arr.length;
	s[0] = arr[0];
	for (let i = 1; i < lenArr; i++) {
		if (s[i-1] <= 0) s[i] = arr[i];
		else s[i] = s[i-1] + arr[i];
		max = (max < s[i]) ? s[i] : max;
	} 
	return max;
}

console.log(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

