function kmpTale(W) {
	const sLength = W.length;
	let T = new Array(sLength),
		m = 0;
	T[0] = 0;
	for (let i = 1; i < sLength; i++) {
		while (m > 0 && W[i] !== W[m]) m = T[m - 1];
		if (W[i] === W[m]) m++;
		T[i] = m;
	}
	return T;
}

function findNumber(string) {
	const W =
		string +
		'$' +
		string
			.split('')
			.reverse()
			.join('');
	const T = kmpTale(W);
	return string.length - T[T.length - 1];
}

export { findNumber };
