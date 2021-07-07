const navBar = document.querySelector('.navBar');
const dropNav = document.querySelector('ul.mynav');
// console.log(navBar, dropNav)
navBar.addEventListener('click', function(){
  // console.log(dropNav)
  dropNav.classList.toggle('active');
});