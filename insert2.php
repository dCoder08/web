<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn){
    die("Connection Failed: " . mysqli_connect_error());
}

echo "Connection Successful <br><br>";

// SQL query to fetch data
$sql = "SELECT * FROM student";
$result = mysqli_query($conn, $sql);

// Check if data exists
if(mysqli_num_rows($result) > 0)
{
    echo "<table border='1' cellpadding='10'>";
    echo "<tr>
            <th>Name</th>
            <th>Roll Number</th>
          </tr>";

    // Fetch each row
    while($row = mysqli_fetch_assoc($result))
    {
        echo "<tr>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["rollnumber"] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
}
else
{
    echo "No records found";
}

mysqli_close($conn);
?>
