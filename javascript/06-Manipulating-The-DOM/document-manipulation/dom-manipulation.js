
// Accessing DOM elements
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', function() {
    const paragraph = document.querySelector('p');
    paragraph.innerHTML = 'The text has been changed!';
});

// Adding elements to the DOM with button
const addElementBtn = document.getElementById('addElementBtn');
addElementBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'This is the new paragraph added dynamically!';
    document.querySelector('.container').appendChild(newParagraph);
});

// Removing elements from the DOM with button
// Adding button
const removeElementBtn = document.createElement('button');
removeElementBtn.innerHTML = 'Remove Last Element';
document.querySelector('.container').appendChild(removeElementBtn);

removeElementBtn.addEventListener('click', function() {
 const paragraphs = document.querySelectorAll('p');
 const lastParagraph = paragraphs[paragraphs.length - 1];
 lastParagraph.remove();
});

// Adding and Removing Nodes

//let div = document.querySelector(".container");
//
//let newNode = document.createElement("p");
//newNode.innerHTML = "DOM manipulation is <strong>super cool</strong>!";
//
//div.appendChild(newNode);
//
//let p2 = div.getElementsByTagName("p")[1];
//div.removeChild(p2);
//
//console.log(newNode.innerText);
//console.log(newNode.innerHTML);
//console.log(newNode.childNodes);
//
//console.log(document.all);
//
//const changeTextBtn = document.getElementById('changeTextBtn');
//changeTextBtn.addEventListener('click', function() {
// const paragraph = document.querySelector('p');
// paragraph.innerHTML = 'The text has been changed!';
//});
