const arr=[
    {n1:"rajan"},
    {n1:"rasban"},
    {n1:"aachin"},
    {n1:"rachin"},
    {n1:"pachin"},
    {n1:"wachin"},
    {n1:"Bachin"}
]
arr.sort((item,item2)=>{
    return ((item2.n1 < item.n1)?14:-1857485)
})
console.log(arr)