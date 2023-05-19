//console.log(this)
var a = 10;
let x = 11;
function b() {
  var a = 20;
  // console.log(a)
  console.log(this.a);
}
b();
console.log(typeof window);
const name = "Cool";
const obj = {
  name: "Kuldeep",
  // t:console.log(this.name)
  getName:()=> {
    let inner_obj = {
      fun:  ()=> {
        console.log(this);
      },
    };
    inner_obj.fun();
  },
};
obj.getName();

