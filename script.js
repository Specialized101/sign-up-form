const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submitBtn = document.querySelector('#submit-btn')
const errorDiv = document.querySelector('.error')


confirmPassword.addEventListener('keyup', () => {
    if (confirmPassword.value === password.value){
        submitBtn.disabled = false;
        errorDiv.textContent = ''
    } else {
        submitBtn.disabled = true;
        errorDiv.textContent = 'The passwords don\'t match!'
    }
})