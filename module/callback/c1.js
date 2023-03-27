// function hello(s)
// {
//     console.log("Total",s)
// }
// const sum=(n1,n2,clb)=>
// {
//     let total=n1+n2;
//     clb(total)
// }

// sum(23,2,hello)
//let a=6
// function hello()
// {
// console.log(a)
// let a=7;
// console.log(a)
// }
// hello()
//console.log(a)

// console.log(a)
// let a  = 9; 
// //
//4th 15
//4th delete
function hello() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    arr[9] = 0
    
    for (let i = 9; i > 4; i--) {
        arr[i] = arr[i] - arr[i - 1];
        arr[i - 1] = arr[i] + arr[i - 1];
        arr[i] = arr[i - 1] - arr[i]
        console.log(arr[i])
    }
    arr[4] = 15;
    console.log(arr)
  
}
hello();    