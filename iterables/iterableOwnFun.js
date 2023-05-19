function iterableFuntion(arr) {
  let count = 0;
  return {
    next() {
      if (count < arr.length) {
        return {
          value: arr[count++],
          done: false,
        };
      }
      else{
        return {
            done: true
          };
      }
    },
  };
}
let arr = [23, 46, 8, 9, 6, 3];
let values = iterableFuntion(arr);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next());
console.log(values.next());





