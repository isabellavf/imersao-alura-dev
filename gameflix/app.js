var listaJogos = [
    "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
    "https://bdjogos.com.br/capas/3369-Pokemon-Lets-Go-Pikachu-Nintendo-Switch-capa-1.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg"
  ];
  
  //listaJogos.push(
  //  "https://bdjogos.com.br/capas/27112017021723-pokemon-red-game-boy-color.jpg"
  //); --> adicionar uma linha a lista
  
  document.getElementById("resultado").innerHTML = "";
  
  for (var i = 0; i < listaJogos.length; i++) {
    document.getElementById("resultado").innerHTML +=
      "<img src=" + listaJogos[i] + ">";
  }
  
  function AdicionarJogo() {
    var novoJogo = document.getElementById("jogo").value;
  
    var ultimoLista = listaJogos[listaJogos.length - 1];
    // console.log(ultimoLista);
  
    if (novoJogo != ultimoLista) {
      listaJogos.push(novoJogo);
      var imagem = document.createElement("img");
      imagem.src = novoJogo;
      document.getElementById("resultado").appendChild(imagem);
      document.getElementById("naovalido").innerText = "";
    } else {
      document.getElementById("naovalido").innerText =
        "Você acabou de adicionar este jogo! Escolha outro jogo :D";
    }
  
    // console.log(listaJogos);
  }
  