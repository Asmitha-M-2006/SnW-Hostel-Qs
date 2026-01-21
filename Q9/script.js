function changeTag(){
    const oldElement = document.getElementById('text')
    const selectedTag = document.getElementById('tag').value;
    const newElement = document.createElement(selectedTag);
    newElement.innerText = oldElement.innerText;
    console.log(newElement);
    oldElement.replaceWith(newElement)
}