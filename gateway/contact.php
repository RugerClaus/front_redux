<?php
header('Content-Type: application/json');

$config = require __DIR__ . '/db_config.php';

$contact_name    = trim($_POST['contact_name'] ?? '');
$message_subject = trim($_POST['message_subject'] ?? '');
$contact_phone   = trim($_POST['contact_phone'] ?? '');
$message_body    = trim($_POST['message_body'] ?? '');

if (!preg_match("/^[a-zA-Z0-9\s\.\,\-']+$/", $contact_name) ||
    !in_array($message_subject, ['book', 'inquiry']) ||
    !preg_match("/^[0-9\+\-\(\)\s]+$/", $contact_phone)) {
    echo json_encode(['success' => false, 'message' => 'Invalid input.']);
    exit;
}

$message_body = htmlspecialchars($message_body, ENT_QUOTES, 'UTF-8');

try {
    $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
    $pdo = new PDO($dsn, $config['user'], $config['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("INSERT INTO contact_messages (name, subject, phone, body, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([$contact_name, $message_subject, $contact_phone, $message_body]);

    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
