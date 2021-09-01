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
    // Clean error messages if entry is ok
    errorName.style.display = 'none';
    errorPhone.style.display = 'none';
    errorPassword.style.display = 'none';
    // Validate fields entered by the user: name, phone, password, and email
    // 1 . Check if required fields are filled in
    /*if (name1.value, email.value, address.value, last.value, password.value, phone.value == '') {
        alert('All fields must be filled out');
        console.log('hola contingut');
        return false;
    }*/
    // 2. Check all fields are longer than 3 characters
    /*if (name1.value.length, email.value.length, address.value.length, last.value.length, password.value.length, phone.value.length < 3) {
        alert('All field need to be at least 3 characters long.');
        console.log('hola 3 caracters');
        return false;
    }*/
    // 3. Name and last name contain only letters
    // Define variable to check if name and surname are letters
    const regEx = /^[A-Za-z]+$/;
    if (!name1.value, !last.value.match(regEx)) {
        errorName.style.display = 'block';
        console.log('hola nom lletres');
        name1.focus();
        return false;
    }
    // 4. Phone contains only numbers
    // Define variable to check if phone is only numbers
    const numbers = /^[0-9]+$/;
    if (!phone.value.match(numbers)) {
        errorPhone.style.display = 'block';
        console.log('hola phone numbers');
        phone.focus();
        return false;
    }
    // 5. Password contains number and letters
    // Define regex for password
    const passwordRegex = /^([a-zA-Z0-9]+)$/;
    if (!password.value.match(regEx)) {
        errorPassword.style.display = 'block';
        console.log('hola password');
        password.focus();
        return false;
    } 
    console.log('adios');
    return true;   
}