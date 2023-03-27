let arr1 = [10,45,1,11,9,29,22] 
let max=arr1[0];
let min=arr1[0];
for(let i=1;i<arr1.length;i++)
{
    let temp;
    if(max<arr1[i])
    {
        temp=max;
        max=arr1[i];
        arr1[i]=temp;
    }
    if(min>arr1[i])
    {
        temp=min
        min=arr1[i];
        arr1[i]=temp
    }

}
console.log("Maximum no.:",max)
console.log("Maninum no.:",min)

