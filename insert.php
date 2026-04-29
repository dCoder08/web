<?php 
$servername="localhost";
$password="";
$username="root";
$dbname="mydb";

$conn=mysqli_connect($servername,$username,$password,$dbname);



if(!$conn)
    {
        die("Connection Failed: ".mysqli_connect_error());
        // echo "Failed!!";
    }

echo "Connection Successful";

$name=$_POST["name"];
$rollnumber=$_POST["rollnumber"];

$sql="INSERT INTO student
(name,rollnumber)
VALUES
('$name','$rollnumber')";

if(mysqli_query($conn,$sql))
    {
        echo "Inserted Successfully";
    }

else{
    echo"Failed";
    
}


?>