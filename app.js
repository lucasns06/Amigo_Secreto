//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function limparCampo(){
    document.querySelector(".input-name").value = "";
}

function adicionarAmigo(){
    let nomeAmigo = document.querySelector(".input-name").value;
    
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nomeAmigo); 
    atualizarLista(); 
    limparCampo();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo; 
        lista.appendChild(item); 
    }
}

function sortearAmigo(){
    limparCampo();
    if(amigos.length === 0){
        alert("Sem amigos para sortear");
        return
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`
}