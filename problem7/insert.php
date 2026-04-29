<?php
// CONNECT DATABASE
$conn = mysqli_connect("localhost", "root", "", "student_db");

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

// INSERT DATA
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $course = $_POST['course'];

    $sql = "INSERT INTO students (name, email, phone, course)
            VALUES ('$name', '$email', '$phone', '$course')";

    if (mysqli_query($conn, $sql)) {
        echo "<h3>Data Inserted Successfully</h3>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

// DISPLAY DATA
$result = mysqli_query($conn, "SELECT * FROM students");

echo "<h2>Student Records</h2>";

echo "<table border='1' cellpadding='10'>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Course</th>
</tr>";

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
    <td>{$row['id']}</td>
    <td>{$row['name']}</td>
    <td>{$row['email']}</td>
    <td>{$row['phone']}</td>
    <td>{$row['course']}</td>
    </tr>";
}

echo "</table>";

mysqli_close($conn);
?>
