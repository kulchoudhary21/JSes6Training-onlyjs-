let propm=(cpm)=>{
 return new Promise(function(resole,reject){
    console.log("Pending...")
    if(cpm)
    {
        resole(
            {
                statusCode: 200,
                data : {},
                limit: 90
            }
        );
    }
    else{
        reject(    {
            statusCode: 400,
            msg: 'user not found',
        });
    }
})}
let onFullfilment=(r)=>{
    console.log(r);
}
let onReject=(e)=>{
    console.log(e);
}
let complete=false;
propm(false).then(res=> {
    console.log(res)
}).catch(err=>{
    console.log(err.msg)
});
