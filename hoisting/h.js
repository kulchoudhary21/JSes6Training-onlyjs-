// var x = 7;
// console.log(x);
// function demo1() {
//   console.log(x);
//   var x = 7;
// }
// demo1();

// var demo2 = function () {
//   console.log("IN demo2");
// };


// var x=7
// function print()
// {
//     var x=12
//     console.log(x)
// }
// print()
// console.log(x)

//program to sub array of matched sum number
// // let arr1 = [5, 2, 7, 11, 15, 4];
// // let arr2 = [];
// // for (let i = 0; i < arr1.length; i++) {
// //   for (let j = i + 1; j < arr1.length; j++) {
// //     if (arr1[i] + arr1[j] == 9) {
// //       arr2.push(arr1[i]);
// //       arr2.push(arr1[j]);
// //     //   break
// //     }

// //   }
// // }
// console.log(arr2);
// let total=0
// for(let i)
// let arr1 = [-2,1,-3,4,-1,2,1,-5,4];
// let arr2=[]
// for(let i=0;i<(arr1.length-1);i++)
// {
//     if((arr1[i]+arr1[i+1])===9)
//     {
//         arr2.push(arr1[i])
//         arr2.push(arr1[i+1])
//     }
// }
// console.log(arr2)

// let arr1 = [3,6,8,1,2,9,6,11,2,14];
// let max=arr1[0]
// let s_max=-1
// for(let i=1;i<arr1.length;i++)
// {
//     if(max<arr1[i])
//     {
//         s_max=max
//         max=arr1[i]
//     }
//     else if(s_max<arr1[i]&&(arr1[i]>max))
//     {
//         s_max=arr1[i]
//     }
// }
// console.log(s_max)
// let s_max=arr1[0]
// for(let i=1;i<arr1.length;i++)
// {
//     if(s_max<arr1[i]&&(arr1[i]!=max))
//     {
//         let temp;
//         temp=s_max
//         s_max=arr1[i]
//         arr1[i]=s_max
//     }
// }
// console.log(s_max)

// let temp=-1
// let s1=""
// for(let i=0;i<s.length-1;i++)
// {
//     let count=1
//     let t="";
//     for(let j=i+1;j<s.length;j++)
//     {
//         if(s[i]==s[j])
//         {
//             count++
//             t=s[i]
//         }
//     }
//     if(temp<count)
//     {
//         // console.log(count)
//         temp=count
//         s1=t
//     }

// }

//count of character
// let s = "eertyurwwwwfgtttttttwehidvwejcdbwww";
// let count = 0;
// let temp = 0;
// let j = 0;
// let chr = "";
// for (let i = 0; i < s.length; ) {
//   if (s[i] == s[j + 1]) {
//     count++;
//   }
//   if (j == s.length - 1) {
//     i++;
//     j = i;
//     count = 0;
//   } else {
//     j++;
//   }
//   if (temp < count) {
//     chr = s[i];
//     temp = count;
//   }
// }
// console.log(temp + 1, chr);

// let arr = [1, 3, 2, 4, 5, 6, 7, 9];
// let temp = [];
// let new_arr = [];
// for (let i = 0; i < arr.length; i++) {
//   new_arr.push(arr[i]);

//   if (arr[i] === arr[i + 1] - 1) {
//     new_arr.push(arr[i + 1]);
//   } else {
//     if (temp.length < new_arr.length) {
//       temp = new_arr;
//     }
//     new_arr = [];
//   }
// }
// console.log(temp);
// let s = "kuldkeeup";
// // let s1=""
// // for(let i=s.length-1;i>=0;i--)
// // {
// //     s1=s1+s[i]
// // }
// // console.log(s1)

// let j = 1;
// for (let i = 0; i < s.length; ) {
//   if (s[i] === s[j]) {
//     i++;
//     j = i + 1;
//   } else {
//     if (j == s.length) {
//       console.log(s[i]);
//       break;
//     }
//   }
//   j++;
// }

//character counts
// let s = "kuldeepp";
// let count = 0;
// let temp = 0;
// let j = 0;
// let chr = "";
// for (let i = 0; i < s.length; ) {
//   if (s[i] == s[j + 1]) {
//     count++;
//   }
//   if (j == s.length - 1) {
//     i++;
//     j = i;
//     count = 0;
//   } else {
//     j++;
//   }
//   if (temp < count) {
//     chr = s[i];
//     temp = count;
//   }
// }
// console.log(temp + 1, chr);


// var name="ankit"
// const a={
//     name:"sachin",
//     getName:function(){
//         console.log(this.name)
//     }
// }
var a=0
console.log(undefined=== null)
    a=10
// a.getName()
// hello()

