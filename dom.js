
//initial dom exploration
// const button = document.querySelector('.btn');
//  button.addEventListener('click' , (e)=>{
// e.preventDefault();
// document.querySelector('form').classList.add('bg-dark');
//  })
//  document.getElementById('main-header').style.borderBottom = 'solid 3px Black';
// const additem = document.querySelector('h2');
// additem.style.color = 'Green';
// additem.style.fontWeight = 900;

//used getelementsbyclassname
// const items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'Green';
// for(let i =0;i<items.length ; i++){
//     items[i].style.fontWeight = 'bold';
// }

//used query selector here 
// document.querySelector('.list-group-item:nth-child(2)').style.backgroundColor = 'green';
// document.querySelector('.list-group-item:nth-child(3)').style.visibility = "hidden";

//used query selector all here 
// const secondlistitem = document.querySelectorAll('li');
// secondlistitem[2].style.color = 'green';
// const odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i =0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'red';
// }

//dommanipulation crash course part 2, travesing the dom 
// const text = document.createTextNode('hello');
// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');
// container.insertBefore(text,h1);

//with delete button 
let form = document.getElementById('addForm');
form.addEventListener('submit', additems);
let ulitem = document.getElementById('items');  
ulitem.addEventListener('click', removeitem);

function additems(e){
    e.preventDefault();
    let liitem = document.createElement('li');
    liitem.className = 'list-group-item';
    let inputext = document.getElementById('item').value;
    liitem.appendChild(document.createTextNode(inputext));
    ulitem.appendChild(liitem);
    let delbutton = document.createElement('button');
    delbutton.className = 'btn btn-danger btn-sm float-right delete';
    delbutton.appendChild(document.createTextNode('X'));
    liitem.appendChild(delbutton);
    let editbtn = document.createElement('btn');
    editbtn.className = 'btn btn-primary btn-sm float-right delete';
    editbtn.appendChild(document.createTextNode('Edit'));
    liitem.appendChild(editbtn);
    
}

function removeitem (e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        ulitem.removeChild(li);
    }
}



























