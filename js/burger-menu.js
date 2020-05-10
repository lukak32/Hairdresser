document.getElementsByClassName("burger")[0].addEventListener("click", function(){
        document.getElementsByClassName("burger")[0].classList.toggle("burger_active");
        document.getElementsByClassName("nav-list")[0].classList.toggle("nav-list_active");
        document.getElementsByClassName("navigation__phone")[0].classList.toggle("navigation__phone_active");
});

var headerHeight = document.getElementById("header").offsetHeight;
var navbar = document.getElementsByClassName("navigation")[0];

function onScrollNav(){
        if (window.pageYOffset >= headerHeight) {
                navbar.classList.add("sticky");
        } else {
                navbar.classList.remove("sticky");
        }
}

window.onscroll = function() {onScrollNav()};
