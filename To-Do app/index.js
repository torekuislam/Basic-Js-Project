const inputBtn = document.getElementById('input-btn');
const inputBox = document.getElementById('input-box');
const items = document.querySelector('ul');



function addli() {
    if (inputBox.value.replace(/\s+/g, ' ').trim() === '') {
        alert('You must write someting!');
    } else {
        let inputValue = inputBox.value;
        let li = document.createElement('li');
        li.innerText = inputValue;
        items.appendChild(li);

        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

inputBtn.addEventListener('click', () => {
    addli();
});

inputBox.addEventListener('keypress', key => {
    if (key.key === 'Enter') {
        addli();
    }
});


items.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', items.innerHTML);
};
function shoData() {
    items.innerHTML = localStorage.getItem('data');
};
shoData();