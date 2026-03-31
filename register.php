<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($name == "" || $email == "" || $phone == "" || $password == "") {
        echo "Please fill all fields properly";
        exit();
    }

    $sql = "INSERT INTO students (name, email, phone, password)
            VALUES ('$name','$email','$phone','$password')";

    if ($conn->query($sql)) {
        echo "Inserted Successfully <br>";
        echo "<a href='view.php'>View Records</a>";
    } else {
        echo "Error: " . $conn->error;
    }

} else {
    echo "Access Denied. Submit form properly.";
}
?>