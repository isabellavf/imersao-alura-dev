var deck = [
    (Bulbasaur = {
      nome: "Bulbasaur", // --- 0
      atributos: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        Speed: 45
      }
    }),
    (Charmander = {
      nome: "Charmander", // --- 1
      atributos: {
        HP: 39,
        Attack: 52,
        Defense: 43,
        Speed: 65
      }
    }),
    (Pikachu = {
      nome: "Pikachu", // --- 2
      atributos: {
        HP: 35,
        Attack: 55,
        Defense: 40,
        Speed: 90
      }
    }),
    (Pidgey = {
      nome: "Pidgey", // --- 3
      atributos: {
        HP: 40,
        Attack: 45,
        Defense: 40,
        Speed: 56
      }
    }),
    (Jigglypuff = {
      nome: "Jigglypuff", // --- 4
      atributos: {
        HP: 115,
        Attack: 45,
        Defense: 20,
        Speed: 20
      }
    }),
    (Abra = {
      nome: "Abra", // --- 5
      atributos: {
        HP: 25,
        Attack: 20,
        Defense: 15,
        Speed: 90
      }
    }),
    (Eevee = {
      nome: "Eevee", // --- 6
      atributos: {
        HP: 55,
        Attack: 55,
        Defense: 50,
        Speed: 55
      }
    }),
    (Squirtle = {
      // -- 7
      nome: "Squirtle",
      atributos: {
        HP: 44,
        Attack: 48,
        Defense: 65,
        Speed: 43
      }
    })
  ];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    //funcao para sortear a carta
    var numeroCartaMaquina = parseInt(Math.random() * 8); // criada uma variavel para gerar randomicamente um indice de 0 a 2 para indicar a carta
    cartaMaquina = deck[numeroCartaMaquina]; // pegamos nossa varial da carta e colocamos o deck no indice sorteado
    //console.log(numeroCartaMaquina);
    //console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 8); // criada uma variavel para gerar randomicamente um indice de 0 a 2 para indicar a carta
    while (numeroCartaJogador == numeroCartaMaquina) {
      //enquanto o numero das cartas forem iguais, continuar sorteando um novo numero
      numeroCartaJogador = parseInt(Math.random() * 8);
    }
    cartaJogador = deck[numeroCartaJogador]; //fora do enquanto, apos achar um numero diferente, atribui-lo a carta
    //console.log(numeroCartaJogador);
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo"); //variavel para verificar as opçoes de checagem
  
    for (var i = 0; i < radioAtributos.length; i++) {
      //fora vai passando por cada opção e ao achar a que esta marcada, retorno o valor do atributo selecionado
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
        console.log(radioAtributos[i].value);
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    //console.log(atributoSelecionado);
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    //console.log(valorCartaJogador);
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu";
      console.log(cartaMaquina);
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
      console.log(cartaMaquina);
    } else if (valorCartaJogador == undefined) {
      elementoResultado.innerHTML = "Você precisa primeiro escolher um atributo";
    } else {
      elementoResultado.innerHTML = "Empatou";
      console.log(cartaMaquina);
    }
    //console.log(cartaMaquina);
  }
  