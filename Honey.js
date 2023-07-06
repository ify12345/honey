// Navbar Display on scroll 
const header =  document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle('sticky', window.scrollY > 80);
})

// Responsive Navigation 
const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist')

// menu.onclick = ()=>{
//     menu.classList.toggle('bx-x');
//     navList.classList.toggle('open')
// }
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open')
})


// Animation
window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navList.classList.remove('open')
} 
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true

})
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.container',{delay:400});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay: 300});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn,.shop-content',{delay: 300});


sr.reveal('.review-content,.contact',{delay: 300});

