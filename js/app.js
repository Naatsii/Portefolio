const monHeader = document.querySelector('header');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        monHeader.classList.add('header-active');
    } else {
        monHeader.classList.remove('header-active');
    }
});