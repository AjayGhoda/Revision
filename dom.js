

// const button = document.querySelector('.btn');
//  button.addEventListener('click' , (e)=>{
// e.preventDefault();
// document.querySelector('form').classList.add('bg-dark');
//  })
 document.getElementById('main-header').style.borderBottom = 'solid 3px Black';
const additem = document.querySelector('h2');
additem.style.color = 'Green';
additem.style.fontWeight = 900;

const items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'Green';
for(let i =0;i<items.length ; i++){
    items[i].style.fontWeight = 'bold';
}

