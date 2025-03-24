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
// Final: Exercicio (e)

// Inicio: Exercicio (f)
// Final: Exercicio (f)

// Inicio: Exercicio (g)
// Final: Exercicio (g)

// Inicio: Exercicio (h)
// Final: Exercicio (h)

// Inicio: Exercicio (i)
// Final: Exercicio (i)

// Inicio: Exercicio (j)
// Final: Exercicio (j)

// Inicio: Exercicio (k)
// Final: Exercicio (k)

// Inicio: Exercicio (l)
// Final: Exercicio (l)