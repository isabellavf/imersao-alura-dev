
function ConverterTudo() {
    var valorCelsius = document.getElementById("valor");
    var valorNumerico = parseFloat(valorCelsius.value);
  
    var valorKelvin = valorNumerico + 273;
    
    var valorFahrenheit = valorNumerico * 1.8 + 32;
    
    document.getElementById("valorCelsius").innerHTML = "O valor em graus na escala Celsius é: " + valorNumerico;
    document.getElementById("valorKelvin").innerHTML =
      "o valor em graus na escala Kelvin é: " + valorKelvin;
      document.getElementById("valorFarenheit").innerHTML =
      "o valor em graus na escala Farenheit é: " + valorFahrenheit;
  }
  