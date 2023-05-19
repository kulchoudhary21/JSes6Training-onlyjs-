for (let i = 0; i < 7; i++) {
  console.log();
  let s = "";
  for (let k = 0; k < i; k++) {
    s = s + " ";
  }
  for (let j = 7 - i, l = i; j > 0; j--) {
    s = s + j;
  }
  console.log(s);
}

// TextUtils-React-kuldeep