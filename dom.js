const ul = document.querySelector('.items');
ul.firstElementChild.style.background = 'green';
ul.children[1].style.color = 'yellow';

const button = document.querySelector('.btn');
 button.addEventListener('click' , (e)=>{
e.preventDefault();
document.querySelector('form').classList.add('bg-dark');
 })