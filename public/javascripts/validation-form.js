// Capturo inputs

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let messageInput = document.getElementById("message");

let form = document.getElementById("form");

// Capturo span errores

let nameError = document.getElementById("name_error");
let emailError = document.getElementById("email_error");
let phoneError = document.getElementById("phone_error");
let messageError = document.getElementById("message_error"); 

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
function allnumeric(inputtxt){
      let numbers = /^[0-9]+$/;
      let phone = inputtxt.split(' ').join('');
      if(phone.match(numbers)){
      return true;
      }else{
      return false;
      }
}  

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
        nameError.innerText = "El nombre no puede estar vacío";
        this.classList.add("error-input");
    }else if(this.value && this.value.length < 5){
        nameError.innerText = "El campo nombre debe tener más de 5 caracteres";
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

// Phone
phoneInput.addEventListener("blur", function(){
    if(!this.value){
        phoneError.innerText = "El teléfono no puede estar vacío";
        this.classList.add("error-input");
    }
    if(this.value){
        if(allnumeric(this.value)){
            phoneError.innerText = "";
            this.classList.remove("error-input");
            errors.phone = false;
        }else{
            phoneError.innerText = "Debes ingresar un teléfono válido";
            this.classList.add("error-input");
        }
    }
})

// Mensaje
messageInput.addEventListener("blur", function(){
    if(!this.value){
        messageError.innerText = "El mensaje no puede estar vacío";
        this.classList.add("error-input");
        console.log("entre aca");
    }else if(this.value && this.value.length < 30){
        messageError.innerText = "El mensaje debe tener más de 30 caracteres";
        this.classList.add("error-input");
    }else{
        messageError.innerText = "";
        this.classList.remove("error-input");
        errors.message = false;
    }
})

// Form
form.addEventListener("submit", function(e){
    if(errors.name || errors.email || phone.email || message.email){
        e.preventDefault();
    }
})