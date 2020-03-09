// D-day 출력

var dday = document.querySelector(".top strong");
var now = new Date();
var day = new Date("may 16,2020");
var gap = now.getTime() - day.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
dday.innerHTML = "D" + gap;

// D-day 출력 end

//배경변경
var bg = document.getElementsByTagName("header");
var imgarr = new Array();
for (var i = 0; i < 3; i++) {
    imgarr[i] = "url(img/backimg_0" + (i + 1) + ".jpg)";
}

var i = 0;
function showSlides() {
    if (i > 2) {
        i = 0;
    }
    if (i == 0) {
        bg[0].style.backgroundPositionY = "80%";
    } else {
        bg[0].style.backgroundPositionY = "200%";
    }
    bg[0].style.backgroundImage = imgarr[i];
    i++;
}
setInterval(showSlides, 3000);

//배경변경 end
