function validateForm() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

if (!/^[A-Za-z ]+$/.test(name)) {
    alert("Invalid Name");
    return false;
}

if (!email.includes("@")) {
    alert("Invalid Email");
    return false;
}

if (!/^[0-9]{11}$/.test(phone)) {
    alert("Phone must be 11 digits");
    return false;
}

if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
}

if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
}

return true;
}
