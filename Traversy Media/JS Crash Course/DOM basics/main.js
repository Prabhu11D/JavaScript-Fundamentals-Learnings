//console.log(window);
//window.alert("I am Alert!");
//form = document.getElementById('my-form');
//console.log(form);
//console.log(document.querySelector('.container'));

/*
const item = document.querySelectorAll('.item');
item.forEach((i) => console.log(i));


const ul = document.querySelector('.items');
// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent ="ITEM 1";
ul.children[1].innerText = "Prabhu";
ul.lastElementChild.innerHTML = "<h1>PRABHU</h1>"

btn = document.querySelector('.btn')
//btn.style.background = 'red';
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
})
*/

const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(name.value==='' || email.value===''){
        msg.classList.add('error');
        msg.innerHTML = "Please Enter all fields";

        setTimeout(() => msg.remove(), 2000);
    }else{
        console.log("Successfully submitted!");
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}` ))

        userList.appendChild(li);

        name.value = '';
        email.value = '';
    }
}
