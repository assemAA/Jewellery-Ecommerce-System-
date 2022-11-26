

function btnIncr (r) {
    var i = r.parentNode.parentNode.rowIndex;
    var quantity = parseInt(document.getElementsByName("quantity")[i-1].innerText)
    ++quantity

    var itemPrice = parseInt(document.getElementsByName("itemPrice")[i-1].innerText)

    
    document.getElementsByName("quantity")[i-1].innerText = quantity
    document.getElementsByName("totalPrice")[i-1].innerText =(quantity * itemPrice ).toString().
    replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " LE"

    sumPricefromEvent ()
}


function btnDecr (r) {

    var i = r.parentNode.parentNode.rowIndex;
    var quantity = parseInt(document.getElementsByName("quantity")[i-1].innerText)

    --quantity

    if (!quantity == 0 ) {
        var itemPrice = parseInt(document.getElementsByName("itemPrice")[i-1].innerText)

        
        document.getElementsByName("quantity")[i-1].innerText = quantity
        document.getElementsByName("totalPrice")[i-1].innerText =(quantity * itemPrice ).toString().
        replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " LE"

    }
    else {
        deleteRow(r)
    }
    
    sumPricefromEvent ()
}

function deleteRow (r){

    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("shooping-cart-items").deleteRow(i);

}


function sumPricefromEvent () {
    var itemsprices = document.getElementsByName("itemPrice")
    var itemsQuantites = document.getElementsByName("quantity")
    var totalSum = 0 


    for (var i = 0 ; i < itemsprices.length ; i++) {
        var item_price = parseInt(itemsprices[i].innerText)
        var item_quan = parseInt(itemsQuantites[i].innerText)
        totalSum = totalSum + (item_price * item_quan )
    }

    document.getElementById("sum-price").innerText = totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " LE"
}


var chickout = function () {
    localStorage.clear()
    window.location.href = "/index.html"
}