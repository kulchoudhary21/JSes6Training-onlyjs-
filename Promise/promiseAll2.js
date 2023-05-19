let promiseFun=(v1,msg)=>{
    return function(res,rej){
        setTimeout(()=>{
            console.log(msg)
            res(v1)
        },v1*100)
    }
}
let p1=new Promise(promiseFun(10,"First promise..."))
let p2=new Promise(promiseFun(20,"Second Promise..."))
let p3=new Promise(promiseFun(30,"Third Promise..."))
let total=0;
Promise.all([p1,p2,p3]).then((valu)=>{
    for (const item in valu) {
        total=total+valu[item];
    }
    console.log(total);
}).catch((err)  =>{
    console.log(err)
})
