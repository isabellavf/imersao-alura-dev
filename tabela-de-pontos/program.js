var isabella = {
    //Foi criado o objeto Isabella e dentro dele as propriedades.
    foto:
      "<img src= 'https://media-exp1.licdn.com/dms/image/C4E03AQHYvHQuCc8S7w/profile-displayphoto-shrink_100_100/0/1661465407108?e=1668643200&v=beta&t=Zqh19ti8RCcskd4gCO-tp-xoIFb8rJy8Y0DnZkQKmS4' alt=''>",
    nome: "Isabella",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var nathalia = {
    //criação de um outro objeto
    foto:
      "<img src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' alt=''>",
    nome: "Nathalia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  var jogadores = [isabella, nathalia]; //lista com os objetos(jogadores) criados
  
  function AdicionarJogador() {
    var nome = document.getElementById("jogador");
    var foto = document.getElementById("foto");
    jogadores.push({
      foto: "<img src=' " + foto.value + "' alt=''>",
      nome: nome.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
    mostrarNaTela(jogadores);
  }
  
  function calcularPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates + jogador.derrotas * -1;
    return pontos;
  }
  
  function ZerarPontos() {
    for (var i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].pontos = 0;
      jogadores[i].empates = 0;
    }
    mostrarNaTela(jogadores);
  }
  
  function mostrarNaTela(jogadores) {
    //função para exibir esses jogadores da tela
    var elemento = ""; //primeiro criado um elemento vazio
  
    // elemento +=
    // "<td>" +
    //   jogadores[0].foto +
    //   "<img src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' alt=''> </td>";
    //  elemento +=
    // "<td>" +
    // jogadores[1].foto +
    //"<img src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png' alt=''> </td>";
  
    for (var i = 0; i < jogadores.length; i++) {
      //for para que seja passado por cada elemento presente na lista (jogadores.length)
      elemento += "<tr>"; //adicionado ao elemento as linhas em html para criação da lista, tudo que esta entre aspas faz parte do html
      elemento += "<td>" + jogadores[i].foto + "</td>";
      elemento += "<td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"; //funcao para adicionar vitoria
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    document.getElementById("tabelaJogadores").innerHTML = elemento;
  }
  
  function adicionarVitoria(i) {
    //funcao para adicionar vitoria
    var jogador = jogadores[i]; //criada uma variavel para pegar o jogador que é verificado com base no seu indice
    jogador.vitorias++; // nesse jogador é somado +1 na vitoria a cada clique
    jogador.pontos = calcularPontos(jogador);
    mostrarNaTela(jogadores); //chamada a função para mostrar na tela esse funcionamento
  }
  
  function adicionarEmpate(i) {
    // var jogador = jogadores[i];
    //jogador.empates++;
    // jogador.pontos = calcularPontos(jogador);
  
    for (var i = 0; i < jogadores.length; i++) {
      var jogador = jogadores[i];
      jogador.empates++;
      jogador.pontos = calcularPontos(jogador);
    }
    mostrarNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calcularPontos(jogador);
    mostrarNaTela(jogadores);
  }
  
  mostrarNaTela(jogadores);
  