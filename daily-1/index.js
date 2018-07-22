const n = 6;
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = [];
}

let i = 0, j = 0, t = 1;
let up = 0, down = n - 1, left = 0, right = n - 1; 
while(1) {
	if (t > n*n) break;
	if (i === up && j < right) {
		arr[i][j] = t;
		j++;
		if (j === right) up++;
	}
	else if (i < down && j === right ) {
		arr[i][j] = t;
		i++;
		if (i === down) right--;
	}
	else if (i === down && j > left) {
		arr[i][j] = t;
		j--;
		if (j === left) down--;
	}
	else if (i > up && j === left) {
		arr[i][j] = t;
		i--;
		if (i === up) left++;
	} else {
		arr[i][j] = t;
	}
	t += 1;
}
console.log(i, j, up, right);
console.log(arr)