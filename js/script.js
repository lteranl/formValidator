const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message 
function showError(input, message){
    // getting inputs parent element (form-control)
    const formControl = input.parentElement;
    // changing the class name in order to display the error message
    formControl.className = "form-control error"; // red border
    const small = formControl.querySelector("small");
    small.innerText = message;

}
// Show input success message
function showSuccess(input) {
    // getting inputs parent element (form-control)
    const formControl = input.parentElement;
    // changing the class name in order to display the success message
    formControl.className = "form-control success"; // green border
}

// check email is valid 
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());    
}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === "") {
        showError(username, "Username is Required");
    }else {
        showSuccess(username);
    }
    if(email.value === "") {
        showError(email, "Email is Required");
    }else if(!isValidEmail(email.value)){
        showError(email, "Email is not valid");
    }
    else {
        showSuccess(email);
    }
    if(password.value === "") {
        showError(password, "Password is Required");
    }else {
        showSuccess(password);
    }
    if(password2.value === "") {
        showError(password2, "Confirm password is Required");
    }else {
        showSuccess(password2);
    }
    // console.log(username.value);
})