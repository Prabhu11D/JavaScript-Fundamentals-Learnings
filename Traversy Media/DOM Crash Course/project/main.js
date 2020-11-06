var search = document.getElementById('search');
var itemText = document.getElementById('ItemText');
var addItem = document.getElementById('submit');
var itemList = document.getElementById('ItemList');


addItem.addEventListener('click', addITEM);
itemList.addEventListener('click', removeITEM);
search.addEventListener('keyup', filter);

function addITEM(e){

    var li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(itemText.value));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.id = 'delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    
    if(itemText.value){
    itemList.appendChild(li);
    }
}

function removeITEM(e){
    if(e.target.classList.contains('delete')){
        itemList.removeChild(e.target.parentElement);
    }
}

function filter(e){
    text = e.target.value.toLowerCase();

    var item = itemList.getElementsByTagName('li');
    for(var i=0;i<item.length; i++){
        var itemName = item[i].firstChild.textContent.trim();
        if(itemName.toLowerCase().indexOf(text) != -1){
            item[i].style.display = 'block';
        }else{
            item[i].style.display = 'none';
        }
    }
}