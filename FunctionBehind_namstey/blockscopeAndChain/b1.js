function print() {
    var b = 10;
    p();
  function p() {
    var c=20
    p1();
    console.log(b)
    function p1() {
      console.log(b);
    }
  }
}

print();
