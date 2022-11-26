

var shoopingCartCounter = document.getElementById("counter-shooping-bag-in-tittle-bar")
shoopingCartCounter.innerText = window.localStorage.getItem("BagCounter")


var shoopingIconDom = document.getElementById("shooping-icon-check-out") 




shoopingIconDom.addEventListener("click" , function(){
    
    var clinetBagCheck = JSON.parse(localStorage.getItem('clientBag'))
    if (clinetBagCheck.length > 1)
        window.location.href = "./checkOut.html"
 
})





var displayOrHiddeShoppingCounterIcon = function () {

    var shoopingCounterDom = document.getElementById("counter-shooping-bag-in-tittle-bar")

    if(shoopingCounterDom.innerText == 0 ) 
        shoopingCounterDom.style.visibility = "hidden"
    else
        shoopingIconDom.style.visibility = "visable"

}

displayOrHiddeShoppingCounterIcon()




