'use strict'

// VARS:

let $loginBlock = document.getElementById('login');
let $form = document.createElement('form');
let $formFieldset = document.createElement('fieldset');
let $formTitle = document.createElement('h1');
let $emailLabel = document.createElement('label');
let $emailTitle = document.createElement('span');
let $emailField = document.createElement('input');
let $errEmail = document.createElement('span');
let $passLabel = document.createElement('label');
let $passlTitle = document.createElement('span');
let $passField = document.createElement('input');
let $errPass = document.createElement('span');
let $formSubmitBtn = document.createElement('input');

let $todoBlock = document.getElementById('todo');
let $todoTitle = document.createElement('h1');
let $todoTaskBlock = document.createElement('div');
let $newTaskField = document.createElement('input');
let $todoAddBtn = document.createElement('button');
let $todoList = document.createElement('ul');
let $newTaskFieldHint = document.createElement('span');

let $modalDel = document.getElementById('modal-delete');
let $modalQuestion = document.createElement('span');
let $modalSetButtons = document.createElement('div');
let $modalNO = document.createElement('button');
let $modalYES = document.createElement('button');
let $modalBlock = document.createElement('div');

//FORM HTML:

$loginBlock.appendChild($form);

$form.classList.add('form');
$form.setAttribute('action', '#');
$form.setAttribute('method', 'POST');

$formFieldset.classList.add('form__fieldset');
$form.appendChild($formFieldset);

$formTitle.classList.add('form__title');
$formTitle.innerText = 'Login Page';
$formFieldset.appendChild($formTitle);

$formFieldset.appendChild($emailLabel);

$emailTitle.classList.add('form__emai-title');
$emailTitle.innerText = 'Email';
$emailLabel.appendChild($emailTitle);

$emailField.classList.add('form__email');
$emailField.setAttribute('type', 'email');
$emailField.setAttribute('name', 'email');
$emailField.setAttribute('placeholder', 'Enter your email')
$emailLabel.appendChild($emailField);

$errEmail.classList.add('form__err-email');
$errEmail.innerText = 'Wrong email';
$formFieldset.appendChild($errEmail);

$formFieldset.appendChild($passLabel);

$passlTitle.classList.add('form__pass-title');
$passlTitle.innerText = 'Password';
$passLabel.appendChild($passlTitle);

$passField.classList.add('form__pass');
$passField.setAttribute('type', 'password');
$passField.setAttribute('name', 'password');
$passField.setAttribute('placeholder', 'Enter your password, 8 min, 12 max')
$passLabel.appendChild($passField);

$errPass.classList.add('form__err-pass');
$formFieldset.appendChild($errPass);

$formSubmitBtn.classList.add('form__submit');
$formSubmitBtn.setAttribute('type', 'button');
$formSubmitBtn.setAttribute('value', 'Login');
$formFieldset.appendChild($formSubmitBtn);

//FORM LOGICS:

$emailField.onchange = () => {
    let re = /\S+@\S+\.\S+/;
    let result = re.test($emailField.value)

    if (result == false) {
        $errEmail.classList.add('show-err');
    }

    if ($emailField.value === '') {
        $errEmail.classList.remove('show-err');
    }
};

$emailField.oninput = () => {
    if ($emailField.value === '' && $errEmail.classList.contains('show-err')) {
        $errEmail.classList.remove('show-err');
    }
}

$passField.oninput = () => {

    if ($passField.value.length < 8) {
        $errPass.innerText = 'Wrong password - more symbols, please :-)';
        $errPass.classList.remove('green');
        $errPass.classList.add('show-err');
    } else if (8 <= $passField.value.length && $passField.value.length <= 12) {
        $errPass.innerText = 'Normal length';
        $errPass.classList.add('green');
        $errPass.classList.add('show-err');
    } else if ($passField.value.length > 12) {
        $errPass.innerText = 'Wrong password - too many symbols!';
        $errPass.classList.remove('green');
        $errPass.classList.add('show-err');
    }

    if ($passField.value === '') {
        $errPass.classList.remove('show-err');
    }
};

$formSubmitBtn.onclick = () => {
    console.log('submit!');

    if ($emailField.value === 'testuser@todo.com' && $passField.value === '12345678') {
        console.log('Добро пожаловать!');
        $loginBlock.classList.add('display-none');
        $todoBlock.classList.remove('display-none');
    }

    if ($emailField.value === '') {
        $errEmail.innerText = 'Empty email!';
        $errEmail.classList.add('show-err');
    }

    if ($passField.value === '') {
        $errPass.innerText = 'Empty password!';
        $errPass.classList.add('show-err');
    }

    if ($emailField.value !== 'testuser@todo.com' && $emailField.value !== '' || $passField.value !== '12345678' && $passlField.value !== '') {
        $errEmail.innerText = 'Incorrect email or password!';
        $errEmail.classList.add('show-err');

        $errPass.classList.remove('green');
        $errPass.innerText = 'Incorrect email or password!';
        $errPass.classList.add('show-err');
    }
}

