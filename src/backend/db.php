<?php
$host = 'localhost';  // XAMPP default
$dbname = 'gym_db';  // has to match database name on .sql file
$username = 'root';  // XAMPP default (no password)
$password = '';  // XAMPP default (leave empty)

try {
    $connect = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("❌ Database connection failed: " . $e->getMessage());
}
?>

