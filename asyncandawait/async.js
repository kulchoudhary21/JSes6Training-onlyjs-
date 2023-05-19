//normal function..
async function test()
{
    return "HEllo";
}

//with expression function
const test1=async function()
{
    return 2+4;
}

//with arrow funtion....
const test2=async()=>"Kuldeep"

test().then((res)=>{console.log(res)})
console.log(test())

console.log(test1())
test1().then((re)=>{console.log(re)})

console.log(test2())
test2().then((resp)=>{console.log(resp)})