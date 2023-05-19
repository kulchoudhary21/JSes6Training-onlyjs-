// var x=Symbol("Hell")
// var y=Symbol("Hell")
// console.log(x==y)

// var x1='Symbol("Hello")'
// var y1='Symbol("Hello")'
// console.log(x1==y1)

let age=Symbol("21")
let user={
    name:"Kuldeep",
    id:1,
    [age]:23,
};
let gender=Symbol("male")
user['status']="ok"
user[gender]="male"
// user[status]="done"; 
console.log(user)

for(let i in user)
{
    console.log(i)
}
console.log(user)
console.log(JSON.stringify(user))