$emailField.onfocus = () => {
    if ($errEmail.classList.contains('show-err')) {
        $errEmail.classList.remove('show-err');
    }
}

$passField.onfocus = () => {
    if ($errPass.classList.contains('show-err')) {
        $errPass.classList.remove('show-err');
    }
}

// TODO HTML:

$todoTitle.classList.add('todo__title');
$todoTitle.innerHTML = 'todo list';
$todoBlock.appendChild($todoTitle);

$todoTaskBlock.classList.add('todo__new-task-block');
$todoBlock.appendChild($todoTaskBlock);

$newTaskField.classList.add('todo__new-task');
$newTaskField.setAttribute('type', 'text');
$newTaskField.setAttribute('name', 'new-task');
$newTaskField.setAttribute('placeholder', 'Please, write new task...')
$todoTaskBlock.appendChild($newTaskField);

$todoAddBtn.classList.add('todo__add-btn');
$todoAddBtn.innerHTML = 'add';
$todoTaskBlock.appendChild($todoAddBtn);
$todoTaskBlock.appendChild($newTaskFieldHint);

$newTaskFieldHint.classList.add('important');

$todoList.classList.add('todo__list');
$todoBlock.appendChild($todoList);

$modalBlock.classList.add('todo__modal-block');
$modalBlock.classList.add('display-none');
$todoBlock.after($modalBlock);

// MODAL HTML:

$modalDel.appendChild($modalQuestion);
$modalQuestion.innerHTML = 'Delete item?'
$modalQuestion.classList.add('modal-delete__question');

$modalSetButtons.appendChild($modalNO);
$modalNO.innerHTML = 'NO';
$modalNO.classList.add('modal-delete__no-btn');

$modalSetButtons.appendChild($modalYES);
$modalYES.innerHTML = 'YES';
$modalYES.classList.add('modal-delete__yes-btn');

$modalDel.appendChild($modalSetButtons);

$modalDel.classList.add('visibility-hidden');

$todoBlock.classList.add('display-none');

// TODO LOGICS: 

let todoList = [];

if (localStorage.getItem('task')) {
    todoList = JSON.parse(localStorage.getItem('task'));
    displayMessages();
}

$todoAddBtn.addEventListener('click', function () {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let newTodo = {
        todo: $newTaskField.value,
        checked: false,
        important: false,
        time: `${day}.${month < 10 ? '0' + month : month}.${year} ${hours}.${minutes < 10 ? '0' + minutes : minutes}`
    }

    if ($newTaskField.value === '') {
        $newTaskFieldHint.innerHTML = 'Empty field!'
        $newTaskField.onfocus = () => $newTaskFieldHint.innerHTML = '';

    } else if ($newTaskField.value.length >= 30) {
        $newTaskFieldHint.innerHTML = 'Too long task!'
        $newTaskField.onfocus = () => $newTaskFieldHint.innerHTML = '';
    } else {
        todoList.unshift(newTodo);
        $newTaskFieldHint.innerHTML = '';
    }

    displayMessages();
    localStorage.setItem('task', JSON.stringify(todoList));
});

function displayMessages() {
    let $todoListItem = '';
    if (todoList.length === 0) $todoList.innerHTML = '';
    todoList.forEach(function (task, i) {
        $todoListItem += `
        <li class="todo__list-item">
        <span class="todo__list-item-time">${task.time}</span>
        <input  type="checkbox" name="task" id="task_${i}" ${task.checked ? "checked" : ''} class="todo__list-item-check">
        <label for="task_${i}" class="${task.important ? "important" : ''} todo__list-item-text">${task.todo}</label >
        <button onclick="makeImportant(${i})" class="todo__list-item-imp">Imp!<button>
        <button onclick="openModal(), deleteTask(${i})" class="todo__list-item-del">Del<button>
        </li >
            `
        $todoList.innerHTML = $todoListItem;
    })

    if ($newTaskField.value.length >= 30) {
        $newTaskField.value = $newTaskField.value;
    } else {
        $newTaskField.value = '';
    }

};

$todoList.addEventListener('change', function (event) {
    let idInput = event.target.getAttribute('id');
    let forLabel = $todoList.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;

    todoList.forEach(function (task) {
        if (task.todo === valueLabel) {
            task.checked = !task.checked;
            localStorage.setItem('task', JSON.stringify(todoList));
        }
    })
});

let makeImportant = (index) => {
    todoList[index].important = !todoList[index].important;
    displayMessages();
    localStorage.setItem('task', JSON.stringify(todoList));
}

let openModal = () => {
    $modalDel.classList.remove('visibility-hidden');
    $modalBlock.classList.remove('display-none');
}

let deleteTask = (index) => {

    $modalYES.onclick = () => {
        todoList.splice(index, 1);
        $modalDel.classList.add('visibility-hidden');
        $modalBlock.classList.add('display-none');
        localStorage.setItem('task', JSON.stringify(todoList));
        displayMessages();
    }
}

$modalNO.onclick = () => {
    $modalDel.classList.add('visibility-hidden');
    $modalBlock.classList.add('display-none');
}






