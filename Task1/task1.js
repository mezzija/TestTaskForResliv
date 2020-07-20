

document.getElementById('name_input').addEventListener('input', event => {
    event.preventDefault();
    if (event.target.defaultValue === event.target.value) {
        event.target.classList.remove('red');
    } else {
        event.target.classList.add('red');
    }
})