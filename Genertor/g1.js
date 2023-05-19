function* test() {
  console.log("1");
  yield "kuldeep";
  yield "kuldeep1";
  yield "kuldeep2";
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  yield function () {
    return "hii";
  };
}
test().next()
//
// let att=[23,3,4,5,6]
// let sum=0
// let i=0
// function print(arr)
// {
//     if(arr[i]%2==0 && i<(arr.length))
//     {
//         sum=sum+arr[i]
//         i++
//         print(arr)
//     }
//     else
//     {
//         if(i < arr.length ){
//         i++
//         print(arr)
//         }
//     }
//     return sum
// }
// console.log(print(att))
// console.log(sum)



////
// let att=["wljhw",'kuldeep','dev'];
// let nw_arr=[];
// let i=0;

// function getStr(){
//     if(i < att.length){
//         if(att[i].length > 5){
//             nw_arr.push(att[i])
//         }
//         i++;
//         getStr();
//     }
// }

// getStr();
// console.log(nw_arr)
