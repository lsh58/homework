
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


function getCurrentScrollPercentage() {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
}

var li = document.querySelectorAll('li');
var ul = document.querySelector('ul');

window.addEventListener("scroll", function () {
    var scrollY = getCurrentScrollPercentage();
    console.log(scrollY);
    if (scrollY <= 5) {
        for (var i = 0; i < li.length; i++) {
            li[i].classList.remove('active');
            ul.classList.remove('active');
        }
    }
    if (scrollY >= 6) {
        ul.classList.add('active');
        li[0].classList.add("active");
        li[1].classList.add("active");
    }
    if (scrollY >= 10) {
        li[2].classList.add("active");
        li[3].classList.add("active");
    }
    if (scrollY >= 13) {
        li[4].classList.add("active");
        li[5].classList.add("active");
    }
    if (scrollY >= 22) {
        li[6].classList.add("active");
        li[7].classList.add("active");
    }
    if (scrollY >= 30) {
        li[8].classList.add("active");
        li[9].classList.add("active");
    }
    if (scrollY >= 43) {
        li[10].classList.add("active");
        li[11].classList.add("active");
    }
});