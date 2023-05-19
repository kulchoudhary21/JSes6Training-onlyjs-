let str="esddeajvwkdhidkulkkkkuldeepwdhcbwdevradhcb"
let name1="esddeajwk"
let temp=""
for(let i=0,j=0;i<str.length;i++){
        if(str[i]===name1[j]){
            temp+=str[i]
            j++
        }
        else if(temp===name1){
            break
        }
        else{
            if(str[i]===name1[0]){
                temp=str[i]
            }
            j=1;
        }
        if(i==str.length-1){
            if(temp!==name1){
                temp="-1"
            }
        }
}
console.log(temp)
