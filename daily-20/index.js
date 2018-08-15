function convert(str, number) {
	let arr = new Array(number);
	const strLen = str.length;
	let direction = 1,
		type = 0;
	for (let i = 0; i < number; i++) {
		arr[i] = '';
	}
	for (let i = 0; i < strLen; i++) {
		if (type === 0) direction = 1;
		if (type === number - 1) direction = 0;
		arr[type] += str[i];
		type = direction ? ++type : --type;
	}
	return arr.join('');
}

export { convert };

console.log(convert('PAYPALISHIRING', 3));
