// Log in page
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    if(email === 'abdullah@gmail.com' && password === '123456'){
        window.location.href = 'index2.html'
        console.log('valid user')
    } else{
        alert('invalid user')
    }
})