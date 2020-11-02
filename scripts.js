/* Add your JavaScript to this file */
window.onload = function(){
const submitBtn = document.getElementsByTagName("button")[0];
var form = document.getElementsByTagName("form")
var mail = document.getElementById("email");
var msg = document.getElementsByClassName("message")
const validate = (e) => {
     e.preventDefault();
  if (mail.value === ""||mail.value==null) {
    
    for (var i = 0; i < msg.length; i++) {
        msg[i].innerHTML = "Please enter a valid email address";
    }
    return false;
    }else{
        for (var x = 0; x < msg.length; x++) {
            msg[x].innerHTML = ("Thank you! Your email address "+ mail.value +" has been added to our mailing list!");
            
            }
            return false;  
    }
  
  
 
}
submitBtn.addEventListener("click", validate);

}





