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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid")
    };
}

// check required fields
function checkRequired(inputArr) {
    // will loop through the array
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input)
        }
        // console.log(input)
    });
}

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min}`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max}`)
    }else{
        showSuccess(input)
    }
}

// check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}

// Get fieldname
function getFieldName(input) {
    // getting first letter of input.id and uppercase then adding the rest of the input.id with the first char(0)
    return input.id.charAt(0).toUpperCase()/* U */ + input.id.slice(1); //sername
}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2)
})