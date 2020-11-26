// Scroll to top button, toggle menu

window.onscroll = function() {
    var btnScroll = document.querySelector("#btnScrollTop"); 

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }    
};

document.addEventListener("click", function(e){
    var menu = document.querySelector(".menu-list"),
        menuBtn = document.querySelector(".toggle-menu"),
        menuBtnChild = document.querySelector(".fa-bars"), 
        closeBtn = document.querySelector(".close-menu"),
        closeBtnChild = document.querySelector(".fa-times"),
        btnScroll = document.querySelector("#btnScrollTop"),
        btnScrollChild = document.querySelector(".fa-angle-up");
    
    if (e.target == menuBtn || e.target == menuBtnChild) {
        menu.classList.add("active");
        menuBtn.classList.add("hide");
    }

    if (e.target == closeBtn || e.target == closeBtnChild) {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
    }
    
    if (e.target.className == 'menu-link') {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
    }

    if (e.target == btnScroll || e.target == btnScrollChild) {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }
});
