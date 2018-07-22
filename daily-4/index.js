const arr = [-1,3,-2,-9,2,1];

export function findNumber (arr) {
	let result = 1;
	const arrLen = arr.length;
	for (let i = 0; i < arrLen; i++) {
		if (arr[i] <= 0) continue;
		arr[arr[i]-1] = arr[arr[i]-1] ? arr[arr[i]-1].toString() : ''
	}
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] != 'string') {
			result = i + 1;
			break;
		}
	}
	return result;
}



const result = findNumber(arr);
console.log(result)
