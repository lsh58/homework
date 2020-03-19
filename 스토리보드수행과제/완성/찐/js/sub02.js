window.addEventListener('load', function () {
    var wrapper = document.querySelectorAll('.img-wrapper');
    var wrapper_first = wrapper[0].querySelectorAll('.img-sub a');
    var content_first = wrapper[0].querySelector('.img-main .content');
    var wrapper_second = wrapper[1].querySelectorAll('.img-sub a');
    var content_second = wrapper[1].querySelector('.img-main .content');
    var mainimg = document.querySelectorAll('.img-wrapper .img-main');
    // console.log(thumbnail[0]);
    // console.log(document.querySelector(".img-sub"))

    for (var i = 0; i < wrapper_first.length; i++) {
        wrapper_first[i].addEventListener('mouseenter', function (e) {
            e.preventDefault();
            var imgname = this.style.backgroundImage;
            mainimg[0].style = "background:" + imgname + " no-repeat center / cover;";

        })
        wrapper_first[i].addEventListener('click', function (e) {
            e.preventDefault();
            content_first.style.opacity = 1;
        })

        wrapper_first[i].addEventListener('mouseleave', function (e) {
            var imgname = this.style.backgroundImage;
            content_first.style.opacity = 0;
            mainimg[0].style = "background: url('../img/lineup/lineup01.jpg') no-repeat center/ cover;";
        })
    }

    for (var i = 0; i < wrapper_second.length; i++) {
        wrapper_second[i].addEventListener('mouseenter', function (e) {
            e.preventDefault();
            var imgname = this.style.backgroundImage;
            mainimg[1].style = "background:" + imgname + " no-repeat center / cover;";
        })
        wrapper_second[i].addEventListener('click', function (e) {
            e.preventDefault();
            content_second.style.opacity = 1;
        })
        wrapper_second[i].addEventListener('mouseleave', function (e) {
            var imgname = this.style.backgroundImage;
            content_second.style.opacity = 0;
            mainimg[1].style = "background: url('../img/lineup/lineup01.jpg') no-repeat center/ cover;";
        })
    }
});
//json이용해서 할것
