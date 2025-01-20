//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function limparCampo(){
    document.querySelector(".input-name").value = "";
}
//Para testar
function gerarAmigos(){
    // for(let i = 1; i < 5; i++){
    //     amigos.push("Amigo " + i); 
    // }
    amigos.push("Carlos")
    amigos.push("Lucas")
    amigos.push("Bruno")
    amigos.push("Alex")
    atualizarLista(); 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
}
function limparAmigos(){
    if(amigos.length === 0){
        alert("Sem amigos para limpar");
        return
    }
    
    document.getElementById('listaAmigos').innerHTML = "";
    amigos = [];
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

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    amigos.splice(indiceSorteado, 1);

    let lista = document.getElementById("listaAmigos");
    let itens = lista.getElementsByTagName("li");
    lista.removeChild(itens[indiceSorteado]); 

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`
    
}