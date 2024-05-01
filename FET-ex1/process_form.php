<?php
// Handle Form Data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$message = $_POST['message'];

// Connect to Database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bookings"; // Change to your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert Data into Database
$sql = "INSERT INTO bookings (name, email, phone, booking_date, message) VALUES ('$name', '$email', '$phone', '$date', '$message')";

if ($conn->query($sql) === TRUE) {
    // Redirect to a confirmation page or another page
    header("Location: display_data.php");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();