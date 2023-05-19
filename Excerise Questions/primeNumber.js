let num=7;
let j=3;
let arr=[2]
while(arr.length<num)
{
    let flag=0;
    for(let k=2;k<j;k++)
    {
        if(j%k==0)
        {
            flag=1
            break
        }
    }
    if(flag==0)
    {
        arr.push(j)
    }
    j++
}
console.log(arr[arr.length-1])
