function openNav() {
       document.getElementById("nav").style.width = "300px";
   }
   function closeNav() {
       document.getElementById("nav").style.width = "0";

   }
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const choose = dropdown.querySelector('.choose');
    const carets = dropdown.querySelector('#carets');
    const menu = dropdown.querySelector('.menu');
    const li = dropdown.querySelector('.li');

    choose.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
        carets.classList.toggle('carets1-rotate');
        dropdown.classList.toggle('dropdown-space');
        back.classList.toggle('fulldrop-open');
    });

});

