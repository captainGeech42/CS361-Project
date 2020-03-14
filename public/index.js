
function displayAlert() {
    alert("This is not yet implemented")
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

function clearCookies(){
    document.cookie = 'user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
}

var userpass = getCookie('user');
if(userpass){
    var accountButton = document.querySelector('#account-button');
    accountButton.classList.add('hidden');

    document.querySelector('#create-account-button').classList.add('hidden');

    document.querySelector('#account-button2').classList.remove('hidden');


}

function checkIfUserLoggedIn() {
    var request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    console.log(request);
    fetch('/do-delete', request);


    var accountButton = document.querySelector('#account-button');
    accountButton.classList.remove('hidden');

    document.querySelector('#create-account-button').classList.remove('hidden');

    document.querySelector('#account-button2').classList.add('hidden');

    window.location.href = "/"

}
