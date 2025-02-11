// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById(
  'atualizar-saldo'
) as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma: number | string) {
  const prevValue = parseFloat(campoSaldo.innerHTML);
  const valueToSum = parseFloat(soma.toString());
  if (isNaN(prevValue) || isNaN(valueToSum)) {
    return;
  }
  campoSaldo.innerHTML = `${prevValue + valueToSum}`;
}

function limparSaldo() {
  campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
  somarAoSaldo(soma.value);
});

botaoLimpar?.addEventListener('click', function () {
  limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
