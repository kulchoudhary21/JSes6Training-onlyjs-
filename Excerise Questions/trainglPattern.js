let n=10
for (let i=0; i<n; i++) {
    let s=""
    for(let k=i;k<n;k++)
    {
        s=s+" "
    }
    for (let j=i; j>0; j--) {

        s+='* ';
  }
  console.log(s)
}
