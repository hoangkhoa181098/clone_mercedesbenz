var btnShow = document.querySelector(".btn-show");
var productItemHide = document.querySelector(".products__itemHide");
var productShowMore = document.querySelector(".products__btnShowMore");

var btnShow1 = document.querySelector(".btn-show-1");
var productItemHide1 = document.querySelector(".products__itemHide-1");
var productShowMore1 = document.querySelector(".products__btnShowMore-1");

var btnShow2 = document.querySelector(".btn-show-2");
var productItemHide2 = document.querySelector(".products__itemHide-2");
var productShowMore2 = document.querySelector(".products__btnShowMore-2");

var navbarToggler = document.querySelector(".navbar-toggler");
var navbarNav = document.querySelector(".navbar-nav");

var sticker__content = document.querySelector(".sticker__content");
var body = document.querySelector("body");

$( document ).ready(function() {
    btnShow.onclick = function () {
        productItemHide.style.display = "block";
        productShowMore.style.paddingTop = 0;
        btnShow.style.display = "none";
    }
    
    btnShow1.onclick = function () {
        productItemHide1.style.display = "block";
        productShowMore1.style.paddingTop = 0;
        btnShow1.style.display = "none";
    }
    
    btnShow2.onclick = function () {
        productItemHide2.style.display = "block";
        productShowMore2.style.paddingTop = 0;
        btnShow2.style.display = "none";
    }
    
    navbarToggler.onclick = function () {
        
        if(navbarToggler.className === "navbar-toggler") {
            navbarNav.className = "navbar-nav-1";
            navbarToggler.innerHTML = `<i class="fa fa-times icon-times"></i>`;
            navbarToggler.className = "navbar-toggler-1";
            sticker__content.style.opacity = "0";
            body.style.overflow = "hidden";
        }else {
            navbarToggler.innerHTML = `<i class="fa fa-align-justify toggle-icon"></i>`;
            navbarToggler.className = "navbar-toggler";
            navbarNav.className = "navbar-nav";
            sticker__content.style.opacity = "1";
            body.style.overflow = "auto";
        }
    }
    
    var prevScrollpos = window.pageYOffset;
            if(prevScrollpos === 0){
                document.getElementById("header-1").style.transform = "translateY(0px)";
            }
                window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                document.getElementById("header-1").style.transform = "translateY(0px)";
              } else {
                document.getElementById("header-1").style.transform = "translateY(-120px)";
              }
              prevScrollpos = currentScrollPos;
    }
});

