//import ""
function hello() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
        document.write(`<h5>${this.responseText}</h5>`);
    }
    else if(this.readyState==4 && this.status==404)
    {
        document.write("404 page not found..");
    }
  }
  xhr.open('GET', "Excerise Questions/Ajax/dummy.txt", true);
  xhr.send();
}
