
// Toggle Style Switcher
console.log('In Js file')
const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", ()=> {
    document.querySelector(".style-switcher").classList.toggle("open");
})


// Hide style switcher on scroll 
window.addEventListener("scroll", ()=> {
    if( document.querySelector(".style-switcher").classList.contains("open")  ) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


// Theame Colors
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    
    alternateStyles.forEach((style)=> {
        if(color === style.getAttribute('title')) {
            style.removeAttribute("disabled");
        }else {
            style.setAttribute("disabled", "true")
        }
    })

}


// Theame Light and dark Mode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", ()=> {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})

window.addEventListener("load", ()=> {

    if( document.body.classList.contains("dark") ) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }


})








