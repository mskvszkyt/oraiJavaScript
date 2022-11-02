function Elküld() {
    document.getElementById("visszaNev").innerHTML = document.getElementById("nev").value;
    document.getElementById("visszaCim").innerHTML = document.getElementById("cim").value;
    document.getElementById("visszaTel").innerHTML = document.getElementById("tel").value;
}

function Dekoral(elem){
    elem.style.background = "red"
    elem.style.color = "blue"
}

function VisszaAllit(elem){
    elem.style.background = "white"
    elem.style.color = "black"
}