var sliderImagePath = "./scripts/Slider/SliderImages/";
var sliderImages = ["slider_diamond_02.jpg" 
          ,"slider_diamond_09.jpg" , "slider_diamond_06.webp" , "slider_diamond_07.webp" , "slider_diamond_10.webp",
          "slider_diamond_11.webp" , "slider_diamond_03.jpg" , "slider_diamond_04.jpg"]
var sliderImagesIndex = 0
var sliderImg = document.getElementById("slider-image") ;
var sliderArrowBack = document.getElementById("slider-arrow-back")
var sliderArrowNext = document.getElementById("slider-arrow-next")


//// slider SHow Interval 
sliderImagesInterval = setInterval(function(){

    

    if (sliderImagesIndex < sliderImages.length - 1) {
        sliderImg.src = sliderImagePath+sliderImages[++sliderImagesIndex]
    }
    else
    {
        sliderImagesIndex = 0 ;
        sliderImg.src= sliderImagePath+sliderImages[sliderImagesIndex]
    }

}, 5000)

////////////////////////

//// get Next Slider 

sliderArrowNext.addEventListener("click" , function() {


    if (sliderImagesIndex < sliderImages.length - 1) {
        sliderImg.src = sliderImagePath+sliderImages[++sliderImagesIndex]
     }
     else
     {
        sliderImagesIndex = 0 ;
        sliderImg.src= sliderImagePath+sliderImages[sliderImagesIndex]
     }
 
})

///// get back slider 



sliderArrowBack.addEventListener("click" , function() {


    if (sliderImagesIndex > 0 ) {
        sliderImg.src = sliderImagePath+sliderImages[--sliderImagesIndex]
    }
    else {
        sliderImagesIndex = sliderImages.length - 1
        sliderImg.src= sliderImagePath+sliderImages[sliderImagesIndex]
    }
 
})