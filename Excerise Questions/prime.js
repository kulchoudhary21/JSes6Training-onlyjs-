let num = prompt("Enter number...");
let flag=0;
for(let i=2;i<num/2;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
    }
}
if(flag!=1)
    console.log("Prime number..")
else
    console.log("Not prime number..")
