let str = "hero is hero and honda honda honda is is is is";
let arr = {};
str+=" "
let temp = "";
for (let i = 0; i < str.length+1; i++) {
  temp += str[i];
  if (str[i] == " ") {
    if (arr[temp]) {
      arr[temp]++;
    } else {
      arr[temp] = 1;
    }
    temp = "";
  }
}

let lastVal = 0;
let lastKey = 0;

for(let i in arr){
    if(arr[i] > lastVal){
        lastVal = arr[i];
        lastKey = i;
    }  
}
console.log(lastVal, lastKey);