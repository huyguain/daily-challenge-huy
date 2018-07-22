function isPrime(number) {
	for (let i = 2; i*i <= number; i++) {
		if (number%i === 0) return false; 
	}
	return true;
}

function primeSum(number) {
	for (let i = 2; i < number; i++) {
		if (isPrime(i) && isPrime(number-i)) {
			return [i, number-i];
		}
	}
}

console.log(primeSum(10000));