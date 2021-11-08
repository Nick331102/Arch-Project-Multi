const navSlide = () => {

const burger = document.querySelector(".hamburger__menu")
const navLinks = document.querySelector(".nav__links--container")



burger.addEventListener('click', () => {
    navLinks.classList.toggle("show")
    burger.classList.toggle("clicked")
   

})
}

navSlide()