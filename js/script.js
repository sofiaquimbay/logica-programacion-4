const boton = document.querySelector(".enviar");
const input = document.querySelector(".inputNumero");
const conteiner = document.querySelector(".contenido");
const secuencia = [];

boton.addEventListener("click", function(){
    let numero = parseInt(input.value)
    if(isNaN (numero)){
        input.value = "";
        alert("Por favor ingrese un número");
    }else{
        secuenciaFibonacci(numero);
        conteiner.innerHTML+=`<div class="secuencia">${secuencia}</div>`;

    }
})

function secuenciaFibonacci(numero){
    let adelante = 1
    let anterior = 0
    let suma
    for(let i = 0; i<numero; i++){
        secuencia.push(anterior);
        suma = anterior + adelante
        anterior = adelante
        adelante = suma
    }
}