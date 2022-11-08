let groderyList = document.getElementById('groderyList');

let submit = document.getElementById('submit');

let clearItems = document.getElementById('clear');

let input = document.getElementById('grocery');

let form = document.getElementById('form');

let deleteButtons = document.getElementsByClassName('delete');

let editButtons = document.getElementsByClassName('edit');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = input.value;
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = value;
    groderyList.appendChild(li);
    li.appendChild(span);
    input.value = '';

    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    editButton.innerHTML = 'Edit';
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    deleteButton.className = 'delete';
    editButton.className = 'edit';

    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (e) => {
            let li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
    }

    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (e) => {
            let userValue = prompt('Enter new value');
            let li = e.target.parentElement;
            let span = li.firstElementChild;
            span.textContent = userValue;
        });
    }
});


clearItems.addEventListener('click', () => {
    while(groderyList.firstChild) {
        groderyList.removeChild(groderyList.lastChild);
    }
});