<?php
require_once 'db.php';
global $connect;

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['firstname'] ?? ''));
    $surname = htmlspecialchars(trim($_POST['lastname'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $message = htmlspecialchars(trim(['subject'] ?? ''));

    try {
        $stmt = $connect->prepare("
            INSERT INTO contact_messages (name, surname, email, message)
            VALUES (:name, :surname, :email, :message)
        ");
        $stmt->execute([
            ':name' => $name,
            ':surname' => $surname,
            ':email' => $email,
            ':message' => $message
        ]);
        echo json_encode(['success' => true, 'message' => 'Message sent!']);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }

} else {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
}

?>

