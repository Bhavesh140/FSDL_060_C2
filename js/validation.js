document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter valid email.";
        isValid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits.";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }

});
