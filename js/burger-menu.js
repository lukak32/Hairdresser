document.getElementsByClassName("burger")[0].addEventListener("click", function(){
        document.getElementsByClassName("burger")[0].classList.toggle("burger_active");
        document.getElementsByClassName("nav-list")[0].classList.toggle("nav-list_active");
        document.getElementsByClassName("navigation__phone")[0].classList.toggle("navigation__phone_active");
});