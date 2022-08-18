const newTask = document.querySelector('#new-task');
const form = document.querySelector('form');
const todoUl = document.querySelector('#items');
const completeUl = document.querySelector('.complete-list ul');

let createTask = function(task) {

    let listItem = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.type = 'checkbox';
    label.innerText = task;
    listItem.appendChild(input);
    listItem.appendChild(label)

    return listItem;

}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    bindInCompleteItems(listItem, completeTask);

}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    let checkBox = listItem.querySelector("input[type='checkbox']");
    checkBox.remove();
    listItem.appendChild(deleteBtn);
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);

}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);


}
let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector("input[type='checkbox']");
    checkBox.onchange = checkboxClick;
}
let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}
for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);