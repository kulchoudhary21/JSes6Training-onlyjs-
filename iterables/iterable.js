// //it is use for traversing and thr control of values or element is in our hand..
// const arr=[20,3,4,5,90]
// let values=arr[Symbol.iterator]()
// let v1=values.next()
// while(!v1.done)
// {
//     console.log(v1.value)
//     v1=values.next()
// }

let s = "Kuldeep bhai";
let str = s[Symbol.iterator]();
let val = str.next();
while (!val.done) {
  console.log(val.value);
  val = str.next();
}

// for(let i of s)
// { 
//     console.log(i)
// }
