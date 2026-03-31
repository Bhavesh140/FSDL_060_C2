<?php
include 'config.php';

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM students WHERE id=$id");
$row = $result->fetch_assoc();
?>

<h2>Update Student</h2>

<form method="POST">

Name: <input type="text" name="name" value="<?php echo $row['name']; ?>"><br><br>

Email: <input type="text" name="email" value="<?php echo $row['email']; ?>"><br><br>

Phone: <input type="text" name="phone" value="<?php echo $row['phone']; ?>"><br><br>

<button type="submit">Update</button>

</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $conn->query("UPDATE students 
                  SET name='$name', email='$email', phone='$phone' 
                  WHERE id=$id");

    header("Location: view.php");
}
?>