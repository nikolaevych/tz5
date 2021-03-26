//menu_burger
const menuBurger = document.querySelector('.menu_burger');
const menu = document.querySelector('.menu');
if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		menuBurger.classList.toggle('active');
		menu.classList.toggle('active');
	});
};