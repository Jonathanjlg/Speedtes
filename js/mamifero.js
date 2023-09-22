function andarPraFrente() {

}
function andarPraDireita() {

}
function andarPraEsquerda() {

}
function andarPraTras() {

}
function Correr() {

}
function morder() {

    // se for 1 - o inimigo perde energia 
    // se for 2 - arranca o pé do inimigo
    // se for 3 - arranca a perna 
    // se for 4 - arranca o braço 
    // se for 5 - arranca a cabeça

    // vou criar uma variavel usando o let
    //usando o objeto document representa toda pagina
    let f = document.querySelector("#forca").Value
    let m = document.querySelector("p")

    if (f == 1) {
        m.innerHTML = "montro zumbi perdeu energia!"
    } else if (f == 2) {
        m.innerHTML = "mostro zumbi perde o pé!"
    } else if (f == 3) {
        m.innerHTML = "mostro zumbi perde a perna!"
    } else if (f == 4) {
        m.innerHTML = " montro zumbi perde o braço!"
    } else if (f == 5) {
        m.innerHTML = " montro zumbi perde a cabeça!"
    }



}
function C() {

}
function Correr() {

}

