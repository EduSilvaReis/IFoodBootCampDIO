// function calcularImc(peso, altura) {
//     return peso / Math.pow(altura, 2);
// }

// function classificarImc(imc) {
//     if (imc < 18.5) {
//         return 'abaixo do peso ideal';
//     } else if (imc >= 18.5 && imc < 25) {
//         return 'Normal';
//     } else if (imc >= 25 && imc < 30) {
//         return 'obesidade 1';
//     } else if (imc >= 30 && imc < 40) {
//         return 'Obesidade 2';
//     } else {
//         return 'Vai de arrasta pra cima se continuar assim' ;
//     }
// }

// function main() {
//     const peso = 75;
//     const altura = 1.80;

//     const imc = calcularImc(peso, altura);
//     console.log(classificarImc(imc));
// }

// main();

/*
function MeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificaIdade(idade) {
    if (idade >= 18) {
        //return (MeuNome('Eduardo') + 'é Maior');
        console.log(MeuNome('Eduardo') + ' é Maior');
    } else {
        console.log('é Menor');
    }
}

verificaIdade(18);
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicajuros(valor, juros) {
    return  (valor + (valor * (juros / 100)));
}

const precoetiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoetiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoetiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(aplicarDesconto(precoetiqueta));
} else {
    console.log(aplicajuros(precoetiqueta, 10));
}

//console.log(200 * 0.10);
        
