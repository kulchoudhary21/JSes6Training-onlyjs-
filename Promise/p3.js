let propm = (val1,val2) => {
    return new Promise(function (reso, rej) {
        setTimeout(()=>{
            let c=val1/val2;
            if (c) {
                reso(`Your Reslult is ${c}`)
            }
            else {
                rej("Fail...")
            }
        },3000)
    })
}
console.log(propm(9,7).then((r)=>{
    console.log(r)
}).catch((e)=>{
    console.log(e)
}))