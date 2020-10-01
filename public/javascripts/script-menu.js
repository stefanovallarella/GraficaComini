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


// product #1

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


// product #2

let productCard2 = document.getElementById("card-2");
let arrowCard2 = document.getElementById("arrow-2");
let productInfo2 = document.getElementById("product-2");
let imagenOne2 = document.getElementById("image-2");

    productCard2.addEventListener("mouseover", function(){
        arrowCard2.style.opacity = 1;
        imagenOne2.style.opacity = .6;
        /* imagenOne.style.transition = .3; */
    })

    productCard2.addEventListener("click", function(){
        arrowCard2.style.opacity = 0;
        productInfo2.style.opacity = 1;
        imagenOne2.style.opacity = .1;
    })

    productCard2.addEventListener("mouseout", function(){
            productInfo2.style.opacity = 0;
            arrowCard2.style.opacity = 0;
            imagenOne2.style.opacity = 1;
        })


// product #3

let productCard3 = document.getElementById("card-3");
let arrowCard3 = document.getElementById("arrow-3");
let productInfo3 = document.getElementById("product-3");
let imagenOne3 = document.getElementById("image-3");

    productCard3.addEventListener("mouseover", function(){
        arrowCard3.style.opacity = 1;
        imagenOne3.style.opacity = .6;
        /* imagenOne.style.transition = .3; */
    })

    productCard3.addEventListener("click", function(){
        arrowCard3.style.opacity = 0;
        productInfo3.style.opacity = 1;
        imagenOne3.style.opacity = .1;
    })

    productCard3.addEventListener("mouseout", function(){
            productInfo3.style.opacity = 0;
            arrowCard3.style.opacity = 0;
            imagenOne3.style.opacity = 1;
        })


// product #4

let productCard4 = document.getElementById("card-4");
let arrowCard4 = document.getElementById("arrow-4");
let productInfo4 = document.getElementById("product-4");
let imagenOne4 = document.getElementById("image-4");

    productCard4.addEventListener("mouseover", function(){
        arrowCard4.style.opacity = 1;
        imagenOne4.style.opacity = .6;
        /* imagenOne.style.transition = .4; */
    })

    productCard4.addEventListener("click", function(){
        arrowCard4.style.opacity = 0;
        productInfo4.style.opacity = 1;
        imagenOne4.style.opacity = .1;
    })

    productCard4.addEventListener("mouseout", function(){
            productInfo4.style.opacity = 0;
            arrowCard4.style.opacity = 0;
            imagenOne4.style.opacity = 1;
        })        







        
})