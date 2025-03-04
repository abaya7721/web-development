console.log(document.all);

console.log(document.body);

console.log(document.scripts);

const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
    const background = document.querySelector('body');
    background.style.background = '#0a0747';
});

const addItemBtn = document.getElementById('addItemBtn');
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New item';
    document.getElementById('itemList').appendChild(newItem);
});



const removeItemBtn = document.createElement('button');
removeItemBtn.innerHTML = 'Remove List Element';
document.querySelector('div').appendChild(removeItemBtn);

removeItemBtn.addEventListener('click', function() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.remove();
});



