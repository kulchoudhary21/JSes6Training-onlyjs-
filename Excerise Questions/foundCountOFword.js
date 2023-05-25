// count of every string without any other array and object
// let str = "my name is kuldeep yes kuldeep is my name name";
// let found = "name";
// str+=" "
// let temp = "";
// for (let item of str) {
//   if (item == " ") {
//     let temp2=""
//     let count=0
//     for(let item2 of str){
//         if(item2==" "){
//             if(temp==temp2) count++            
//             temp2=""
//         }
//         else{
//             temp2+=item2;
//         }
//     }
//     console.log(temp,count)
//     temp = "";
//   } else {
//     temp += item;
//   }
// }


//coutn of particular strijg which we pass 
// const str='my name is kuldeep yes kuldeep is my name name';

// let found='name'

// let arr=[]

// let temp=""

// for(let item of str){
//     if(item==" "){
//         arr.push(temp)   
//         temp=""
//     }
//     else{
//         temp+=item
//     }   
// }
// arr.push(temp)
// let count=0;
// for(let item of arr){
//     if(item==found){
//         count++;
//     }
// }
// console.log(count)



//count of particular word in string
let str = "my name is kuldeep yes kuldeep is my name name";
let found = "is";
str+=" "
let temp=""
let count=0
for(let item of str){
    if(item==" "){
        if(temp==found) count++
        temp=""
    }
    else{
        temp+=item
    }    
}
console.log(count)