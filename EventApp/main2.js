
//alert("Welcome to the site!");


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




/*button.onmouseover = function () {

    alert("Dont hover here!! Just click!");
}
*/