function mudaMargemBanner(){
    var alturaHeader = document.getElementById('header').offsetHeight;
    document.getElementById('banner').style.marginTop = alturaHeader + 'px';
}

function mudaComprimentoOptions(){
    var larguraSelect = document.getElementById('empresas-box').offsetWidth;
    document.getElementById('options').style.width = larguraSelect + 'px';
}

window.onload = function() {
    mudaMargemBanner();
    mudaComprimentoOptions();
};

function removeEmpresa(element) {
    const card = element.closest('.empresa-card');
    if (card) {
        card.remove();
    }
}

function openEmpresaSelect(){

}