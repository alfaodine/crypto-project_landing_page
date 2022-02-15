let body = document.querySelector('body'),
    modeIcon = document.querySelector('.menu__night-mode'),
    modeCheck = 0;

modeIcon.addEventListener('click', function(e){
    modeCheck++;
    body.classList.toggle('night-mode');

if ((modeCheck % 2) ==! 0){
    modeIcon.innerHTML = '<img src="./img/sun-icon.png" alt="">'
}else{
    modeIcon.innerHTML = '<img src="./img/icon-moon.png" alt="">';
}
})


