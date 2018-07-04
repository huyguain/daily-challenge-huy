import fs from 'fs';

const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = [];
  for (let j = 0; j < n; j++) {
    arr[i][j] = Math.floor(Math.random()*n*n + 1);
  }
}

console.log(arr)