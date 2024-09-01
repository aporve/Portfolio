// Typing Animation

let typed = new Typed(".typing", {
    strings: ["MERN Stack Developer", "FrontEnd Developer", "BackEnd Developer", "Software Engineer" ],
    typeSpeed:60,
    BackSpeed:60,
    loop: true
})


// Aside

const nav = document.getElementById('nav')
// console.log(nav)
const navList = nav.getElementsByTagName('li')
// console.log(navList)
const totalNavList = navList.length;
// console.log(totalNavList)
const allSection = document.getElementsByClassName("section");
console.log(allSection)
const totalSection = allSection.length;
console.log(totalSection)

for(let i=0 ; i<totalNavList; i++) {
    // console.log(navList[i])

    const a = navList[i].querySelector('a');
    // console.log(a)
    a.addEventListener("click", function() {

        for(let i=0 ; i<totalSection; i++) {
            allSection[i].classList.remove("back-section")
        }

        // if(allSection[i] == allSection[j]) {
        //     allSection[i].classList.remove("back-section")
        // }

        for(let j=0 ; j< totalNavList; j++) {

            if(navList[j].querySelector("a").classList.contains("active")) {
                // console.log()
                // let backSection = navList[j].querySelector("a")
                // backSection.classList.add("back-section")
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector('a').classList.remove("active");
        }
        // console.log(this)
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionToggleBtn()
        }
    })

}

function showSection(element) {
    // console.log(element.getAttribute("href").split('#'));
    for(let i=0 ; i<totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split('#')[1]
    document.querySelector('#'+target).classList.add("active")
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", ()=> {
 asideSectionToggleBtn();
})

function asideSectionToggleBtn() {
    aside.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
    for(let i=0; i<totalSection; i++ ) {
        allSection[i].classList.toggle("open")
    }
}






















