// Seleção dos elementos do HTML
const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let nomes = []; // Lista para armazenar os nomes dos amigos

// Função para adicionar o nome na lista
function adicionarAmigo() {
    const nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, digite um nome válido!"); // Se o campo estiver vazio
        return;
    }

    if (nomes.includes(nome)) {
        alert("Esse nome já foi adicionado!"); // Se o nome já estiver na lista
        return;
    }

    nomes.push(nome); // Adiciona o nome à lista
    atualizarLista(); // Atualiza a lista na tela
    input.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista existente antes de adicionar novos itens

    nomes.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!"); // Verifica se há nomes para sortear
        return;
    }

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.textContent = `🎉 Amigo secreto sorteado: ${sorteado}! 🎁`; // Exibe o resultado do sorteio
}
