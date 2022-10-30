/* Add your JavaScript to this file */

window.onload = function(){
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var email = document.getElementById("email");
    var emsg = document.getElementsByClassName("message")[0];
    var submitbtn = document.getElementsByTagName("button")[0];
    submitbtn.addEventListener("click", (e)=>{
        e.preventDefault();

    if (email.value =="" || !(email.value.match(mailFormat))){
        emsg.innerHTML = "Please enter a valid email address.";
        email.value ="";
    }else{
        emsg.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list";
    }
}
)}