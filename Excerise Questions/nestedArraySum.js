const arr = [1, [21, [4, 3, 2, 5], 8, [6, 3, 4, 78, [98], 9], 87]];
let t = 0;
function sum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      t = t + arr[i];
    } else {
      sum(arr[i]);
    }
  }
}
sum(arr);
console.log(t);


