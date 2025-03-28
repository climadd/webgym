<?php
require 'db.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $surname = isset($_POST['surname']) ? $_POST['surname'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    if (!empty($name) && !empty($surname) && !empty($email) && !empty($message)) {
        $stmt = $pdo->prepare("INSERT INTO contact_messages (name,surname, email, message) VALUES (?, ?, ?, ?)");
        $stmt->execute([$name, $surname, $email, $message]);

        echo json_encode(['success' => true, "message" => "Message sent!"]);
    }
    else {
        echo json_encode(['success' => false, "message" => "Please fill every field!"]);
    }
}
else {
        echo json_encode(['success' => false, "message" => "Invalid request!"]);
    }

?>

