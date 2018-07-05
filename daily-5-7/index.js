const arr = [1,2,0];
let newArr = [];
let result = 1;
const arrLen = arr.length;

for (let i = 0; i < arrLen; i++) {
	if (arr[i] <= 0) continue;
	newArr[arr[i] - 1] = true;
}

console.log(newArr)

if (newArr.length === 0) result = 1;
else {
	for (let i in newArr) {
		if (!newArr[i])  {
			result = i + 1;
			break;
		}
		if (i == newArr.length - 1) {
			result = newArr[i] ? (parseInt(i) + 2) : (parseInt(i) + 1) ;
		}
	}
} 
// function assign (value, arr) {
// 	if (arr[value-1]) {
// 		let temp = arr[value-1];
// 		arr[value-1] = true;
// 		assign(t, arr);
// 	} else {
// 		arr[value-1] = true;
// 	}
// }

console.log(result)
