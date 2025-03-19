let listaShow = document.getElementById("listaAmigos");
let resultadoShow = document.getElementById("resultado");
let listaResultadoShow = document.getElementById("listaResultado");

let lista = [];
let subLista = lista;
let listaResultado = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo");
  if (nomeAmigo.value != "") {
    lista.push(nomeAmigo.value);
    subLista = lista;
    listaShow.innerHTML = subLista.join(", ");
    nomeAmigo.value = "";
  } else {
    alert("Por favor, insira um nome");
  }
}

function sortearAmigo() {
  if (subLista.length > 0) {
    let n = Math.floor(Math.random() * subLista.length);
    resultadoShow.innerHTML = subLista[n];
    listaResultado.push(subLista[n]);
    listaResultadoShow.innerHTML = listaResultado.join(", ");
    subLista.pop(n);
    listaShow.innerHTML = subLista.join(", ");
  }
}

function reset() {
    lista = [];
    subLista = [];
    listaResultado = [];
    listaShow.innerHTML = subLista;
    listaResultadoShow.innerHTML = listaResultado;
    resultadoShow.innerHTML = "";
}
