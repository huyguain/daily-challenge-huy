function hotelManage (arrivals, departures, k) {
	const lengArr = arrivals.length;
	let arr = [];

	for (let i = 0; i < departures[lengArr-1]; i++) {
		arr[i] = 0;
	}

	for (let i = 0; i < lengArr; i++) {
		for (let j = arrivals[i]; j <= departures[i]; j++) {
			arr[j-1]++;
		}
	}
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > k) return false;
	}
	return true;
}

const result = hotelManage([1, 2, 3, 4], [10, 2, 6, 14], 4);
console.log(result);

export default hotelManage