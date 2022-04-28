let pass = document.getElementById('pass-word');
let confirm = document.getElementById('confirm-pass');
let first = '';
let second = '';
let deleted = '';


pass.addEventListener('keypress', updatePass);

function updatePass(e) {
    if (e.keyCode == 8 && first != '') {
        deleted = first.slice(0, first.length - 1);
        first = deleted;
        console.log(first);
    } else if (e.keyCode == 8 && first == '') {
        return;
    } else {
        first = first + (String.fromCharCode(e.keyCode));
        console.log(first);
    }
}