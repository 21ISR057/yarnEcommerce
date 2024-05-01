<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Data</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-bold mb-4">Yarn Booking Data</h2>
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "bookings";
        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "SELECT * FROM bookings";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            echo "<table class='table-auto'>";
            echo "<thead>";
            echo "<tr>";
            echo "<th class='px-4 py-2'>Name</th>";
            echo "<th class='px-4 py-2'>Email</th>";
            echo "<th class='px-4 py-2'>Phone</th>";
            echo "<th class='px-4 py-2'>Booking Date</th>";
            echo "<th class='px-4 py-2'>Additional Notes</th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td class='border px-4 py-2'>" . $row["name"] . "</td>";
                echo "<td class='border px-4 py-2'>" . $row["email"] . "</td>";
                echo "<td class='border px-4 py-2'>" . $row["phone"] . "</td>";
                echo "<td class='border px-4 py-2'>" . $row["booking_date"] . "</td>";
                echo "<td class='border px-4 py-2'>" . $row["message"] . "</td>";
                echo "</tr>";
            }
            echo "</tbody>";
            echo "</table>";
        } else {
            echo "0 results";
        }
        $conn->close();
        ?>
    </div>
</body>

</html>