


function sprawdzLiczby() {
    const liczbaA = parseFloat(document.getElementById('liczbaA').value);
    const liczbaB = parseFloat(document.getElementById('liczbaB').value);

    if (liczbaA > liczbaB) {
        alert("Liczba A jest większa od liczby B o " + (liczbaA - liczbaB));

    } else if (liczbaA === liczbaB) {
        alert("Liczba A jest równa liczbie B");

    } else {
        alert("Liczba A jest mniejsza od liczby B o " + (liczbaB - liczbaA));
    }




}