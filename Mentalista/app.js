var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var valorChute = parseInt(document.getElementById("valor").value); //parseInt alterar o valor para tipo inteiro.

  // = atribui valor
  // == compara os valores
  // === retorna um resultado booleando (true ou false) entre as variaveis comparadas (se igual true, senao false)
  // || ou
  
  if(tentativas == 0){
    document.getElementById("resultado").innerText =
    "Você PERDEU! O número era: " + numeroSecreto + " Aperte F5 para tentar novamente";
    return
  }

  if (numeroSecreto == valorChute) {
    document.getElementById("resultado").innerText = "Você ACERTOU!";
  } else if (valorChute > 10 || valorChute < 0) {
    document.getElementById("resultado").innerText =
      "Escolha um número que esteja entre 0 e 10 ...";
      
  } else {
    if (valorChute < numeroSecreto || (valorChute > 0) & (valorChute < 1)) {
      document.getElementById("resultado").innerText =
        "Você ERROU! Tente um número MAIOR!";
      
       
    } else {
      document.getElementById("resultado").innerText =
        "Você ERROU! Tente um número MENOR!";
        
       
    }
  }
    tentativas--;

}
