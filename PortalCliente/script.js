function mudaMargemBanner(){
    var alturaHeader = document.getElementById('header').offsetHeight;
    document.getElementById('banner').style.marginTop = alturaHeader + 'px';
}

window.onload = mudaMargemBanner;
