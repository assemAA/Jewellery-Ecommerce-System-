//// form validation 


var contactInputForm =  document.getElementById("contact-form-form-tag")


var errMessageuserName = document.getElementById("err-message-input-user-name")
var errmessageuserEmail = document.getElementById("err-message-input-user-email")
var errPassworduser = document.getElementById("err-message-input-user-password")
var errCommentUser = document.getElementById("err-message-input-comment")



contactInputForm.addEventListener("submit" , function(e) {

    e.preventDefault() 
    var userNameValidation = validateUserName()
    var emailUserValidation = validateUserEmail()
    var passwordUserValidation = validateUserPassword ()
    var commentsUserValidation = validateUserComment()

    if (userNameValidation && emailUserValidation && passwordUserValidation && commentsUserValidation) 
        window.location.href = "/index.html"
})



/// validate user name 

var validateUserName = function () {
    
    var contactUserNameDom = document.getElementById("user-name-conatct")
    var userName = contactUserNameDom.value 
    
   

    if (userName.length < 3 ) {
        errMessageuserName.style.display = "block"
        return false 
    }



    userName = userName.split(" ")
    userName = userName.join("")
    userName = userName.toLowerCase()

    

    for (var charIdx = 0 ; charIdx < userName.length ; charIdx++ ) 
        if (!userName[charIdx].match('[a-z]')) {
            errMessageuserName.style.display = "block"
            return false
        }

    
        errMessageuserName.style.display = "none"
    return true

}



/// validate user Email 


var validateUserEmail = function () {

    var contactUserEmailDom = document.getElementById("user-email-contact")
    var usermail = contactUserEmailDom.value 

    
    if (usermail.length == 0 ) {
        errmessageuserEmail.style.display="block"
        return false
    }

    var  emaiRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (usermail.match(emaiRegex)) {
        errmessageuserEmail.style.display = "none"
        return true
    }
    else {
        errmessageuserEmail.style.display ="block"
        return false
    }

}


var validateUserPassword = function () {

    var contactUserPasswordDom = document.getElementById("user-password-contact")
    var userPassword =  contactUserPasswordDom.value 

    if (userPassword.length > 8) {
        errPassworduser.style.display ="none"
        return true
    }
    else {
        errPassworduser.style.display = "block"
        return false 
    }

}



var validateUserComment =  function () {

    var usercommentDom = document.getElementById("user-input-comment-contact")
    var userComment = usercommentDom.value

    if (userComment.length < 6 ) {
        errCommentUser.style.display = "block"
        return false
    }
    else {
        errCommentUser.style.display = "none"
        return true
    }
}