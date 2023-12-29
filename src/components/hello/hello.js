import React from "react";

function Hello () {

var newElem = document.createElement("p");
newElem.textContent = "Hello, World (9)";
document.getElementById("container").appendChild(newElem);
}

    
export default Hello