let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")


function calcular() {
    console.log("Caculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value


let qdTotalCarne= carnePP(duracao) * adultos +  (carnePP(duracao) /2 * criancas)
let qdTotalCerveja= cervejaPP(duracao) * adultos
let qdTotalbebidas= bebidasPP(duracao) * adultos +  (bebidasPP(duracao) /2 * criancas)

resultado.innerHTML =`<p>${qdTotalCarne/1000} Kg de Carne </p>`
resultado.innerHTML +=`<p>${Math.ceil(qdTotalCerveja/355)} Latas de Cerveja </p>`
resultado.innerHTML +=`<p>${Math.ceil(qdTotalbebidas/2000)} Garafas Pet's de 2L  </p>`

}
function carnePP(duracao) {
    
    if(duracao>= 6){
        return  650
    }
    else{
        return 400
    }

}
function cervejaPP(duracao) {
    
    if(duracao>= 6){
        return  2000
    }
    else{
        return 1200
    }

}
function bebidasPP(duracao) {
    
    if(duracao>= 6){
        return  1500
    }
    else{
        return 1000
    }

}