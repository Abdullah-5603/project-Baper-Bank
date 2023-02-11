// Log in page
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    if(email === 'bal@bal.com' && password === 'balsal'){
        window.location.href = 'index2.html'
    } else{
        alert('password or username in invalid')
    }
})