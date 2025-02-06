let nomes = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    nomes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>Amigo secreto: " + sorteado + "</li>";
}




