var todoText = document.querySelector('#todo-text');
var todoButton = document.querySelector('#todo-button');
var todoList = document.querySelector('#todo-list');

function AddTask() {
    if (todoText.value == '') {
        alert('Do not leave blank');
    }
    else {
        var li = document.createElement('li');
        li.innerHTML = todoText.value;
        todoList.appendChild(li);
        var span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    todoText.value = '';
}

todoList.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
    }
})

todoButton.addEventListener('click', AddTask);