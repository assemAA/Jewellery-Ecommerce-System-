var ringsProductsLink =document.getElementById("rings-products-link")
var braceletsProductssLink = document.getElementById("Bracelets-products-link")
var necklacesProductsLink = document.getElementById("Necklaces-products-link")
var earringsProductsLink = document.getElementById("Earrings-products-link")


var linkClicked = function () {
    ringsProductsLink.href += "?product=rings"
    braceletsProductssLink.href += "?product=bracelets"
    necklacesProductsLink.href += "?product=necklaces"
    earringsProductsLink.href += "?product=earrings"
}


