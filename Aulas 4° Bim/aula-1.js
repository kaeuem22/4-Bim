// ------------- Aprendendo sobre funções ------------- //



// function somar(num1,num2) {
//     let calculo = num1 + num2
    
//     return calculo;
// }

// let n1 = Number(prompt("insira o 1° Número"))
// let n2 = Number(prompt("insira o 2° Número"))

// alert(somar(n1,n2))



// ------------- Arrow functions ------------- //


// let somar = (num1, num2) => num1 + num2

// alert(somar(2,4))




// ------------- Teste Final ------------- //


let parImpar = num1 => num1%2 ===0?"par":"Impar"

let n1 = Number(prompt("Digita um numero ai vai"))
let resultado = parImpar(n1)

alert(resultado)

// function parImpar(num1){
//     if(num1%2 ===0)
//         return "par"
//     return "impar"
// }
