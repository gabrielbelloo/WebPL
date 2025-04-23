const listaIds = [1, 2, 3, 4, 5]; // Lista de IDs ALTERAR PARA O BANCO DE DADOS
const listaEmpresas = ["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5"]; // Lista de empresas ALTERAR PARA O BANCO DE DADOS
const listaCNPJ = ["123456789", "987654321", "456789123", "321654987", "654321789"]; // Lista de CNPJs ALTERAR PARA O BANCO DE DADOS
const listaCidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre"]; // Lista de cidades ALTERAR PARA O BANCO DE DADOS
const listaEstados = ["SP", "RJ", "MG", "PR", "RS"]; // Lista de estados ALTERAR PARA O BANCO DE DADOS



// Ajusta a margem superior do banner com base na altura do header
function mudaMargemBanner() {
    var alturaHeader = document.getElementById('header').offsetHeight; // Obtém a altura do header
    document.getElementById('banner').style.marginTop = alturaHeader + 'px'; // Define a margem superior do banner
}

// Ajusta a largura das opções do select com base na largura do elemento pai
function mudaComprimentoOptions() {
    var larguraSelect = document.getElementById('empresas-box').offsetWidth; // Obtém a largura do elemento pai
    var options = document.getElementById('options'); // Seleciona o elemento de opções
    options.style.width = larguraSelect + 'px'; // Define a largura das opções
}

// Alterna a exibição do modal de edição de perfil
function editProfile() {
    var editModal = document.getElementById('editModal'); // Seleciona o modal de edição
    if (editModal.style.display === 'flex') {
        editModal.style.display = 'none'; // Esconde o modal se estiver visível
    } else {
        editModal.style.display = 'flex'; // Mostra o modal se estiver escondido
    }
}

// Fecha o modal de edição de perfil
function closeEditModal() {
    var editModal = document.getElementById('editModal'); // Seleciona o modal de edição
    editModal.style.display = 'none'; // Esconde o modal
}

// Remove uma empresa específica ao clicar no ícone de exclusão
function removeEmpresa(element) {
    const card = element.closest('.empresa-card'); // Seleciona o card mais próximo do elemento clicado
    if (card) {
        card.remove(); // Remove o card do DOM
    }
}

// Limpa todas as empresas exibidas no container
function limparEmpresa(element) {
    const empresasContainer = document.querySelector('.empresas-container'); // Seleciona o container de empresas
    empresasContainer.innerHTML = ''; // Remove todo o conteúdo do container
}

function selectEmpresa(nome) {
    const empresasContainer = document.querySelector('.empresas-container'); // Seleciona o container de empresas

    const criaCard = document.createElement('div'); // Cria um elemento div para o card
    criaCard.classList.add('empresa-card'); // Adiciona a classe 'empresa-card' ao elemento
    criaCard.innerHTML = `
    <h4>${nome}<i class="fa-solid fa-xmark" onclick="removeEmpresa(this)"></i></h4>`; // Define o conteúdo HTML do card
    empresasContainer.appendChild(criaCard); // Adiciona o card ao container

}

// Adiciona uma lista de empresas ao container
function selectAllEmpresas() {
    const empresasContainer = document.querySelector('.empresas-container'); // Seleciona o container de empresas
    empresasContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cards

    listaEmpresas.forEach((nome) => {
        selectEmpresa(nome); // Chama a função para adicionar cada empresa ao container
    });
}

function fetchOptions() {
    const options = document.getElementById('options'); // Seleciona o elemento de opções
    options.innerHTML = ''; // Limpa as opções existentes antes de adicionar novas
    listaEmpresas.forEach((id, nome, cnpj, cidade, estado) => {
        const criaOption = document.createElement('li'); // Cria um elemento li para a opção
        criaOption.classList.add('option'); // Adiciona a classe 'option' ao elemento
        criaOption.innerHTML = `
        ${id} - ${nome} <p>${cnpj}</p> <p>${cidade} - ${estado}</p>`; // Define o conteúdo HTML da opção

    });



}

// Alterna a exibição das opções de empresas
function openEmpresasOptions() {
    var options = document.getElementById('options'); // Seleciona o elemento de opções
    if (options.style.display === 'block') {
        options.style.display = 'none'; // Esconde as opções se estiverem visíveis
    } else {
        options.style.display = 'block'; // Mostra as opções se estiverem escondidas
    }
    document.getElementById("fa-chevron-down").classList.toggle("girar"); // Alterna a classe para girar o ícone dropdown
}

// Executa funções ao carregar a página
window.onload = function () {
    mudaMargemBanner(); // Ajusta a margem do banner
    mudaComprimentoOptions(); // Ajusta a largura das opções
};