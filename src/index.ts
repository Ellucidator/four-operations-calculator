let primeiro_valor:number = parseFloat(window.prompt("Insira o primeiro valor: ")!);
let segundo_valor:number = parseFloat(window.prompt("Insira o segundo valor: ")!);


alert(
  "Resultados: \n" +
    "\nAdição: " +
    (primeiro_valor + segundo_valor) +
    "\nSubtração: " +
    (primeiro_valor - segundo_valor) +
    "\nMultiplicação: " +
    primeiro_valor * segundo_valor +
    "\nDivisão: " +
    Math.round(primeiro_valor / segundo_valor )+
    "\nResto da divisão: " +
    (primeiro_valor % segundo_valor)
);
