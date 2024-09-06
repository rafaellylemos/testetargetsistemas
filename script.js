//Questão 01

function soma() {
  let indice = 13;
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  return soma;
}

let resultado = soma();

function isResultado() {
  return alert(resultado);
}

//Questão02

function calculaFibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let soma = n1 + n2;

  if ((num === n1) | (num === n2)) {
    return true;
  }

  while (soma <= num) {
    if (soma === num) return true;
    n1 = n2;
    n2 = soma;
    soma = n1 + n2;
  }

  return false;
}

function callFi() {

  let numero = parseInt(document.getElementById("numeroInput").value);

  if (!numero) {
    document.getElementById(
        "resultado"
      ).innerText = `Digite um número.`;
      return
  }


  let isFi = calculaFibonacci(numero);

  if (isFi) {
    document.getElementById(
      "resultado"
    ).innerText = `${numero} pertence à sequência de Fibonacci.`;
  } else {
    document.getElementById(
      "resultado"
    ).innerText = `${numero} não pertence à sequência de Fibonacci.`;
  }
}

//Questao03
function calculaValor() {
  let divFatDia = document.querySelector("#faturamento");

  let maiorValor = -Infinity;
  let diaMaiorValor = null;
  let menorValor = Infinity;
  let diaMenorValor = null;
  let totalFaturamento = 0;
  let diasComFaturamento = 0;

  fetch("faturamento.json").then((response) => {
    response.json().then((dados) => {
      dados.faturamentoMes.forEach((faturamentoDia) => {
        if (faturamentoDia.valor > 0) {
          if (faturamentoDia.valor > maiorValor) {
            maiorValor = faturamentoDia.valor;
            diaMaiorValor = faturamentoDia.dia;
          }

          if (faturamentoDia.valor < menorValor) {
            menorValor = faturamentoDia.valor;
            diaMenorValor = faturamentoDia.dia;
          }

          totalFaturamento += faturamentoDia.valor;
          diasComFaturamento++;
        }
      });

      let mediaFaturamento = totalFaturamento / diasComFaturamento;

      divFatDia.innerHTML += `<li>O maior valor de faturamento foi R$${maiorValor.toFixed(
        2
      )} no dia ${diaMaiorValor}</li>
            <li>O menor valor de faturamento foi R$${menorValor.toFixed(
              2
            )} no dia ${diaMenorValor}
            <li>A média de faturamento foi R$${mediaFaturamento.toFixed(
              2
            )}</li>`;
    });
  });
}

//Questão04
const faturamentoDist = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

let divFatDist = document.querySelector("#faturamentoDist");
let totalFat = 0;

for (let i = 0; i < faturamentoDist.length; i++) {
  totalFat += faturamentoDist[i].valor;
}

function calculaPercentual(valor, totalFat) {
  return (valor / totalFat) * 100;
}

function Percentual() {
  calculaPercentual();
  for (let i = 0; i < faturamentoDist.length; i++) {
    const estado = faturamentoDist[i].estado;
    const valor = faturamentoDist[i].valor;
    const percentual = calculaPercentual(valor, totalFat).toFixed(2);

    divFatDist.innerHTML += `<li>${estado}: ${percentual}%</li>`;
  }
}

//Questão05
function stringInvertida(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}


function inverteString() {
let entradaUsuario = prompt("Digite algo para inverter:");
let resultado = stringInvertida(entradaUsuario);

alert(resultado);
}
