import {productItemID , productType } from './productsDetails.js'

var productItemQuantityTextDom = document.getElementById("quantity-input-from-user")


///// buying process 

document.getElementById("addTOBagProcess").addEventListener("click" , function () {

    var productItemQuantity =  parseInt(productItemQuantityTextDom.value)

    if (productItemQuantity <= 0 || isNaN(productItemQuantity))
        handleFailBuyingProcess()
    else
        handleSuccessBuyingProcess(productItemQuantity)
})

/// if buying process fail 


var handleFailBuyingProcess =  function () {

    var alert = document.getElementById("alert-message-quantity")
    alert.style.display = "block"
    productItemQuantityTextDom.value = 0

}

// if buying process success 

var handleSuccessBuyingProcess =  function (productItemQuantity) {

    var shoopingBagCounterValue = localStorage.getItem("BagCounter") 
    shoopingBagCounterValue++
    window.localStorage.setItem("BagCounter" , shoopingBagCounterValue)

    var clinetBag = JSON.parse(localStorage.getItem('clientBag'))
    var clientBagContent = {
        prod_id : productItemID , type : productType , quan : productItemQuantity
    }
   
    clinetBag.push(clientBagContent)
    localStorage.setItem('clientBag', JSON.stringify(clinetBag))
    
    
    history.back();
}



