let pass = document.getElementById('pass-word');
let confirmed = document.getElementById('confirm-pass');
let first = '';
let second = '';
let deleted = '';
let confirmOne = '';
let confirmSecond = '';
let confirmDel = '';


pass.addEventListener('keydown', updatePass);
confirmed.addEventListener('keydown', updatePass);

function updatePass(e) {
    if (e.keyCode == 8 && first != '') {
        deleted = first.slice(0, first.length - 1);
        first = deleted;
    } else if (e.keyCode == 8 && first == '') {
        return;
    } else {
        first = first + (String.fromCharCode(e.keyCode));
        console.log(first);
    }
}

function updateConfirm(e) {
    if (e.keyCode == 8 && confirmOne != '') {
        confirmDel = confirmOne.slice(0, confirmOne.length - 1);
        confirmOne = confirmDel;
    } else if (e.keyCode == 8 && confirmOne == '') {
        return;
    } else {
        confirmOne = confirmOne + (String.fromCharCode(e.keyCode));
    }

}