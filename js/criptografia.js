const letras = ["a", "e", "i", "o", "u"];
const codigos = ["ai", "enter", "imes", "ober", "ufat"];

var textoinput = document.getElementById("principal");
var copia = "";
var textocodificado = document.getElementById("codificado");

var btnCopia = document.querySelector("#copia");
var btnCola = document.querySelector("#cola");

function descodifica() {
  var text = textoinput.value;
  if (text != 0) {
    for (var i = 0; i < codigos.length; i++) {
      if (text.includes(codigos[i])) {
        text = text.replaceAll(codigos[i], letras[i]);
      }
    }

  }
  textocodificado.innerHTML = text;
  habilitaBtn();
}

function codifica() {
  var text = textoinput.value.split("");

  text.forEach(function (item, i) {
    for (var x = 0; x < letras.length; x++) {
      if (item == letras[x]) {
        text[i] = codigos[x];
      }
    }

  });
  textocodificado.innerHTML = text.join("");
  habilitaBtn();
}

function btncola() {
  let textoCopiado = textocodificado;
  textoCopiado.select();
  document.execCommand("copy");
  textoCopiado.setSelectionRange(0,99999);
  textoinput.value = "";
  textoinput.focus();
  copia = textoCopiado.value;
  textoCopiado.textContent = "";
  btnCopia.classList.toggle("invisivel");
  btnCola.classList.toggle("invisivel");
}

function apaga() {
  textoinput.value = copia;
  btnCola.classList.toggle("invisivel");
}

function habilitaBtn() {
  var resposta = document.getElementById("codificado").value;
  if (resposta == 0) {
    btnCopia.classList.add("invisivel");
  } else {
    btnCopia.classList.remove("invisivel");
  }
}