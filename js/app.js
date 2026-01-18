const monHeader = document.querySelector('header');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        monHeader.classList.add('header-active');
    } else {
        monHeader.classList.remove('header-active');
    }
});

const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    const icon = document.querySelector(".header-menu-mobile .material-icons")

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        icon.innerHTML = "close";
        document.body.style.overflow = "hidden";
    } else {
        icon.innerHTML = "menu";
        document.body.style.overflow = "auto";
    }
}

const links = document.querySelectorAll(".header-menu a");
links.forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".header-menu");
        if(menu.classList.contains("active")) {
            openMenu();
        }
    });
});