const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  
});

prev.addEventListener('click', e => {
  prevSlide();
  
  }
);













/* 

const slides = document.querySelectorAll(".slide")
const next = document.getElementById("#next");
const prev = document.getElementById("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    const current = document.querySelector(".current")
    current.classlist.remove("current")
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current")
    } else {
        slides[0].classList.add("current")
    }
    setTimeout(() => current.classList.remove("current"))
}


const prevSlide = () => {
    const current = document.querySelector(".current")
    current.classlist.remove("current")
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current")
    } else{
        slides[slides.length -1].classList.add("current")
    }
    setTimeout(() => current.classList.remove("current"))
}

next.addEventListener("click", e => {
    nextSlide()
})


prev.addEventListener("click", e => {
    prevSlide()
})

prevSlide() */














