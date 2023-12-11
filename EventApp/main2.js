
// alert("Welcome to the site!");


var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {

    if(content.className == "open")
    { // shrink the box
        content.className = "";
        button.innerHTML = "Show more";
        button.style.fontStyle = "italic";


    } else 
    { // expand the box
        content.className = "open";
        button.innerHTML = "Show less";
        button.style.fontStyle = "italic";


    }
}

var cutie = document.getElementById("challenge3");
var buton = document.getElementById("expand");

buton.onclick = function () {
    if(cutie.className == "opened")
    { // shrink it
        cutie.className = "";
        buton.innerHTML = "Show more";
        buton.style.fontStyle = "italic";
        

    } 
    else 
    { // expand it
        cutie.className = "opened";
        buton.innerHTML = "Show less";
        buton.style.fontStyle = "italic";

    }
}



var c23button = document.getElementById("challenge23-button");
var c23header = document.getElementById("challenge23-contact");

c23button.onclick = function(){
    c23header.style.display = "block";
}



/*button.onmouseover = function () {

    alert("Dont hover here!! Just click!");
}
*/