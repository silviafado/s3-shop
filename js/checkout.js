// Get the input fields
const password = document.querySelector('.password');
const phone = document.querySelector('.phone');
const name1 = document.querySelector('.name');
const last = document.querySelector('.last');
const email = document.querySelector('.email');
const address = document.querySelector('.address');
const input = document.getElementsByTagName('input');

// Get the error elements
const errorPassword = document.getElementById('errorPassword');
const errorName = document.getElementById('errorName');
const errorPhone = document.getElementById('errorPhone');
const errorMail = document.getElementById('errorMail');

// Setting the fields to be required
name1.setAttribute("required", "");
last.setAttribute("required", "");
email.setAttribute("required", "");
password.setAttribute("required", "");
address.setAttribute("required", "");
phone.setAttribute("required", "");

// Exercise 9
function validate() {
    // Clean error messages and invalid styling when starting validation
    errorName.style.display = 'none';
    errorPhone.style.display = 'none';
    errorPassword.style.display = 'none';
    errorMail.style.display = 'none';
    name1.classList.remove('is-invalid');
    last.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    password.classList.remove('is-invalid');
    address.classList.remove('is-invalid');
    phone.classList.remove('is-invalid');    

    // Define Regex variable for alphabet values only
    const regEx = /^[A-Za-z]+$/;
    // Define Regex variable for only numbers
    const numbers = /^[0-9]+$/;
    // Define Regex for password format: letters + numbers + 4 to 8 characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
    // Define Regex for email format
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validate fields entered by the user
    // Name and Last Name validation
    if (name1.value, last.value == '' || name1.value.length, last.value.length < 3 || !name1.value, !last.value.match(regEx)) {
        name1.classList.add('is-invalid');
        last.classList.add('is-invalid');
        alert('Name and Last Name are mandatory and need to be at least 3 characters long.');
        errorName.style.display = 'block';
        return false;
    }
    // Email validation
    if (email.value == '' || email.value.length < 3 || !email.value.match(mailRegex)) {
        email.classList.add('is-invalid');
        alert('Email is mandatory and needs to be at least 3 characters long.');
        errorMail.style.display = 'block';
        email.focus();
        return false;
    }
    // Password validation
    if (password.value == '' || password.value.length < 3 || !password.value.match(passwordRegex)) {
        password.classList.add('is-invalid');
        alert('Password is mandatory and needs to be at least 4 characters long.');
        errorPassword.style.display = 'block';
        password.focus();
        return false;
    }
    // Address validation    
    if (address.value == '' || address.value.length < 3) {
        address.classList.add('is-invalid');
        alert('Address is mandatory and needs to be at least 3 characters long.');
        address.focus();
        return false;
    }
    // Phone validation
    if (phone.value == '' || phone.value.length < 3 || !phone.value.match(numbers)) {
        phone.classList.add('is-invalid');
        alert('Phone is mandatory and needs to be at least 3 characters long.');
        errorPhone.style.display = 'block';
        phone.focus();
        return false;
    }
    return true;
}