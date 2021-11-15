const navSlide = () => {

const burger = document.querySelector(".hamburger__menu")
const navLinks = document.querySelector(".nav__links--container");
const overlay = document.querySelector(".clicked__overlay")



burger.addEventListener('click', () => {
    navLinks.classList.toggle("show")
    burger.classList.toggle("clicked")
    overlay.classList.toggle("cover")
   

})
}

navSlide()