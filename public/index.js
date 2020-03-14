
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

function logout(){
    clearCookies();
    
    window.location.href = "/my-account"
}

var userpass = getCookie('user');
if(userpass){
    document.querySelector('#account-button').classList.add('hidden');
    document.querySelector('#create-account-button').classList.add('hidden');

    
    document.querySelector('#account-button2').classList.remove('hidden');
    document.querySelector('#upload-stuff').classList.remove('hidden');
}

async function checkIfUserLoggedIn() {
    var request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    await fetch('/do-delete', request);
    clearCookies();

    window.location.href = "/my-account"
}
