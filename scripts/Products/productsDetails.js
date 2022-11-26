import {Products_dataBase} from './productsDataBase/productDataBase.js'

var productDetailsPageUrl = window.location.href

var urlParameters = (new URL(productDetailsPageUrl)).searchParams
export var productItemID = urlParameters.get("prodID")

export var productType = urlParameters.get("prodType")






var ProductitemDetailsData = function () {
    for (var i = 0 ; i < Products_dataBase.length ; i++) {
        if (productItemID == Products_dataBase[i].prod_id && productType == Products_dataBase[i].prod_type)
            return Products_dataBase[i]
    }
}()





var productDetailsImage = document.getElementById("product-details-image")
productDetailsImage.src = ProductitemDetailsData.prod_image 

var productDetailsName = document.getElementById("product-details-product-name")
productDetailsName.innerText = ProductitemDetailsData.prod_name

var productDiamnondCraft = document.getElementById("product-details-diamond-crafts")
productDiamnondCraft.innerText = "Diamond Carats : " + ProductitemDetailsData.Diamond_Carats

var productRubyWight = document.getElementById("product-details-ruby-weight")
productRubyWight.innerText = "Ruby Weight : " + ProductitemDetailsData.prod_weight

var productDetailsPrice = document.getElementById("product-details-product-price")
productDetailsPrice.innerText += "  " + "LE " +ProductitemDetailsData.prod_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


