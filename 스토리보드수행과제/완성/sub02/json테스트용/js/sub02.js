var wrapper = document.querySelectorAll('.img-wrapper');
var wrapper_first = wrapper[0].querySelectorAll('.img-sub a');
var wrapper_second = wrapper[1].querySelectorAll('.img-sub a');
var mainimg = document.querySelectorAll('.img-wrapper .img-main');
// console.log(thumbnail[0]);
// console.log(document.querySelector(".img-sub"))


for (var i = 0; i < wrapper_first.length; i++) {
    wrapper_first[i].addEventListener('mouseenter', function (e) {
        e.preventDefault();
        var imgname = getComputedStyle(this).getPropertyValue("background-image");
        mainimg[0].style = "background:" + imgname + " no-repeat center / cover;";
        console.log(imgname)
    })
    wrapper_first[i].addEventListener('mouseleave', function (e) {
        var imgname = getComputedStyle(this).getPropertyValue("background-image");
        mainimg[0].style = "background: url('../img/lineup/lineup01.jpg') no-repeat center/ cover;";
        console.log(imgname)
    })
}
for (var i = 0; i < wrapper_second.length; i++) {
    wrapper_second[i].addEventListener('mouseenter', function (e) {
        e.preventDefault();
        var imgname = getComputedStyle(this).getPropertyValue("background-image");
        mainimg[1].style = "background:" + imgname + " no-repeat center / cover;";
        console.log(imgname)
    })
    wrapper_second[i].addEventListener('mouseleave', function (e) {
        var imgname = getComputedStyle(this).getPropertyValue("background-image");
        mainimg[1].style = "background: url('../img/lineup/lineup01.jpg') no-repeat center/ cover;";
        console.log(imgname)
    })
}
//json이용해서 할것
