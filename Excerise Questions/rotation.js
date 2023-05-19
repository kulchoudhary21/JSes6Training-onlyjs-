let a="awabcqqdws";
let ak="bcqqdwsawa";
let temp=a
let flag=0
for(let i=0;i<a.length;i++){
    let kk="";
    kk+=a[a.length-(i+1)]
    kk+=temp[0]
    for(let j=1;j<temp.length-1;j++){
        kk+=temp[j]
    }
    if(ak==kk){
        flag=1;
        break
    }
    temp=kk
}
((flag==1)?console.log(true):console.log(false))
