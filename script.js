let accButton = document.getElementById("create");
let message = document.getElementById("no-error");
let pass;
let confirmed;

accButton.addEventListener('click', checkPass);

function checkPass() {
    pass = document.getElementById('pass-word').value;
    confirmed = document.getElementById('confirm-pass').value;
    console.log(pass);
    console.log(confirmed);

    if (pass != confirmed) {
        message.innerText = '*Passwords do not match.';
        document.getElementById('confirm-pass').style.borderColor = 'red';
    } else {
        message.innerText = '';
        document.getElementById('confirm-pass').style.borderColor = 'lightgreen';
    }
}