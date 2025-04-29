
function calculate() {

    let w = parseFloat(document.getElementById("width").value);
    let h = parseFloat(document.getElementById("height").value);
    let c = parseFloat(document.getElementById("cost").value);



let obwod = Math.ceil(w *2 + h * 2);
let res = obwod * c;

alert("Całkowity koszt wynosi: " + res + " PLN");
}