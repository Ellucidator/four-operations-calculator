let primeiro_valor = window.prompt("Insira o primeiro valor: ");
let segundo_valor = window.prompt("Insira o segundo valor: ");
primeiro_valor = parseFloat(primeiro_valor);
segundo_valor = parseFloat(segundo_valor);

alert(
  "Resultados: \n" +
    "\nAdição: " +
    (primeiro_valor + segundo_valor) +
    "\nSubtração: " +
    (primeiro_valor - segundo_valor) +
    "\nMultiplicação: " +
    primeiro_valor * segundo_valor +
    "\nDivisão: " +
    parseInt(primeiro_valor / segundo_valor) +
    "\nResto da divisão: " +
    (primeiro_valor % segundo_valor)
);
