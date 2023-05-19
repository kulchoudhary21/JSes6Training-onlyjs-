let mixing = [[[[[[[[[[[2,[[[[[[[[[4]]]]]]]]]]]]]]]]]]]];

console.log(mixing.flat(Infinity));
let arr=[]
// let count=0
function print(mix)
{
    for(let i=0;i<mix.length;i++)
    {
        if(typeof(mix[i])=='number'){
            // count++
            arr.push(mix[i])
        }
        else{
            // count++
            print(mix[i])
        }
    }    
    
}
print(mixing)
console.log(arr)

