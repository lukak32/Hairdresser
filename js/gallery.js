var frontVid = document.getElementsByClassName("front-vid")[0];
var videos = document.querySelectorAll(".video");
var rightArrow = document.getElementsByClassName("arrows__right")[0];
var leftArrow = document.getElementsByClassName("arrows__left")[0];

function playVid() {
    var children = document.getElementsByClassName("front-vid")[0].children;
    children[1].style.display = "none";
    children[2].style.display = "none";
    children[3].style.display = "none";
    children[0].style.display = "block";
    children[0].src += "?rel=0&autoplay=1&modestbranding=1&iv_load_policy=3";
    children[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}

function videoTransform (){
    for(var i = 0; i<videos.length; i++){
        var vidParent = videos[i].parentElement;
        var vidSiblings = vidParent.children;
        var iframeSrc = videos[i].src;
        vidParent.onclick = function(){
            return false;
        };
        videos[i].src = iframeSrc.replace("?rel=0&autoplay=1&modestbranding=1&iv_load_policy=3", "");
        vidSiblings[1].style.display = "flex";
        vidSiblings[2].style.display = "flex";
        vidSiblings[3].style.display = "flex";
    }
}

function turnLeft () {
    videoTransform();

    var firstVid = document.getElementsByClassName("front-vid")[0];
    var secondVid = document.getElementsByClassName("back-vid")[0];

    firstVid.classList.remove("turn-right");
    secondVid.classList.remove("turn-right");

    firstVid.classList.add("turn-left");
    secondVid.classList.add("turn-left");

    if(window.innerWidth>=1400){
        firstVid.style.cssText = "right: -0.5%; bottom: 344px; width: 417px; height: 282px; z-index: 1";
        secondVid.style.cssText = "right: 23.8%; bottom: 167px; width: 571px; height: 388px; z-index: 2";
    }else if(window.innerWidth>=964){
        firstVid.style.cssText = "right: 5.4%; bottom: 271px; width: 417px; height: 282px; z-index: 1";
        secondVid.style.cssText = "right: 30%; bottom: 95px; width: 571px; height: 388px; z-index: 2";
    }else if(window.innerWidth>=720){
        firstVid.style.cssText = "right: 3%; bottom: 211px; width: 417px; height: 282px; z-index: 1";
        secondVid.style.cssText = "right: 26%; bottom: 107px; width: 500px; height: 340px; z-index: 2";
    }else{
        firstVid.style.cssText = "transform:rotateY(-180deg); z-index: 1";
        secondVid.style.cssText = "transform:rotateY(0); z-index: 2";
    }

    firstVid.classList.replace("front-vid", "back-vid");
    secondVid.classList.replace("back-vid", "front-vid");

    secondVid.onclick = function () {
        playVid();
    };
}

frontVid.onclick = function () {
    playVid();
};

rightArrow.onclick = function(){

    videoTransform();

    var firstVid = document.getElementsByClassName("front-vid")[0];
    var secondVid = document.getElementsByClassName("back-vid")[0];

    firstVid.classList.remove("turn-left");
    secondVid.classList.remove("turn-left");

    firstVid.classList.add("turn-right");
    secondVid.classList.add("turn-right");

    if(window.innerWidth>=1400){
        firstVid.style.cssText = "right: -0.5%; bottom: 344px; width: 417px; height: 282px; z-index: 1";
        secondVid.style.cssText = "right: 23.8%; bottom: 167px; width: 571px; height: 388px; z-index: 2";
    }else if(window.innerWidth>=964){
        firstVid.style.cssText = "right: 5.4%; bottom: 271px; width: 417px; height: 282px; z-index: 1";
        secondVid.style.cssText = "right: 30%; bottom: 95px; width: 571px; height: 388px; z-index: 2";
    }else if(window.innerWidth>=720){
        firstVid.style.cssText = "right: 3%; bottom: 211px; width: 417px; height: 282px; z-index: 1";
        secondVid.style.cssText = "right: 26%; bottom: 107px; width: 500px; height: 340px; z-index: 2";
    }else{
        firstVid.style.cssText = "transform:rotateY(180deg); z-index: 1";
        secondVid.style.cssText = "transform:rotateY(0); z-index: 2";
    }

    firstVid.classList.replace("front-vid", "back-vid");
    secondVid.classList.replace("back-vid", "front-vid");

    secondVid.onclick = function () {
        playVid();
    };

};


leftArrow.onclick = function(){
    turnLeft ();
};
