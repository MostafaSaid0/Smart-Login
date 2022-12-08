var user = [];
user = JSON.parse(localStorage.getItem('user'))

var signInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword');
let togglePassword = document.querySelector('#togglePassword');
let password = document.querySelector('#signPassword');
var incorrectMsg = document.getElementById('incorrectMsg');

// this function check inputs are not empty 
function loginAdd() {
    if (signInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class='text-center bg-danger text-white rounded py-1'>All Inputs are Required</p>`;
    } else {
        checkUser();
    }
}
// this function check the data in the local storage and take copy from user name
function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (signInEmail.value == user[i].email && signInPassword.value == user[i].password) {
            var myName = user[i].name;
            localStorage.setItem('userName', myName);
            location.href = '../../home/index.html';
            incorrectMsg.classList.replace('d-block','d-none');
            return true
        }else{
            incorrectMsg.classList.replace('d-none','d-block');
            return false
        }
    }
}

// toggle (show and hide) password in input
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});