// ----------- Examining the document ---------------
// // console.dir(document);

// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);

// // changing the title
// document.title = 'DOM Manipulation';

// console.log(document.doctype);
// console.log(document.head);

// console.log(document.all);
// document.all[11].innerHTML = "Add";

// console.log(document.forms);
// console.log(document.children);




// ------------- GET ELEMENT BY ID -------------
// var button = document.getElementById('button');
// console.log(button);

// var header = document.getElementById('header');
// header.innerHTML = "Hello List Card";

// header.innerHTML = '<i>P tag</i>';

// var header = document.getElementById('header');
// header.style.borderBottom = '3px solid #000';




// ------------ GET ELEMENTS BY CLASS NAME ---------
// var items = document.getElementsByClassName('item');
// console.log(items);
// items[1].style.backgroundColor = 'yellow';
// items[1].style.fontWeight = 'bold';
// items[1].style.textTransform = 'uppercase';

// for(var i=0; i< items.length; i++){
//     items[i].style.backgroundColor = '#9a9e8a';
// }



// ------------ GET ELEMENT BY TAG NAME --------------






// ------------- QUERY SELECTOR -------------------
// var textfield = document.querySelector('input');
// textfield.value = "Hello World";

// var submit = document.querySelector('button');
// submit.innerText = 'SEND';

// var lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = "white";
// lastItem.style.backgroundColor = '#c33cc3';



// ------------ QUERY SELECTOR ALL -----------
// var odd = document.querySelectorAll('.item:nth-child(odd)');
// var even = document.querySelectorAll('.item:nth-child(even)');

// for(var i=0; i<3; i++){
//     odd[i].style.backgroundColor = '#efefef';
//     even[i].style.backgroundColor = '#dedede';
// }




// ----------------- TRAVERSING DOM ---------------
// parentNode
// var items = document.querySelector('.item');
// console.log(items.parentNode);
// console.log(items.parentNode.parentNode);

// items.parentNode.style.padding = '20px';
// items.parentElement.style.backgroundColor = '#d516aa';


// ----------- Child node ----------------
// var itemList = document.querySelector('.item-list');
// console.log(itemList.childNodes);
// // text is a white space
// // use children to remove whitespace
// console.log(itemList.children);

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = 'red';

// --------------- SIBLING ---------------
// var item = document.querySelector('.item');
// console.log(item.nextElementSibling);
// item.nextElementSibling.style.letterSpacing  = '8px';

// console.log(item.nextElementSibling.previousElementSibling);

// -------------- CREATING A ELEMENT ----------------------

// var newItem = document.createElement('li');
// newItem.className = 'item';
// newItem.id = 'item';
// newItem.title = 'new Item created by JS DOM';
// newItem.appendChild(document.createTextNode('New Item'));

// var itemList = document.querySelector('.item-list');
// var item1 = document.querySelector('.item:nth-child(1)');

// console.log(item1);
// console.log(newItem);

// itemList.insertBefore(newItem, item1);




// var click = document.getElementById('click');

// click.addEventListener('click', buttonClicked)

// function buttonClicked(e){
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     console.log(e.type);

//     console.log(e.clientX, e.clientY);
//     console.log(e.offsetX, e.offsetY);

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }


// ------------- OTHER EVENT LISTENER ------------

// var click = document.getElementById('click');

// click.addEventListener('click', runEvent)
// click.addEventListener('dblclick', runEvent)
// click.addEventListener('mousedown', runEvent);
// click.addEventListener('mouseup',runEvent);

// var canvas = document.getElementById('canvas');
// canvas.addEventListener('mouseenter', runEvent);
// canvas.addEventListener('mouseover', runEvent);
// canvas.addEventListener('mouseleave', runEvent);
// canvas.addEventListener('mouseout', runEvent);

// canvas.addEventListener('mousemove', runEvent);

var text = document.getElementById('name');
var output = document.querySelector('.output');


// text.addEventListener('keyup', runEvent);
// text.addEventListener('keydown',runEvent);
// text.addEventListener('keypress', runEvent);

// text.addEventListener('focus', runEvent);
// text.addEventListener('blur', runEvent);

// text.addEventListener('cut', runEvent);
// text.addEventListener('paste', runEvent);

function runEvent(e){
    console.log("EVENT TYPE : \""+e.type+"\"");
    // console.log(e.target.value);
    // output.innerHTML = "<h3>"+e.target.value+"</h3>"
    // output.innerHTML = XY(e);
    // coloring(e);

    // document.body.style.display = 'none';
}
// function XY(e){
//     return "<h3> MouseX : "+e.offsetX+"</h3><h3>MouseY : "+e.offsetY+"</h3>";
// }
// function coloring(e){
//     r = e.offsetX * 0.721;
//     g = e.offsetY * 1.723;
//     b = (r+g)/2;
//     console.log(r,g,b);
//     document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
// }