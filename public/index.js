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