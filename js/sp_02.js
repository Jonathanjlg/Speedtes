function somar(){
    let  num1= parseInt(document.querySelector("#num1").value)
    let  num2= parseInt(document.querySelector("#num2").value)
    let resutado = num1+num2
document.querySelector("#Resultado").innerHTML= `O Resultado é: ${resutado}`
}
function subitrair(){
    let  num1= parseInt(document.querySelector("#num1").value)
    let  num2= parseInt(document.querySelector("#num2").value)
    let resutado = num1-num2
    document.querySelector("#Resultado").innerHTML= `O Resultado é: ${resutado}`
    }
function multiplicar(){
        let  num1= parseInt(document.querySelector("#num1").value)
        let  num2= parseInt(document.querySelector("#num2").value)
        let resutado = num1*num2
        document.querySelector("#Resultado").innerHTML= `O Resultado é: ${resutado}`
        }
function dividri(){
        let  num1= parseInt(document.querySelector("#num1").value)
        let  num2= parseInt(document.querySelector("#num2").value)
        let resutado = num1/num2
        document.querySelector("#Resultado").innerHTML= `O Resultado é: ${resutado}`
        }
function Porcentagem(){
        let  num1= parseInt(document.querySelector("#num1").value)
        let  num2= parseInt(document.querySelector("#num2").value)
        let resutado = num1%num2
        document.querySelector("#Resultado").innerHTML= `O Resultado é: ${resutado}`
        }
