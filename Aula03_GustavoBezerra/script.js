// Inicio: Exercicio (a)

var letraPadrao = "Times New Roman";
var courier = "Courier";
var  cambria = "Cambria";

btnPadrao = document.querySelectorAll(".mudarLetra")[0];
btnCourier = document.querySelectorAll(".mudarLetra")[1];
btnCambria = document.querySelectorAll(".mudarLetra")[2];

btnPadrao.addEventListener("click", padrao)
btnCourier.addEventListener("click", mudaCourier)
btnCambria.addEventListener("click", mudaCambria)

function padrao() { document.getElementById("texto").style.fontFamily = letraPadrao; }
function mudaCourier() { document.getElementById("texto").style.fontFamily = courier; }
function mudaCambria() { document.getElementById("texto").style.fontFamily = cambria; }
// Final Exercicio (a)

// Inicio: Exercicio (b)
let tamPadrao = 16;

let btnTamPad = document.querySelectorAll(".alterarTamanho")[0];
let btnAumenta = document.querySelectorAll(".alterarTamanho")[1];
let btnDiminui = document.querySelectorAll(".alterarTamanho")[2];

const funcTamPadrao = () =>(document.getElementById("textoDois").style.fontSize = "16px");
const funcAumenta = () => (document.getElementById("textoDois").style.fontSize = `${++tamPadrao}px`);
const funcDiminui = () => (document.getElementById("textoDois").style.fontSize = `${--tamPadrao}px`);

btnTamPad.addEventListener("click", funcTamPadrao);
btnAumenta.addEventListener("click", funcAumenta);
btnDiminui.addEventListener("click", funcDiminui);
// Final: Exercicio (b)

// Inicio: Exercicio (c)
var btnCalc = document.querySelector("#calculaHipotenusa");
var resposta = document.querySelector("#resultadoCalc");

btnCalc.addEventListener("click", function() {
    var primeiroCateto = Number(document.querySelectorAll("input")[0].value);
    var segundoCateto = Number(document.querySelectorAll("input")[1].value);
    var hipoAoQuadrado = Math.pow(primeiroCateto, 2) + Math.pow(segundoCateto, 2);
    var resultHipotenusa = Math.sqrt(hipoAoQuadrado);
    resposta.innerHTML = `Hipotenusa do Triângulo Retângulo: ${resultHipotenusa}`;
});
// Final: Exercicio (c)

/* Inicio: Exercicio (d)
A função está escrita diretamente no HTML 
Final: Exercicio (d) */

// Inicio: Exercicio (e)
var valorDolar = Number(5.76);
var valorEuro = Number(6.23);

var btnConverte = document.querySelector("#calcularConv");
var resultado = document.querySelector("#resultadoConversao");

btnConverte.addEventListener("click", funcConverteMoeda);

function funcConverteMoeda() {
    var valorReal = Number(document.querySelector("#converte").value);
    var moedasConvertidas = [(valorReal/valorDolar).toFixed(2), (valorReal/valorEuro).toFixed(2)];
    valoresConvertidos = resultado.innerHTML = `Dólares: $${moedasConvertidas[0]} <br> Euros: €${moedasConvertidas[1]}`;
    return valoresConvertidos;
}
// Final: Exercicio (e)

// Inicio: Exercicio (f)
var btnConv2 = document.querySelector("#calcularConv2");
var res2 = document.querySelector("#resultadoConversao2");

btnConv2.addEventListener("click", funcConverteMoeda2);

function funcConverteMoeda2() {
    var valorReal = Number(document.querySelector("#converte2").value);
    var moedasConvertidas2 = {
        moedaDolar: (valorReal/valorDolar).toFixed(2), //toFixed --> formata para apenas duas casas após a virgula
        moedaEuro: (valorReal/valorEuro).toFixed(2)
    }
    valoresConvertidos2 = res2.innerHTML = `Dólares: $${moedasConvertidas2.moedaDolar} <br> Euros: €${moedasConvertidas2.moedaEuro}`;
    return valoresConvertidos2;
}
// Final: Exercicio (f)

// Inicio: Exercicio (g)
var btnRaiz = document.querySelector("#calculaRaiz");
var resRaiz = document.querySelector("#respostaRaiz");

btnRaiz.addEventListener("click", function(){
    (function() {
        var radicando = Number(document.querySelector("#radicando").value);
        var indice = Number(document.querySelector("#indice").value);
        return resRaiz.innerHTML = `Resultado: ${Math.pow(radicando, (1 / indice))}`;
    })();
});
// Final: Exercicio (g)

// Inicio: Exercicio (h)
var btnRaiz2 = document.querySelector("#calculaRaiz2");
var resRaiz2 = document.querySelector("#respostaRaiz2");
btnRaiz2.addEventListener("click", function() {
    (() => {
        var radicando2 = Number(document.querySelector("#radicando2").value);
        var indice2 = Number(document.querySelector("#indice2").value);
        return resRaiz2.innerHTML = `Resultado: ${Math.pow(radicando2, (1 / indice2))}`;
    })();
});
// Final: Exercicio (h)

// Inicio: Exercicio (i)
var btnFat = document.querySelector("#calcFat");
var resFat = document.querySelector("#respostaFat");

btnFat.addEventListener("click", fatorialNumero)[0];

function fatorialNumero(){
    var numero = Number(document.querySelector("#fatorial").value);
    var result = 1;
    for (var i = 2; i <= numero; i++) {
        result *= i;
    }
    return resFat.innerHTML = `Fatorial de ${numero} = ${result}`;
}
// Final: Exercicio (i)

// Inicio: Exercicio (j)
var btnFat2 = document.querySelector("#botaoFat");
var resFat2 = document.querySelector("#divFat"); 
let numero2;
let result2;

btnFat2.addEventListener("click", fatorialNumero2)[0];

function fatorialNumero2(){
    numero2 = Number(document.querySelector("#fat").value);
    result2 = 1;
    for (var i = 2; i <= numero; i++) {
        result2 *= i;
    }
    return resFat2.innerHTML = `Fatorial de ${numero2} = ${result2}`;
}


// Final: Exercicio (j)

/* Inicio: Exercicio (k)
Presente no html
Final: Exercicio (k) */

/*Inicio: Exercicio (l)
Presente no html
Final: Exercicio (l)*/