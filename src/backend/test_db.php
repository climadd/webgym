<?php
require 'db.php';  // Connects to the database
global $connect;

try {
    $stmt = $connect->query("SELECT 1");  // Simple test query
    echo "✅ Database connection is working!";
} catch (PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}
?>

