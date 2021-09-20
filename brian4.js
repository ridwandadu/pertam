const burger = document.querySelector('#burger');
const menu = document.querySelector('.nav-menu');

burger.addEventListener('click' , function(){
	burger.classList.toggle('aktip');
	menu.classList.toggle('aktip')
});