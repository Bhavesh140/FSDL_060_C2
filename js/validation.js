document.getElementById("registrationForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let valid = true;

// Name
if(name === ""){
document.getElementById("nameError").innerHTML = "Name required";
valid = false;
}else{
document.getElementById("nameError").innerHTML = "";
}

// Email
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!email.match(emailPattern)){
document.getElementById("emailError").innerHTML = "Invalid Email";
valid = false;
}else{
document.getElementById("emailError").innerHTML = "";
}

// Phone
if(!phone.match(/^[0-9]{10}$/)){
document.getElementById("phoneError").innerHTML = "Phone must be 10 digits";
valid = false;
}else{
document.getElementById("phoneError").innerHTML = "";
}

// Password
let passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
if(!password.match(passPattern)){
document.getElementById("passwordError").innerHTML = 
"Min 7 chars, 1 capital, 1 digit, 1 special (&,$,#,@)";
valid = false;
}else{
document.getElementById("passwordError").innerHTML = "";
}

// Confirm Password
if(password !== confirmPassword){
document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
valid = false;
}else{
document.getElementById("confirmPasswordError").innerHTML = "";
}

if(valid){
alert("Registration Successful 🎉");
}
});

// jQuery example
$(document).ready(function(){
$("footer").css("background","#111");
});
