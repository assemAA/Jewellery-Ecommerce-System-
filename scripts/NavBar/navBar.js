var homePage = document.getElementById("home-page")
var productCategoriesPage = document.getElementById("products-catogries")



var homeLink = document.getElementById("home-link")
var aboutLink = document.getElementById("about-link")
var contactLink = document.getElementById("contact-link")
var productsLink = document.getElementById("products-link")

homePage.addEventListener("mouseenter" , function(){

    homeLink.classList.add("underline-link") ;
    productsLink.classList.remove("underline-link")
    aboutLink.classList.remove("underline-link")
    contactLink.classList.remove("underline-link")
})

homePage.addEventListener("mouseleave" , function(){
    homeLink.classList.remove("underline-link") ;
})

////////////////

productCategoriesPage.addEventListener("mouseenter" , function () {

    homeLink.classList.remove("underline-link") ;
    productsLink.classList.add("underline-link")
    aboutLink.classList.remove("underline-link")
    contactLink.classList.remove("underline-link")
})

productCategoriesPage.addEventListener("mouseleave" , function(){
    productsLink.classList.remove("underline-link") ;
})