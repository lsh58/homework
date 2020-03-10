// //스크롤네비
// var header_scroll = document.querySelector("header .top .scroll_top");
// var scrollTop = window.pageYOffset;

// window.addEventListener("scroll", function() {
//     console.log(scrollTop);
//     if (scrollTop == 0) {
//         header_scroll.classList.remove("active");
//     } else {
//         header_scroll.classList.add("active");
//     }
// });

//스크롤네비end

// D-day 출력

var dday = document.querySelector(".top strong");
var now = new Date();
var day = new Date("may 16,2020");
var gap = now.getTime() - day.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
dday.innerHTML = "D" + gap;

// D-day 출력 end

//배경변경
var header = document.querySelector("header");
var num = 1;
function showSlides() {
    if (num < 4) {
        header.className = "bg0" + num;
        num++;
    } else {
        num = 1;
    }
}
setInterval(showSlides, 3000);

//배경변경 end

//슬라이드

var slide = document.querySelector("#slide");
slide.style.left = 0 + "%";
var a = 0;
var bln = false;
slide.addEventListener("mouseover", function() {
    bln = true;
    console.log(a);
});
slide.addEventListener("mouseout", function() {
    bln = false;
    slidework();
});
function slideimg() {
    if (a < -171.4) {
        a = 0;
    } else {
        a -= 0.02856667;
        slide.style.left = a + "%";
    }
    if (bln == true) {
        console.log(bln);
        clearInterval(move);
    }
}

var move;
function slidework() {
    move = setInterval(slideimg, 10);
}
slidework();

// 비디오

var video = document.getElementById("video");
var play = document.getElementById("playbtn");
var pause = document.getElementById("pausebtn");

function playPause() {
    if (video.paused) {
        video.play();
        play.style.opacity = 0;
        pause.style.opacity = 1;
    } else {
        video.pause();
        play.style.opacity = 1;
        pause.style.opacity = 0;
    }
}

play.addEventListener("click", function(e) {
    e.preventDefault();
    playPause();
}); //재생

pause.addEventListener("click", function(e) {
    e.preventDefault();
    playPause();
}); //일시정지

//비디오 end
