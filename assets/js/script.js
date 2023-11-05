const searchForm = document.querySelector(".search-form-container");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

const cart = document.querySelector(".shopping-cart-container");

document.querySelector("#cart-btn").onclick = () => {
    cart.classList.toggle('active');
    searchForm.classList.remove("active");
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

const loginForm = document.querySelector('.login-form-container');

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove("active");
    cart.classList.remove('active');
    navbar.classList.remove('active');
}
 
const navbar = document.querySelector('.header .navbar');

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove("active");
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// ========================================== MOUSE MOVEMENT ON HOME IMAGE ========================================== //
document.querySelector(".home").onmousemove = (e) => {
    let x = (window.innerWidth -e.pageX * 2) / 90;
    let y = (window.innerHeight -e.pageX * 2) / 90;

    document.querySelector(".home .home-parallax-img").style.transform = `translateX(${y}px) translateY(${x}px)`;
}
// document.querySelector('home').onmouseleave = () => {
//     document.querySelector(".home .home-parallax-img").style.transform = `translateX(0px) translateY(0px)`;
// }

//  THEME TOGGLE LIGHT AND DARK  //

let icon = document.querySelector("#toggle-btn");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}


