let menu = document.getElementById("menu");
let btn = document.getElementById("btn-menu");

btn.addEventListener("click", function(e){

    if(menu.style.top == "-100vh"){
        menu.style.top = "12vh";
    } else{   
        menu.style.top = "-100vh"
    }

});