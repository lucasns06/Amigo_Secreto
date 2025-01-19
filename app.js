//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector(".input-name").value;
    
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    amigos.push(nomeAmigo)

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.join("<br/>");

    document.querySelector(".input-name").value = "";
}

function sortearAmigo(){
    
}