window.addEventListener("load", function(){

// Burger y cross - Menu mobile

let burger = document.getElementById("burger");
let cross = document.getElementById("cross");


let menu = document.getElementById("menu");
let btn = document.getElementById("btn-menu");

// Menu mobile

btn.addEventListener("click", function(e){

    if(menu.style.top == "-100vh"){
        burger.style.display = "none";
        cross.style.display = "inline-block";
        menu.style.top = "12vh";
    } else{   
        menu.style.top = "-100vh"
        cross.style.display = "none";
        burger.style.display = "inline-block";
    }

});

// Items menu mobile (class="item-menu-mobile")

let itemsMenuMobile = document.getElementsByClassName("item-menu-mobile");


Array.prototype.forEach.call(itemsMenuMobile, (item)=>{

    item.addEventListener("click", function(){
        menu.style.top = "-100vh";
        menu.style.transitionDuration = "1.2s";
        cross.style.display = "none";
        burger.style.display = "inline-block";
    });

})

// product #1

let productCard = document.getElementById("card-1");
let productInfo = document.getElementById("product-1");
let imagenOne = document.getElementById("image-1");
let arrowIcon = document.getElementById("arrow-icon-1");
let buttonViewMore = document.getElementById("view-more-button-1");


    productCard.addEventListener("click", function(){

        imagenOne.classList.toggle("active-img");
        productInfo.classList.toggle("active-text"); 
        arrowIcon.classList.add("active-icon");

        if(buttonViewMore.innerText == "MÁS INFO"){
            buttonViewMore.innerText = "CERRAR";
        }else{
            buttonViewMore.innerText = "MÁS INFO";
        }

    })

    productCard.addEventListener("mouseout", function(){
        imagenOne.classList.remove("active-img");
        productInfo.classList.remove("active-text");
        arrowIcon.classList.remove("active-icon");
        })


// product #2

let productCard2 = document.getElementById("card-2");
let productInfo2 = document.getElementById("product-2");
let arrowIcon2 = document.getElementById("arrow-icon-2");
let imagenTwo = document.getElementById("image-2");
let buttonViewMore2 = document.getElementById("view-more-button-2");


    productCard2.addEventListener("click", function(){
        imagenTwo.classList.toggle("active-img");
        productInfo2.classList.toggle("active-text"); 
        arrowIcon2.classList.add("active-icon");

        if(buttonViewMore2.innerText == "MÁS INFO"){
            buttonViewMore2.innerText = "CERRAR";
        }else{
            buttonViewMore2.innerText = "MÁS INFO";
        }
    })

    productCard2.addEventListener("mouseout", function(){
            imagenTwo.classList.remove("active-img");
            productInfo2.classList.remove("active-text");
            arrowIcon2.classList.remove("active-icon");
        })


// product #3


let productCard3 = document.getElementById("card-3");
let productInfo3 = document.getElementById("product-3");
let arrowIcon3 = document.getElementById("arrow-icon-3");
let imagenThree = document.getElementById("image-3");
let buttonViewMore3 = document.getElementById("view-more-button-3");


    productCard3.addEventListener("click", function(){
        imagenThree.classList.toggle("active-img");
        productInfo3.classList.toggle("active-text"); 
        arrowIcon3.classList.add("active-icon");

        if(buttonViewMore3.innerText == "MÁS INFO"){
            buttonViewMore3.innerText = "CERRAR";
        }else{
            buttonViewMore3.innerText = "MÁS INFO";
        }
    })

    productCard3.addEventListener("mouseout", function(){
            imagenThree.classList.remove("active-img");
            productInfo3.classList.remove("active-text");
            arrowIcon3.classList.remove("active-icon");
        })


// product #4

let productCard4 = document.getElementById("card-4");
let productInfo4 = document.getElementById("product-4");
let arrowIcon4 = document.getElementById("arrow-icon-4");
let imagenFour = document.getElementById("image-4");
let buttonViewMore4 = document.getElementById("view-more-button-4");


    productCard4.addEventListener("click", function(){
        imagenFour.classList.toggle("active-img");
        productInfo4.classList.toggle("active-text"); 
        arrowIcon4.classList.add("active-icon");

        if(buttonViewMore4.innerText == "MÁS INFO"){
            buttonViewMore4.innerText = "CERRAR";
        }else{
            buttonViewMore4.innerText = "MÁS INFO";
        }
    })

    productCard4.addEventListener("mouseout", function(){
            imagenFour.classList.remove("active-img");
            productInfo4.classList.remove("active-text");
            arrowIcon4.classList.remove("active-icon");
        })











/* let productCard4 = document.getElementById("card-4");
let arrowCard4 = document.getElementById("arrow-4");
let productInfo4 = document.getElementById("product-4");
let imagenOne4 = document.getElementById("image-4");

    productCard4.addEventListener("mouseover", function(){
        arrowCard4.style.opacity = 1;
        imagenOne4.style.opacity = .6;
        // imagenOne.style.transition = .4;
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



 */




        
})