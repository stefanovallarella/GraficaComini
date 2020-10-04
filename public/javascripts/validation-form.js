// Capturo inputs

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let messageInput = document.getElementById("message");

// Capturo span errores

let nameError = document.getElementById("name_error");
let emailError = document.getElementById("email_error");
/*let phoneError = document.getElementById("phone_error");
let messageError = document.getElementById("message_error"); */

// Validacion Email
function ValidateEmail(inputText){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

// Validación Phone



// Se presumen errores
let errors = {
    name:true,
    email: true,
    phone: true,
    message: true
}

// Nombre
nameInput.addEventListener("blur", function(){
    if(!this.value){
        nameError.innerText = "El nombre no puede estar vacío"
        this.classList.add("error-input");
    }
    if(this.value && this.value.length < 5){
        nameError.innerText = "El campo nombre debe tener más de 5 caracteres"
        this.classList.add("error-input");
    }else{
        nameError.innerText = "";
        this.classList.remove("error-input");
        errors.name = false;
    }
})

// Email
emailInput.addEventListener("blur", function(){
    if(!this.value){
        emailError.innerText = "El email no puede estar vacío";
        this.classList.add("error-input");
    }
    if(this.value){
        if(ValidateEmail(this.value)){
            emailError.innerText = "";
            this.classList.remove("error-input");
            errors.email = false;
        }else{
            emailError.innerText = "Debes ingresar un email válido";
            this.classList.add("error-input");
        }
    }


})