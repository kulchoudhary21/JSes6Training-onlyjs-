for (let i = 0, l = 1; i < 10; i++) {
    let s = '';
    for (let j = (9 - i); j > 0; j--) {
        s = s + "    ";
    }
    let arr = []
    for (let k = 0; k < (i + 1); k++) {
        arr.push(l);
        l = l + 2
        if (l == 13) {
            l = 1
        }
    }
    for (let m = arr.length - 1; m >= 0; m--) {
        if (arr[m] === 11) {
            s = s + "  " + arr[m]
        }
        else {
            s = s + "   " + arr[m]
        }
    }
    console.log(s)
}