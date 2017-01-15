var forca = {
  words:["casa", "arvore", "problema", "palavra", "paralelepipedo", "caderno", "caneta", "notebook", "chinelo", "jeronimo"],
  palavraSorteada:"",
  statusSorteio:false,
  letrasCertas:[],
  letraErrada:[],
  screenOut:"",

  sorteio:function() {
      var machineOption = Math.floor((Math.random() * this.words.length));
      console.log("Palavra sorteada: " + this.words[machineOption]);
      console.log("Palavra sorteada: " + machineOption);
      this.palavraSorteada = this.words[machineOption];
      this.statusSorteio = true;
  }, //end sorteio method

  init:function(){
    if (this.statusSorteio === false) {
      this.sorteio();

      for(var i=0 ; i<this.palavraSorteada.length ; i++){
        this.screenOut += " _ ";
        this.letrasCertas[i] = " _ ";
      }

      document.getElementById("jeronimo").innerHTML = this.screenOut;
      this.screenOut = "";
      document.getElementById("sizeWord").innerHTML = "Tamanho da Palavra: " + this.palavraSorteada.length;
      document.getElementById("erros").innerHTML = "Erros: " + this.letraErrada.toString();
    }
  }, //end init method

  jogar:function() {
    var letraUser = document.getElementById('validar').value;
    if (this.palavraSorteada.indexOf(letraUser) >= 0) {
      for (var i = 0; i < this.palavraSorteada.length; i++) {
          var letra = this.palavraSorteada.charAt(i);
          if (letraUser === letra) {
            this.letrasCertas[i] = letraUser;
          }
      }
      for(var i=0 ; i<this.palavraSorteada.length ; i++){
        if (this.letrasCertas[i] === " _ ") {
          this.screenOut += (" _ ");
        }else {
          this.screenOut += " " + this.letrasCertas[i] + " ";
        }
      }
      document.getElementById("jeronimo").innerHTML = this.screenOut;

    } else {
        this.letraErrada.push(letraUser);
    }

    this.screenOut = "";
    document.getElementById('validar').value = "";
    document.getElementById("erros").innerHTML = "Erros: " + this.letraErrada.toString();
  } //end jogar method

} //end forca object
