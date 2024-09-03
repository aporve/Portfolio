// Typing Animation

let typed = new Typed(".typing", {
    strings: [ "MERN Stack Developer", "FrontEnd Developer", "BackEnd Developer", "Software Engineer" ],
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

        removeBackSection()
        // if(allSection[i] == allSection[j]) {
        //     allSection[i].classList.remove("back-section")
        // }

        for(let j=0 ; j< totalNavList; j++) {

            if(navList[j].querySelector("a").classList.contains("active")) {
                // console.log()
                // let backSection = navList[j].querySelector("a")
                // backSection.classList.add("back-section")
                addBackSection(j);
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

function removeBackSection() {
    for(let i=0 ; i<totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section")
}

function showSection(element) {
    // console.log(element.getAttribute("href").split('#'));
    for(let i=0 ; i<totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split('#')[1];
    document.querySelector('#'+target).classList.add("active")
}

function updateNav(element) {

    for(let i=0 ; i<totalNavList; i++ ) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute("href").split('#')[1];

        if(target === navList[i].querySelector('a').getAttribute("href").split("#")[1]) {
            navList[i].querySelector('a').classList.add('active');
        }



    }


}


document.querySelector('.hire-me').addEventListener('click', function(){
    console.log('hire',this)

    const sectionIndex = this.getAttribute('data-section-index')
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})


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





// Form control 


document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // const name = encodeURIComponent(document.getElementById('name').value);
    // const email = encodeURIComponent(document.getElementById('email').value);
    // const message = encodeURIComponent(document.getElementById('message').value);
    // const subject = encodeURIComponent(document.getElementById('subject').value);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`

    window.open(`${mailtoLink}`, '_blank', 'width=800,height=600');
    document.getElementById('emailForm').reset();
});

















