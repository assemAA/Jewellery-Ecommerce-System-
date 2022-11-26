import {Products_dataBase} from '../Products/productsDataBase/productDataBase.js'

console.log(Products_dataBase) 


var shoopingCartTableBodyDom = document.getElementById("shooping-cart-body-table")

var shoopingCartItems =JSON.parse(localStorage.getItem('clientBag'))





function drawCheckOutTable () {

    for (var item = 0 ; item < shoopingCartItems.length ; item++) {

        for (var e = 0 ; e < Products_dataBase.length ; e++){
    
            if ( parseInt(shoopingCartItems[item].prod_id) == Products_dataBase[e].prod_id
                &&  shoopingCartItems[item].type == Products_dataBase[e].prod_type) {
    
                var newRecord = document.createElement("tr")
                newRecord.innerHTML = `<td> <img src="${Products_dataBase[e].prod_image}" alt="item photo" 
                                                        class="item-photo"/></td> 
                                <td class="name-column"> ${Products_dataBase[e].prod_name} </td>
                                <td name="itemPrice"> ${Products_dataBase[e].prod_price} </td>
                                <td name="quantity"> ${shoopingCartItems[item].quan} </td>
                                <td name="totalPrice"> ${(Products_dataBase[e].prod_price * shoopingCartItems[item].quan).toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} LE </td> 
                                <td> <button class="btn btn-success" onclick="btnIncr(this)" > + </button></td>
                                <td> <button class="btn btn-warning" onclick = "btnDecr(this)"> - </button></td>`
    
                shoopingCartTableBodyDom.appendChild(newRecord)
            }
        }
    
    }
}


function sumPrice () {
    var itemsprices = document.getElementsByName("itemPrice")
    var itemsQuantites = document.getElementsByName("quantity")
    var totalSum = 0 

    if(itemsprices) {
        for (var i = 0 ; i < itemsprices.length ; i++) {
            var item_price = parseInt(itemsprices[i].innerText)
            var item_quan = parseInt(itemsQuantites[i].innerText)
            totalSum = totalSum + (item_price * item_quan )
        }
    
        document.getElementById("sum-price").innerText = totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " LE"
    }
    else {
        document.getElementById("sum-price").innerText = 0 + " LE"
    }
}


drawCheckOutTable()
sumPrice()


