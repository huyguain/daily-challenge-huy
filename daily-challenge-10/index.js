function isPrime(number) {
	for (let i = 2; i*i <= number; i++) {
		if (number%i === 0) return false; 
	}
	return true
}
function primeSum(number) {
	let result = [];
	for (let i = 2; i < number; i++) {
		if (isPrime(i) && isPrime(number-i)) {
			result[0] = i;
			result[1] = number-i;
			return result;
		}
	}
}

console.log(primeSum(10000));