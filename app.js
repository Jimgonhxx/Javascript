
function calc() {
    
let w = document.getElementById("width").value
let h = document.getElementById("height").value
let c = document.getElementById("cost").value

let obwod = Math.ceil(w *2 + h * 2)
let res = obwod * c;
alert("obwod okna to: " + obwod + " a koszt wynosi " + res +" PLN");

}