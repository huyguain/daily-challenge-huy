function countnndSay(n) {
	// Base cases
	debugger;
	if (n == 1)      return '1';
	if (n == 2)      return '11';
	let str = '11';
	for (let i = 3; i <= n; i++) {
		let count = 1;
		const len = str.length;
		let temp = '';
        for (let j = 0; j < len - 1; j++) {
			if (str[j] != str[j+1]) {
				temp += count + str[j];
				count = 1;
			} else {
				count++;
			}
		}
		str = temp + count + str[len-1];
	}
	return str;
}

export { countnndSay }