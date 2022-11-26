// putting Services Tiitels By JavaScript 


var servicesImagesPath = "./scripts/Services/ServicesImages/"
var servicesImages = ["servicesImage_14.webp" , "servicesImage_13.webp"]
var servicesDescription = [ "Varities of Engagement Rings, Wedding Rings, Couple Diamond Rings, Solitaire Diamond Rings." 
                            ,"jewellery to match your budget, Prices that has never seen in market." ]


var servicesImagesIndex  = 0
var servicesDescriptionIndex = 0 

var servicesContentDocumnet = document.getElementsByClassName("services") 

var servicesContentFragmentIntoServicesTag  = document.createDocumentFragment()

var createdServiceContentOdd = document.createElement("div") 
createdServiceContentOdd.classList.add("service-content")
createdServiceContentOdd.classList.add("bg-light")
createdServiceContentOdd.classList.add("text-dark")



var createdServiceContentEven =document.createElement("div")
createdServiceContentEven.classList.add("service-content")
createdServiceContentEven.classList.add("bg-light")
createdServiceContentEven.classList.add("text-dark")




for (var servicePointer = 1 ; servicePointer <= servicesImages.length  ; servicePointer++) {

    if (servicePointer %2 == 1) {
        var divServiceImageDocument = document.createElement("div")
        divServiceImageDocument.classList.add("service-image")
        
        
        var imgTagServiceImage = document.createElement("img")
        imgTagServiceImage.classList.add("service-image-tag")
        imgTagServiceImage.src = servicesImagesPath+servicesImages[servicesImagesIndex]
        imgTagServiceImage.alt = "services image"


        divServiceImageDocument.appendChild(imgTagServiceImage)

        var divServiceDescribeDocument = document.createElement("div")
        divServiceDescribeDocument.classList.add("service-describe")
        divServiceDescribeDocument.innerText = servicesDescription[servicesDescriptionIndex]

        createdServiceContentOdd.appendChild(divServiceImageDocument)
        createdServiceContentOdd.appendChild(divServiceDescribeDocument)

        servicesContentFragmentIntoServicesTag.appendChild(createdServiceContentOdd)
        servicesContentDocumnet[0].appendChild(servicesContentFragmentIntoServicesTag)

        servicesImagesIndex++ 
        servicesDescriptionIndex++
    }

    else {
        var divServiceImageDocument = document.createElement("div")
        divServiceImageDocument.classList.add("service-image")
        
        
        var imgTagServiceImage = document.createElement("img")
        imgTagServiceImage.classList.add("service-image-tag")
        imgTagServiceImage.src = servicesImagesPath+servicesImages[servicesImagesIndex]
        imgTagServiceImage.alt = "services image"


        divServiceImageDocument.appendChild(imgTagServiceImage)

        var divServiceDescribeDocument = document.createElement("div")
        divServiceDescribeDocument.classList.add("service-describe")
        divServiceDescribeDocument.innerText = servicesDescription[servicesDescriptionIndex]

        createdServiceContentEven.appendChild(divServiceDescribeDocument)
        createdServiceContentEven.appendChild(divServiceImageDocument)

        servicesContentFragmentIntoServicesTag.appendChild(createdServiceContentEven)
        servicesContentDocumnet[0].appendChild(servicesContentFragmentIntoServicesTag)

        servicesImagesIndex++ 
        servicesDescriptionIndex++

        
    }

}



//////// push mouse Enter Events 
var allServiceContentDivs = document.getElementsByClassName("service-content")
var servicesDivID = document.getElementById("services")


servicesDivID.addEventListener("mouseenter" , function() {
    for (var serviceContentDivsPointer = 0 ; serviceContentDivsPointer < allServiceContentDivs.length ; serviceContentDivsPointer++ ){

        if(serviceContentDivsPointer %2 == 0 ) //odd Event 
        {
            allServiceContentDivs[serviceContentDivsPointer].classList.add("service-animation-contenet-odd")
        }
        // event Event
        else {
            
            allServiceContentDivs[serviceContentDivsPointer].classList.add("service-animation-contenet-even")

        }
    
    
    
    
    }
})

