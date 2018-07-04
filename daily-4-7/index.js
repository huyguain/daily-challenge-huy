const arr = [3, 1, 2, 5, 3];
const lenArr = arr.length;
let arrTemp = [], a = 0, b = 0;

for (let i = 0; i < lenArr; i++) {
	arrTemp[i] = 0;
}

for (let value of arr) {
	arrTemp[value-1] += 1;
}

for (let index in arrTemp) {
	if (arrTemp[index] === 2) a = parseInt(index) + 1;
	if (arrTemp[index] === 0) b = parseInt(index) + 1;
}

console.log('hihi', a, b);