let complete=true;
let prom=new Promise(function(res,rej)
{
    if(complete)
    {
        res("Succesfully")
    }
    else{
        rej("Failure")
    }
})
let Succes=(result)=>{
    console.log(result)
}
let failure=(error)=>{
    console.log(error)
}
console.log(prom.then(Succes).catch(failure))