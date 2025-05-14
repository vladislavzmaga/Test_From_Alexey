const openMenuBtn = document.querySelector(".header__list-mob-menu-open-btn")
const closeMenuBtn = document.querySelector(".header__list-mob-menu-close-btn")

const mobileMenu = document.querySelector(".header__mob-memu-wrapper")

openMenuBtn.addEventListener("click", openMenu)
closeMenuBtn.addEventListener("click", closeMenu)


function openMenu() {
    mobileMenu.classList.remove("transform")
    
}

function closeMenu() {
      mobileMenu.classList.add("transform")
}