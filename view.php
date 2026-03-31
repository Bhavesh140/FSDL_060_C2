<?php
include 'config.php';

$result = $conn->query("SELECT * FROM students");

echo "<h2>Student Records</h2>";
echo "<table border='1'>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Action</th>
</tr>";

while($row = $result->fetch_assoc()) {
    echo "<tr>
    <td>{$row['id']}</td>
    <td>{$row['name']}</td>
    <td>{$row['email']}</td>
    <td>{$row['phone']}</td>
   <td>
<a href='delete.php?id={$row['id']}'>Delete</a> |
<a href='update.php?id={$row['id']}'>Update</a>
</td>
    </tr>";
}

echo "</table>";
?>