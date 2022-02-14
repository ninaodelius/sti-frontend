var ettElement = document.getElementById("app")

var aTable = document.createElement("table")
aTable.appendChild(createRow())

ettElement.appendChild(aTable)



function buttonClick(){
    aTable.appendChild(createRow())
}

function createRow(){
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell())
    return aRow
}

function createCell(){
    var aCell = document.createElement("td")
    return aCell;
}