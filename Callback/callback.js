function hello(t)
{
    console.log("Hello ",t);
}
function sum(a,b,calbck)
{
    let t=a+b;
    calbck(t)
}
sum(1,2,hello)