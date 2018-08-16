function minXOR(arr) {
    let min = Infinity;
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let t = arr[i] ^ arr[j];
            min = t < min ? t : min;
        }
    }
    return min;
}

export { minXOR }