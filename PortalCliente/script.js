function mudaMargemBanner(){
    var alturaHeader = document.getElementById('header').offsetHeight;
    document.getElementById('banner').style.marginTop = alturaHeader + 'px';
}

window.onload = mudaMargemBanner;

function removeEmpresa(element) {
    const card = element.closest('.empresa-card');
    if (card) {
        card.remove();
    }
}

function openEmpresaSelect(){

}