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

// Get fieldname
function getFieldName(input) {
    // getting first letter of input.id and uppercase then adding the rest of the input.id with the first char(0)
    return input.id.charAt(0).toUpperCase()/* U */ + input.id.slice(1); //sername
}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2])
})