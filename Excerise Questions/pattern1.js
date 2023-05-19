// let arr=[1,2,6,8,1,4,7,8,9,6]
// let newArr=[]
// newArr[0]=arr[0]
// for(let i=0;i<arr.length;i++)
// {
//     let flag;
//     for(let j=0;j<newArr.length;j++)
//     {
//         if(arr[i]===arr[j])
//         {
//             flag=1;
//             break;
//         }    
//         else
//         {
//             flag=0
//         }
//     }
//     if(flag!=1)
//         newArr.push(arr[i])
// }
// console.log(newArr)
let arr=[1,2,3,5,4,3,2,6,3]
let unique = [...new Set(arr)];
console.log(unique)
