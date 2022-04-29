let pass = document.getElementById('pass-word');
let confirmed = document.getElementById('confirm-pass');
let confirmMessage = document.getElementById('no-error')
let first = '';
let second = '';

pass.addEventListener('keyup', e => {
    first = document.getElementById('pass-word').value;
    console.log(first);
    checkMatch(first, second);
});

confirmed.addEventListener('keyup', e => {
    second = document.getElementById('confirm-pass').value;
    console.log(second);
    checkMatch(first, second);
});

function checkMatch(a, b) {
    if (a == b) {
        document.getElementById("confirm-pass").className = 'confirm-ok';
        document.getElementById('error-confirm').id = 'error-none';
    } else {
        document.getElementById("confirm-pass").className = 'confirm-wrong';
        document.getElementById('error-none').id = 'error-confirm';
    }
}