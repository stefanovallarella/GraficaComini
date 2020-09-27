window.addEventListener("load", function(){


let menu = document.getElementById("menu");
let btn = document.getElementById("btn-menu");

btn.addEventListener("click", function(e){

    if(menu.style.top == "-100vh"){
        menu.style.top = "12vh";
    } else{   
        menu.style.top = "-100vh"
    }

});


let productCard = document.getElementById("card-1");
let arrowCard = document.getElementById("arrow-1");
let productInfo = document.getElementById("product-1");
let imagenOne = document.getElementById("image-1");

    productCard.addEventListener("mouseover", function(){
        arrowCard.style.opacity = 1;
        imagenOne.style.opacity = .6;
        /* imagenOne.style.transition = .3; */
    })

    productCard.addEventListener("click", function(){
        arrowCard.style.opacity = 0;
        productInfo.style.opacity = 1;
        imagenOne.style.opacity = .1;
    })

    productCard.addEventListener("mouseout", function(){
            productInfo.style.opacity = 0;
            arrowCard.style.opacity = 0;
            imagenOne.style.opacity = 1;
        })











})