/* Add your JavaScript to this file */

window.onload = function(){
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var email = document.getElementById("email");
    var emailmsg = document.getElementsByClassName("message")[0];
    var submit = document.getElementsByTagName("button")[0];
    submit.addEventListener("click", (e)=>{
        e.preventDefault();

    if (email.value =="" || !(email.value.match(emailFormat))){
        emailmsg.innerHTML = "Please enter a valid email address.";
        email.value ="";
    }else{
        emailmsg.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list";
    }
}
)}