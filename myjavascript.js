const menuToggle=document.querySelector('.menu-toggle');
const bxMenu=document.querySelector('.bx-menu');
const bxX=document.querySelector('.bx-x');

const navBar=document.querySelector('.navbar');

bxMenu.addEventListener('click', (e)=>{
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        console.log("hello")
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})
