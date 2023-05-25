// let arr=[2,4,5,7,8,9,1,2,3,4];
// let new_arr=arr.filter((item)=>{
//     if(item%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(new_arr)

// const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

// const new_arr=prices.filter((item)=>{
//     if(item>2000){
//         return true
//     }
// })
// console.log(new_arr)



const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];

const searchItem="Ja"

let data=languages.filter((item)=>{
    if(item.indexOf(searchItem)!==-1){
        return true
    }
})
console.log(data)



