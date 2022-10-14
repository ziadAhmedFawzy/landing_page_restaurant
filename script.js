// Nav

let navBar = document.getElementById("navBar");
let boxNav = document.getElementById("boxNav");

navBar.addEventListener("click" , function() {
    boxNav.classList.add("show");
    boxNav.classList.remove("hide");
})

let closeBoxNav = document.getElementById("closeBoxNav");

closeBoxNav.addEventListener("click" , function() {
    boxNav.classList.add("hide");
    boxNav.classList.remove("show");
})

// imges

let mainImg = document.getElementById("mainImg");

function img(src) {
    mainImg.src = src;
    console.log(src)
}