function Converter() {
  var valorReal = document.getElementById("valor");
  var valorNumerico = parseFloat(valorReal.value);

  var valorDolar = valorNumerico / 5.25;
  var valorDolarFixed = valorDolar.toFixed(2);

  document.getElementById("valorConvertido").innerHTML =
    "o valor em dólar é: " + valorDolarFixed + "$";
}

function ConverterBitCoin() {
  var valorReal = document.getElementById("valor");
  var valorNumerico = parseFloat(valorReal.value);
  var valorBitCoin = parseFloat(valorNumerico / 99384.49);
  var valorBitFixed = valorBitCoin.toFixed(5);

  document.getElementById("valorConvertido").innerHTML =
    "o valor em bitCoin é: " + valorBitFixed + "BTC";
}

function ConverterEuro() {
  var valorReal = document.getElementById("valor");
  var valorNumerico = parseFloat(valorReal.value);
  var valorEuro = parseFloat(valorNumerico / 5.2);
  var valorEuroFixed = valorEuro.toFixed(2);

  document.getElementById("valorConvertido").innerHTML =
    "o valor em Euro é: " + valorEuroFixed + "€";
}