let signUpName = document.getElementById('signName');
let signUpEmail = document.getElementById('signEmail');
let signUpPassword = document.getElementById('signPassword');
let togglePassword = document.querySelector('#togglePassword');
let password = document.querySelector('#signPassword');
let user = []

// this function check the inputs are not empty , the validation and take a copy from inputs value to local storage
function inputAdd(){
    
    if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == ''){
        document.getElementById('message').innerHTML= `<p class='text-center bg-danger text-white rounded py-1'>All Inputs are Required</p>`
    }else{
        userInputsValidation();
        isExist();
        document.getElementById('message').innerHTML=''
        if(userInputsValidation() == true && isExist()== false){
            var myObject={
                name : signUpName.value,
                email : signUpEmail.value,
                password : signUpPassword.value
            }
            user.push(myObject);
            location.href = '../../Login/index.html';
            localStorage.setItem('user', JSON.stringify(user))
        }
    }
}

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}

// toggle (show and hide) password in input
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// validation for name input
function nameInputValidation(){
    var userNameMsg = document.getElementById('usernameAlert')
    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/  //exp MostafaSaied Or mostafa saied
    if(regex.test(signUpName.value)== true){
        signUpName.classList.add('is-valid');
        signUpName.classList.remove('is-invalid');
        userNameMsg.classList.replace('d-block' , 'd-none');
        return true
        
    }else{
        signUpName.classList.add('is-invalid');
        signUpName.classList.remove('is-valid');
        userNameMsg.classList.replace('d-none', 'd-block');
        return false;
    }
}

// validation for email input
function emailInputValidation(){
    var userEmailMsg = document.getElementById('userEmailAlert');
    var regex = /@[a-z]{5,10}(\.com)$/
    if(regex.test(signUpEmail.value)== true){
        signUpEmail.classList.add('is-valid')
        signUpEmail.classList.remove('is-invalid')
        userEmailMsg.classList.replace('d-block' , 'd-none')
        return true
    }else{
        signUpEmail.classList.add('is-invalid');
        signUpEmail.classList.remove('is-valid');
        userEmailMsg.classList.replace('d-none', 'd-block');
        return false;
    }
}

// validation for password input
function passwordInputValidation(){
    var regex = /^.{8,15}$/;
    var userPasswordMsg = document.getElementById('userPasswordAlert')
    if(regex.test(signUpPassword.value)== true){
        signUpPassword.classList.add('is-valid')
        signUpPassword.classList.remove('is-invalid')
        userPasswordMsg.classList.replace('d-block' , 'd-none')
        return true
    }else{
        signUpPassword.classList.add('is-invalid');
        signUpPassword.classList.remove('is-valid');
        userPasswordMsg.classList.replace('d-none', 'd-block');
        return false;
    }
}

// function call all validation
function userInputsValidation(){
    nameInputValidation()
    passwordInputValidation()
    emailInputValidation()
    if (nameInputValidation() == true && passwordInputValidation() == true && emailInputValidation() == true ){
        return true
    }else{
        return false
    }
    
}

// function don't duplicate the email
function isExist(){
    var existMsg = document.getElementById('accountExistMsg')
    for(var i = 0 ; i < user.length ; i++)
    if (user[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
        signUpEmail.classList.add('is-invalid')
        existMsg.classList.replace('d-none' , 'd-block')
    }else{
        return false
    }
}