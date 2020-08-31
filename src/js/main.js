const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
let navbarBtns = document.querySelectorAll(".navbar__item");

let formBtn = document.querySelector("#message__form__btn");
let form = document.querySelector(".message__form");
let nav = false;



// Reset All form Values on Submit 

formBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Wooooo hoo your form was submitted!!!")
    form.reset();
})



// Add event Listener for all 4 nav buttons, remove all --active classes and add only to clicked button
for (let x = 0; x < navbarBtns.length; x++) {

    navbarBtns[x].addEventListener("click", function (e) {

        if (this.classList.contains("navbar__item--active")) {
            return;
        } else {

            Array.from(navbarBtns).forEach((el) => el.classList.remove("navbar__item--active"));
            this.classList.add("navbar__item--active");
        }
    })
}




function startFunction() {
    console.log("STARTING...")
    if (window.scrollY > 0) {
        navbar.classList.add("navbar--active");
        navbar.classList.add("z-depth-2");

    } else {
        navbar.classList.remove("z-depth-2");
        navbar.classList.remove("navbar--active");
    }

}



// ** Toggle Sidebar on and off ** 
function toggleNav() {
    !nav ? sidebar.classList.add("sidebar--active") : sidebar.classList.remove("sidebar--active")
    nav = !nav;
}




//  List for scroll events to decide navbar state
document.addEventListener("scroll", function () {
    if (window.scrollY > 50) {

        navbar.classList.add("navbar--active");
        navbar.classList.add("z-depth-2");

    } else {
        navbar.classList.remove("z-depth-2");
        navbar.classList.remove("navbar--active");
    }
})