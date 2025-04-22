function mudaMargemBanner() {
    var alturaHeader = document.getElementById('header').offsetHeight;
    document.getElementById('banner').style.marginTop = alturaHeader + 'px';
}

function mudaComprimentoOptions() {
    var larguraSelect = document.getElementById('empresas-box').offsetWidth;
    var options = document.getElementById('options');
    options.style.width = larguraSelect + 'px';
}

function editProfile() {
    var editModal = document.getElementById('editModal');
    if (editModal.style.display === 'flex') {
        editModal.style.display = 'none';
    } else {
        editModal.style.display = 'flex';
    }
}

function closeEditModal() {
    var editModal = document.getElementById('editModal');
    editModal.style.display = 'none';
}

function removeEmpresa(element) {
    const card = element.closest('.empresa-card');
    if (card) {
        card.remove();
    }
}

function limparEmpresa(element) {
    const empresasContainer = document.querySelector('.empresas-container');
    empresasContainer.innerHTML = '';
}

function openEmpresasOptions() {
    var options = document.getElementById('options');
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
    document.getElementById("fa-chevron-down").classList.toggle("girar");
}

window.onload = function () {
    mudaMargemBanner();
    mudaComprimentoOptions();
};