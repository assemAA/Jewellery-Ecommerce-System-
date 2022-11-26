import { Rings_Products , Necklaces_Products , Bracelets_Products ,Earrings_Products
      , Products_dataBase  } from "./productsDataBase/productDataBase.js";

var productsImageURL = window.location.href;

var urlParameters = new URL(productsImageURL).searchParams;
var productsCatogry = urlParameters.get("product");

export var productItemsDiv = document.getElementById("products-items");



var ProductsList  ;


/////// function we need  to draw products on page 

export var drawProductsItemsOnPage =  function (ProductItemsList , minIndex, maxIndex  , maxPrice ) {
  minIndex = minIndex || 0;
  maxIndex = maxIndex || 12;
  maxPrice = maxPrice || 10000000 ;
  

  
    for ( var productItemPointer = minIndex; productItemPointer < ProductItemsList.length && productItemPointer < maxIndex
      && ProductItemsList[productItemPointer].prod_price  < maxPrice ;  productItemPointer++) {

      var productItemCointainerLinkTag = document.createElement("a");
      var ProductItemContainnerDiv = document.createElement("div");
      var productItemImageTag = document.createElement("img");
      var productItemNameParagrahTag = document.createElement("p");
      var productItemPriceParagrahtag = document.createElement("p");

      var productItemImage = ProductItemsList[productItemPointer].prod_image;
      var prouctItemName = ProductItemsList[productItemPointer].prod_name;
      var productItemPrice = ProductItemsList[productItemPointer].prod_price;

      productItemCointainerLinkTag.href ="productItemDetails.html?prodID=" +ProductItemsList[productItemPointer].prod_id
                                            +"&prodType=" + ProductItemsList[productItemPointer].prod_type ;
      productItemCointainerLinkTag.id = `product_${productItemPointer}`;
      productItemCointainerLinkTag.classList.add("product-Item-Cointainer-LinkTag");
      productItemCointainerLinkTag.classList.add("shadow-lg")

      productItemImageTag.src = productItemImage;
      productItemImageTag.alt = "diamond Item";
      productItemImageTag.classList.add("product-Item-Image-Tag");
      
      

      productItemNameParagrahTag.innerText = prouctItemName;
      productItemNameParagrahTag.classList.add("product-Item-Name-ParagrahTag");

      productItemPriceParagrahtag.textContent ="LE " +
      productItemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      productItemPriceParagrahtag.classList.add("productItemPriceParagrahtag");

      ProductItemContainnerDiv.appendChild(productItemImageTag);
      ProductItemContainnerDiv.appendChild(productItemNameParagrahTag);
      ProductItemContainnerDiv.appendChild(productItemPriceParagrahtag);
      productItemCointainerLinkTag.appendChild(ProductItemContainnerDiv);
      productItemsDiv.appendChild(productItemCointainerLinkTag);
    }
  
}











/// function to send cateogry list for products 

export var drawCategory = function(min_idx , max_idx , max_price) {

    if (productsCatogry == "rings") { 
      ProductsList = Rings_Products 
      drawProductsItemsOnPage(ProductsList , min_idx , max_idx , max_price)
    }
    if (productsCatogry == "necklaces") { 
      ProductsList = Necklaces_Products
      drawProductsItemsOnPage(ProductsList , min_idx , max_idx , max_price)
    }

    if (productsCatogry == "bracelets") { 
      ProductsList = Bracelets_Products
      drawProductsItemsOnPage(ProductsList , min_idx , max_idx , max_price)
    }
    
    if (productsCatogry == "earrings") { 
      ProductsList = Earrings_Products
      drawProductsItemsOnPage(ProductsList , min_idx , max_idx , max_price)
    }
    
    if (productsCatogry == "all") { 
      ProductsList = Products_dataBase
      drawProductsItemsOnPage(ProductsList , min_idx , max_idx , max_price)
    }


   
    
    
}



drawCategory()

//////////////////


export var productItemsIndexBackArrow = document.getElementById("slider-arrow-back-products-items-index");
export var productItemsIndexNextArrow = document.getElementById("slider-arrow-next-products-item-index");
export var currentItemsIndexDom = document.getElementById("products-item-index-page-products-items-index");


//// page indexer go next 


productItemsIndexNextArrow.addEventListener("click", function () {
  var currentItemsIndexValue = parseInt(currentItemsIndexDom.innerText);
  var minItemsIndex = currentItemsIndexValue * 12;
  ++currentItemsIndexValue;
  var maxitemsIndex = currentItemsIndexValue * 12;
  currentItemsIndexDom.innerText = currentItemsIndexValue;

  removeProducts()
    
  if (minItemsIndex >= ProductsList.length) {
    minItemsIndex = 0;
    maxitemsIndex = 12;
    currentItemsIndexValue = 1;
    currentItemsIndexDom.innerText = currentItemsIndexValue;
  }

  drawCategory(minItemsIndex, maxitemsIndex);
});

//// when rind indexer take back 

productItemsIndexBackArrow.addEventListener("click", function () {
  var currentItemsIndexValue = parseInt(currentItemsIndexDom.innerText);
  var maxitemsIndex = (currentItemsIndexValue - 1) * 12; //maxitemsIndex
  --currentItemsIndexValue;
  var minItemsIndex = (currentItemsIndexValue - 1) * 12; // minItemsIndex
  currentItemsIndexDom.innerText = currentItemsIndexValue;

 

  removeProducts()

  if (minItemsIndex <= 0) {
    minItemsIndex = 0;
    maxitemsIndex = 12;
    currentItemsIndexValue = 1;
    currentItemsIndexDom.innerText = currentItemsIndexValue;
  }

  drawCategory(minItemsIndex, maxitemsIndex);
});

//// remove all products from pages 

export var removeProducts = function () {
    // // remove all child of items Div
    while (productItemsDiv.lastChild) {
        productItemsDiv.lastChild.remove();
    }
    // // remove all child of items Div
} 

