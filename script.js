let btnMobile = document.getElementById('hamburger');

function menuAct(event) {
if (event.type === 'touchstart') 
event.preventDefault();

const nav = document.getElementById('nav');
nav.classList.toggle('active');

}


btnMobile.addEventListener('click', menuAct);
btnMobile.addEventListener('touchstart', menuAct);