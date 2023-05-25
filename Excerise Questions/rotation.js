let a = 'abcde';

let b = 'abcde';

for(let i=0;i<b.length;i++){
    let temp=a[i]
    b = b.replace(a[i], a[a.length-(i+1)])
    b = b.replace(a[a.length-(i+1)],temp)
    console.log(b)
}

