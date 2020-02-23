let navBtn = document.getElementById('nav-btn');
let navBar = document.getElementById('navbar');
let navClose = document.getElementById('nav-close');

navBtn.addEventListener('click',()=>{
    navBar.classList.add('showNav');
})

navClose.addEventListener('click', ()=>{
    navBar.classList.remove('showNav');
})