


var ticket_nav = document.querySelectorAll('.ticket_nav a');
for (var i = 0; i < ticket_nav.length; i++) {
    ticket_nav[i].addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < ticket_nav.length; j++) {
            ticket_nav[j].classList.remove('active');
        }
        this.className = 'active';
    })
}


var win_height = window.innerHeight; /* 윈도우의 높이 */
var li = document.querySelectorAll('li');
var ul = document.querySelector('ul');

window.addEventListener("scroll", function () {
    var scrollY = window.scrollY; /* 스크롤 값 */
    if (scrollY < 10) {
        for (var i = 0; i < li.length; i++) {
            li[i].classList.remove('active');
            ul.classList.remove('active');
        }
    }
    if (scrollY >= 10) {
        ul.classList.add('active');
        li[0].classList.add("active");
        li[1].classList.add("active");
        li[2].classList.add("active");
        li[3].classList.add("active");
    }
    if (scrollY >= 100) {
        li[4].classList.add("active");
        li[5].classList.add("active");
    }
    if (scrollY >= 200) {
        li[6].classList.add("active");
        li[7].classList.add("active");
    }
    if (scrollY >= 300) {
        li[8].classList.add("active");
        li[9].classList.add("active");
    }
    if (scrollY >= 400) {
        li[10].classList.add("active");
        li[11].classList.add("active");
    }
});