// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var names = document.querySelector('.names');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var lastName = document.querySelector('.lastName');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail');
var errorAddress = document.getElementById('errorAddress');
var errorLastName = document.getElementById('errorLastName');

function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Solo texto
    const regTelefono = /^\d+$/gi; //Solo números
    const regContrasenya = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{4,8}$/gm; //Números y letras
    const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //Formato del email.



    if (names.value.length < 3 || !regNombre.test(names.value)) { //valida si tiene más de 3 caracteres y solo letras
        errorName.style.display = 'block'; //muestra el mensaje de error
        names.classList.add('colorError'); //añade la clase que modifica el color de border
        return false;
    } else {
        names.classList.remove('colorError'); //quita la clase que añade el color de border
        errorName.style.display = 'none'; //oculta el mensaje de error

    }
    if (!regEmail.test(email.value)) { // valida formato email
        errorEmail.style.display = 'block';
        email.classList.add('colorError');
        return false;
    } else {
        email.classList.remove('colorError');
        errorEmail.style.display = 'none';

    }
    if (address.value.length < 3) { //valida que contiene +de 3 caracteres
        errorAddress.style.display = 'block';
        address.classList.add('colorError');
        return false;

    } else {
        address.classList.remove('colorError');
        errorAddress.style.display = 'none';
    }
    if (lastName.value.length < 3 || !regNombre.test(lastName.value)) { //valida que contiene + de 3 caracteres (solo letras)
        errorLastName.style.display = 'block';
        lastName.classList.add('colorError');
        return false;
    } else {
        lastName.classList.remove('colorError');
        errorLastName.style.display = 'none';
    }
    if (!regContrasenya.test(password.value)) { // valida que contiene letras y números
        errorPassword.style.display = 'block';
        password.classList.add('colorError');
        return false;
    } else {
        password.classList.remove('colorError');
        errorPassword.style.display = 'none';
    }

    if (phone.value.length < 9 || phone.value.length > 9 || !regTelefono.test(phone.value)) { // valida que contiene 9 números 
        errorPhone.style.display = 'block';
        phone.classList.add('colorError');
        return false;
    } else {
        password.classList.remove('colorError');
        errorPassword.style.display = 'none';
    }
    // console.log('enviado');
    return true;

}