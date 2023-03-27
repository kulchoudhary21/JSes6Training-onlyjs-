function hello(error, src) {
    if (error) {
        console.log(error);
    }
    console.log("HEllo :",src);
}
function onLoad(sc, clbk) {
    var s = document.createElement("script");
    s.src = sc;
    s.onload = () => {

        console.log("Srcipt Laoded", s);
        clbk(null, s);
    }
    s.onerror = () => {
        console.log("Error in script");
        clbk(new Error("Error in script..."), s)
    }
    document.body.appendChild(s)
}
function hi() {
    console.log("Hii")
}
onLoad("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bunle.min.js", hello);