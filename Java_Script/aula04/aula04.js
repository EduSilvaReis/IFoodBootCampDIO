/*
const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
*/


/*
const n = 2;

let resposta = 0;

for (let i = 0; i <= 10; i++){
    resposta = n * i
    console.log(resposta);
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= numeros.length; i++){
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}
*/

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);