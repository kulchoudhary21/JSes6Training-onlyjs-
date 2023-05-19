let p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("First Promise..");
        res(10);
    },1000)
})
let p2=new Promise(function(reso,reje){
   setTimeout(()=>{
        console.log("Second Promise....")
        reso(20);
   },2000);
})
let p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("third Promise....");
        res(30);
    },3000)
})
let total=0;
Promise.all([p1,p2,p3]).then((valu)=>{
    for (const item in valu) {
        total=total+valu[item];
    }
    console.log(total);
}).catch((err)  =>{
    console.log(err)
})
