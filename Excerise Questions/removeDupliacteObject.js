// const arr=[
//     {n1:"Rajan"},
//     {n1:"majan"},
//     {n1:"aachin"},
//     {n1:"Rajan"},
//     {n1:"majan"},
// ]
// const 
// console.log(arr[0].n1==arr[3].n1)
// const new_arr=[]

// let obj={}
// obj.n1=arr[0].n1
// new_arr.push(obj)
// console.log(new_arr)
// console.log(obj)

// obj={};
// console.log(obj)
const arr=[
    {n1:"Rajan"},
    {n1:"majan"},
    {n1:"aachin"},
    {n1:"Rajan"},
    {n1:"majan"},
]
let new_arr=[]
let temp={}
temp.n1=arr[0].n1
new_arr.push(temp)
// console.log(new_arr)
for(let item of arr){
    let obj={}
    let flag=1
    for(i in new_arr){
        if(item.n1==new_arr[i].n1){
            flag=1
            break
        }
        else{
            flag=0
        }
    }
    if(flag==0){
        obj.n1=item.n1;
        new_arr.push(obj)
    }
}
console.log(new_arr)
