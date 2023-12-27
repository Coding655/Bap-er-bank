document.getElementById('btn-clicked'),addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passField = document.getElementById('pass-field');
    const pass = passField.value;
    if(email === 'imransirazee@gmail.com' && pass === 'password'){
        window.location.href = "calculation.html";
    }
    else{
        // alert('Wrong Password')

    }
})