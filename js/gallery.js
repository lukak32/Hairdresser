function frontVid(element){

    var children = element.children;
    children[1].style.display = "none";
    children[2].style.display = "none";
    children[3].style.display = "none";
    children[0].style.display = "block";
    if (children[0].src.indexOf("?") > -1){
        console.log("a");
    }else{console.log("b");}
    children[0].src += "?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3";


    // var activeElement = document.getElementsByClassName("video");
    //
    // for (var i = 0; i<activeElement.length; i++) {
    //     if (window.getComputedStyle(activeElement[i].parentElement, null).getPropertyValue("z-index") === "2") {
    //         var vidParent = activeElement[i].parentElement;
    //         vidParent.onclick = function(){
    //                 var children = vidParent.children;
    //                 children[1].style.display = "none";
    //                 children[2].style.display = "none";
    //                 children[3].style.display = "none";
    //                 children[0].style.display = "block";
    //                 children[0].src += "?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3";
    //         }();
    //     }
    // }
}


    // var children = document.getElementsByClassName("front-vid")[0].children;
    //
    //     children[1].style.display = "none";
    //     children[2].style.display = "none";
    //     children[3].style.display = "none";
    //     children[0].style.display = "block";
    //     children[0].src += "?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3";
// }

function nextVid(){
    var videos = document.querySelectorAll(".video");
    var i;

    for(i = 0; i<videos.length; i++){
        var vidParent = videos[i].parentElement;
        var vidSiblings = vidParent.children;
        var iframeSrc = videos[i].src;
        videos[i].src = iframeSrc.replace("?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3", "?autoplay=0");
        vidSiblings[1].style.display = "flex";
        vidSiblings[2].style.display = "flex";
        vidSiblings[3].style.display = "flex";
    }

    var firstVid = document.getElementsByClassName("front-vid")[0];
    var secondVid = document.getElementsByClassName("back-vid")[0];

    firstVid.classList.remove("turn-left");
    secondVid.classList.remove("turn-left");

    firstVid.classList.add("turn-right");
    secondVid.classList.add("turn-right");

    firstVid.style.cssText = "right: -0.8%; top: 623px; width: 417px; height: 282px; z-index: 1";
    secondVid.style.cssText = "right: 23.8%; top: 693px; width: 571px; height: 388px; z-index: 2";

    firstVid.classList.replace("front-vid", "back-vid");
    secondVid.classList.replace("back-vid", "front-vid");

    firstVid.removeAttribute("onclick");
    secondVid.removeAttribute("onclick");
    secondVid.onclick = function () {
        var children = document.getElementsByClassName("front-vid")[0].children;

        children[1].style.display = "none";
        children[2].style.display = "none";
        children[3].style.display = "none";
        children[0].style.display = "block";

        children[0].src += "?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3";
    };
}

function previousVid(){
    var firstVid = document.getElementsByClassName("front-vid")[0];
    var secondVid = document.getElementsByClassName("back-vid")[0];

    firstVid.classList.remove("turn-right");
    secondVid.classList.remove("turn-right");

    firstVid.classList.add("turn-left");
    secondVid.classList.add("turn-left");

    firstVid.style.cssText = "right: -0.8%; top: 623px; width: 417px; height: 282px; z-index: 1";
    secondVid.style.cssText = "right: 23.8%; top: 693px; width: 571px; height: 388px; z-index: 2";

    firstVid.classList.replace("front-vid", "back-vid");
    secondVid.classList.replace("back-vid", "front-vid");
}
