//console.log("Hello world")
console.log("Initializing game")
setTimeout(age, 3000)

function age(){
    console.log("Aging game")
    setTimeout(age, 3000)
}



function myFunction() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
  }