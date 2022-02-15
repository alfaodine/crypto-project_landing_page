let nav = document.querySelector('.nav-toggle');
let menu = document.querySelector('.menu');

nav.addEventListener('click', function(){
    nav.classList.toggle('opened');
    if (nav.classList.contains('opened')){
        menu.setAttribute('style', 'left: 0%');
    }else{
        menu.setAttribute('style', 'left: -105%');
    }
})