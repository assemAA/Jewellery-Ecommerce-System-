import {
  drawCategory,productItemsIndexBackArrow,
  productItemsIndexNextArrow,currentItemsIndexDom,removeProducts } from "./products.js";

var maxPriceRangeFilterSliderDom = document.getElementById("max-price-slider-range");

var maxPriceRangeFilterParagraphDom = document.getElementById("max-price-slider-value-paragraph");

maxPriceRangeFilterParagraphDom.innerText ="Max Price = " + maxPriceRangeFilterSliderDom.value;


maxPriceRangeFilterSliderDom.oninput = function () {
  maxPriceRangeFilterParagraphDom.innerText ="Max Price = " +maxPriceRangeFilterSliderDom.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
  " LE";

  removeProducts()

  drawCategory(0 , 10000 ,maxPriceRangeFilterSliderDom.value);

  productItemsIndexBackArrow.style.display = "none"
  productItemsIndexNextArrow.style.display = "none"
  currentItemsIndexDom.style.display = "none"


};


// document.getElementById("Products-catogry-options-box").addEventListener("click" , function(){


//     var productSelectedElement = document.getElementById("Products-catogry-options-box")
//     productSelectedElement = productSelectedElement.value

//     if (productSelectedElement != "none")
//     window.location.href = `/products.html?product=${productSelectedElement}`

// })