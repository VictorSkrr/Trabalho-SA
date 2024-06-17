// script.js
function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.querySelector(".main-content").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
}
