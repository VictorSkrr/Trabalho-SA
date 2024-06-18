// script.js
function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.querySelector(".conteudoPrincipal").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector(".conteudoPrincipal").style.marginLeft = "0";
}
