let count = 0;
function uniquePaths (m, n) {
    if (m === 1 || n === 1) return 1;
    return uniquePaths(m-1, n) + uniquePaths(m, n-1);
}
console.log(uniquePaths(4, 4));