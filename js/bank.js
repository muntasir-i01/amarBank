document.getElementById('login-submit').addEventListener
('click', function() {
    // window.location.href="banking.html";
    
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
  
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'child@gmail.com' && userPassword == "123") {
        window.location.href="banking.html";
    }
    else {
        console.log("invalid");
    }
   
})



