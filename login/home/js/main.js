document.getElementById('userName').innerHTML = localStorage.getItem('userName');


// this function do logOut
function logOutBtn() {
    localStorage.removeItem('userName');
}