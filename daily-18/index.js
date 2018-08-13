function kmpTable(W) {
	let WLength = W.length;
	let T = new Array(WLength);
	T[0] = 0;
	let m = 0;
	for (let i = 1; i < WLength; i++) {
		while (m > 0 && W[i] !== W[m]) m = T[m - 1];
		if (W[i] === W[m]) m++;
		T[i] = m;
	}
	return T;
}

function kmpMatching(S, W) {
	let m = 0, 
		i = 0, 
		T = kmpTable(W),
		lengthS = S.length;
	while(m + i < lengthS) {
		if (W[i] === S[m + i]) {
			i++;
			if (i === W.length) return m;
		} else {
			if (i > 0) {
				m = m + i - T[i - 1];
				i = T[i - 1];
			} else {
				i = 0;
				m += i + 1;
			}
		}
	}
}

export { kmpMatching }
