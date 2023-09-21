function Conta(){
    let mesa = parseInt(document.getElementById("mesa").value)
    let nome = document.getElementById("nome").value
    let num1 = parseInt(document.getElementById("num1").value)
    let Resultado = num1 *(10/100)
    Resultado = Resultado.toFixed(2)


    localStorage.setItem("m",mesa)
    localStorage.setItem("n",nome)
    localStorage.setItem("num1",num1)

    
    document.getElementById("Resultado").innerHTML=` A mesa ${mesa} atendida pelo garçom ${nome} lhe rendeu R$${Resultado} de gorjeta`
}