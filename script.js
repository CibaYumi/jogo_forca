var words = ["casa","arvore","problema","palavra","paralelepipedo","caderno","caneta","notebook","chinelo","jeronimo"];

var sorteio = function() {
    var machineOption = Math.floor((Math.random()*words.length));
    console.log("Palavra sorteada: " + words[machineOption]);
    return words[machineOption];
}

var palavraSorteada = sorteio();
var letrasCertas = [];
var letraErrada = [];


var forca = function(letraUser) {
  var letraUser = document.getElementById('validar');

  if (palavraSorteada.indexOf(letraUser)>= 0 ) {
    for(var i=0 ; i < palavraSorteada.length ; i++){
        var letra = palavraSorteada.charAt(i);
        if (letraUser === letra) {
            letrasCertas[i] = letraUser;
        }
    }
  } else {
      letraErrada.push(letraUser);
  }

  document.getElementById('jeronimo').innerHTML(letrasCertas.toString());



  console.log("Entrada user: " + letraUser);
  console.log("certas " + letrasCertas.toString());
  console.log("Erradas " + letraErrada.toString());
}
