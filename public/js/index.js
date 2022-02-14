//console.log("Hello world")
console.log("Initializing game")
setTimeout(age, 3000)

function age(){
    console.log("Aging game")
    setTimeout(age, 3000)
}

<button onClick="age()">Click me</button>
