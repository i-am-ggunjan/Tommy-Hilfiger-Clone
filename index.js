//! ==============Header Berger Section Start================= !//
let burger1 = document.querySelector(".burger-1")
let burger2 = document.querySelector(".burger-2")
let nav = document.querySelector("header nav")

burger1.addEventListener("click", show);
burger2.addEventListener("click", hide);

function show() {
    nav.style.display = "block";
    nav.style.bottom = "30vh";
    burger1.style.display = "none";
    burger2.style.display = "block"
}

function hide() {
    nav.style.bottom = "-60vh";
    burger1.style.display = "block";
    burger2.style.display = "none";
}
//! ==============Header Berger Section Start================= !//