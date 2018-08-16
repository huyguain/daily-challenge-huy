function addBinaryString(a, b) {
	const result = parseInt(a, 2) + parseInt(b, 2);
	return result.toString(2);
}

export { addBinaryString };