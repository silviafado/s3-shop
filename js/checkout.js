// Get the input fields
const password = document.querySelector('.password');
const phone = document.querySelector('.phone');
const name1 = document.querySelector('.name');
const last = document.querySelector('.last');
const email = document.querySelector('.email');
const address = document.querySelector('.address');


// Get the error elements
const errorPassword = document.getElementById('errorPassword');
const errorName = document.getElementById('errorName');
const errorPhone = document.getElementById('errorPhone');
const errorMail = document.getElementById('errorMail');

// 1. Setting the fields to be required
name1.setAttribute("required", "");
email.setAttribute("required", "");
password.setAttribute("required", "");
phone.setAttribute("required", "");


// Exercise 9
function validate() {
    // Clean error messages when starting validation
    errorName.style.display = 'none';
    errorPhone.style.display = 'none';
    errorPassword.style.display = 'none';

    // Define Regex variable for alphabet values only
    const regEx = /^[A-Za-z]+$/;
    // Define Regex variable for only numbers
    const numbers = /^[0-9]+$/;
    // Define regex for password format
    const passwordRegex = /^([a-zA-Z0-9]+)$/;
    // Define Regex for email format
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validate fields entered by the user
    // Name and Last Name validation
    if (name1.value, last.value == '' || name1.value.length, last.value.length < 3 || !name1.value, !last.value.match(regEx)) {
        alert('Name and Last Name are mandatory and need to be at least 3 characters long.');
        errorName.style.display = 'block';
        name1.focus();
        last.focus();
        return false;
    }
    // Email validation
    if (email.value == '' || email.value.length < 3 || !email.value.match(mailRegex)) {
        alert('Email is mandatory and needs to be at least 3 characters long.');
        errorMail.style.display = 'block';
        email.focus();
        return false;
    }
    // Password validation
    if (password.value == '' || password.value.length < 3 || !password.value.match(regEx)) {
        alert('Password is mandatory and needs to be at least 3 characters long.');
        errorPassword.style.display = 'block';
        password.focus();
        return false;
    }
    // Address validation    
    if (address.value == '' || address.value.length < 3) {
        alert('Address is mandatory and needs to be at least 3 characters long.');
        address.focus();
        return false;
    }
    // Phone validation
    if (phone.value == '' || phone.value.length < 3 || !phone.value.match(numbers)) {
        alert('Phone is mandatory and needs to be at least 3 characters long.');
        errorPhone.style.display = 'block';
        phone.focus();
        return false;
    }
    return true;
}