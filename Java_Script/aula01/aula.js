/*
    Cria um programa  que calcula a quantidade de litros cosumidos em uma viagem
    e o valor gasto baseado no preço do combustível.
*/
/*
const precoCombustivel = 5.96;
const kmPorLitros = 12;
const distanciEmKm = 100;

const litrosConsumidos = distanciEmKm / kmPorLitros;
const valorGasto = precoCombustivel * litrosConsumidos;

console.log(valorGasto.toFixed(2));
*/

const precoGasolina = 5.96;
const precoEntanol = 4.96;
const kmPorLitros = 12;
const distanciEmKm = 100;
const tipoCombustivel = "ETANOL";
const valorGasto = 0;

const litrosConsumidos = distanciEmKm / kmPorLitros;

if (tipoCombustivel === "ETANOL") {
    valorGasto = precoEntanol * litrosConsumidos;
} else {
    valorGasto = precoGasolina * litrosConsumidos;
}