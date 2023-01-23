function loginValidate() {
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (name == password &&  name.length > 2 ){
        alert("Login Successful")
        window.localStorage.setItem('logintStatus','true')
        window.location.href = "order.html";
} else {
        alert("Please enter valid credentials!")
    }

}




let loginstatus = window.localStorage.getItem('loginStatus');
if (loginstatus == 'true') {
  window.location.href = "order.html";;
}


