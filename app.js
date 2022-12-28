let menuBtn = document.querySelector(".menu-btn"),
    openBtn = document.querySelector(".open-btn"),
    closeBtn = document.querySelector(".close-btn"),
    mobileMenu = document.getElementById("mob-menu");


menuBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    mobileMenu.classList.toggle("show");
});