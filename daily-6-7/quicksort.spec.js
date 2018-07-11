function quicksort (arr) {
	if (arr.length <= 1) return arr;	

	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}

	return [...quicksort(left), pivot, ...quicksort(right)];
}

function hotelManage (arrivals, departures, k) {
	arrivals = quicksort(arrivals);
	departures = quicksort(departures);
	const len = arrivals.length;
	let start = arrivals[0];
	const end = departures[len - 1];
	let A, D;
	A = D = 0;
	for (;start <= end; start++) {
		while ((D < len) && (start === departures[D])) {
			D++;
			k++;
		}
		while ((A < len) && (start === arrivals[A])) {
			if (k > 0) k--;
			else return false;
			A++;
		}
	}
	return true;
}

describe('Test daily-6-7', () => {
  it('should return', async () => {
    const result = hotelManage([1, 2, 3, 4], [10, 2, 6, 14], 4);
    expect(result).toBe(true);
  });
});
