// let s=""
//normal split
// let arr=s.split(' ')
// arr1.filter((val)=>val==3)
// for(let i=0;i<arr1.length;i++)
// {

//     let temp=arr1.find((item)=>{
//         console.log(item)
//     })
//     console.log(temp)
// }

//+++++
// removing dupliacate

// let arr1=[12,3,3,2,6,5,7,8,4,3,2,1,1]

// let new_arr=[arr1[0]]
// for(let i=1;i<arr1.length;i++)
// {
//     if(!new_arr.includes(arr1[i])){
//         new_arr.push(arr1[i])
//     }
// }
// console.log(new_arr)


// ----------------------
// removing duplicacy only by for loops
let arr1=[12,3,3,2,6,5,7,8,4,3,2,1,1]
let new_arr=[arr1[0]]
// for(let i=0;i<arr1.length;i++)
// {
//     let flag=0
//     for(let j=0;j<new_arr.length;j++)
//     {
//         if(arr1[i]==new_arr[j])
//         {
//             flag=0
//             break
//         }
//         else{
//             flag=1
//         }
//     }
//     if(flag==1)
//     {
//         new_arr.push(arr1[i])
//     }
// }
// console.log(new_arr)





// ---->>>>>
let obj={}
let arr2=[-1]
for(let i=0;i<arr1.length;i++){
    count=0
    let flag=0
    for(let j=0;j<arr1.length;j++){
        if(arr1[i]==arr2[j])
        {
            flag=1
            break
        }
        if(arr1[i]==arr1[j]){
            count++
        }
    }
    if(flag==0)
    {
        arr2.push(arr1[i])
     console.log(arr1[i],count)    
     obj[arr1[i]]=count
    }
}
console.log(obj)

// ---->>>
//count the number by
