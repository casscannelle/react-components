function Hello () {

var newElem = document.createElement("p");
newElem.textContent = "Hello, World (3)";
document.getElementById("container").appendChild(newElem);
}

    
export default Hello