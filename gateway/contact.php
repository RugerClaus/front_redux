<?php
header('Content-Type: application/json');
session_start();

$config = require __DIR__ . '/db.php';

$contact_name    = trim($_POST['contact_name'] ?? '');
$message_subject = trim($_POST['message_subject'] ?? '');
$contact_phone   = trim($_POST['contact_phone'] ?? '');
$message_body    = trim($_POST['message_body'] ?? '');
$captcha_input   = trim($_POST['captcha'] ?? '');

if (!preg_match("/^[a-zA-Z0-9\s\.\,\-']+$/", $contact_name) ||
    !in_array($message_subject, ['book', 'inquiry']) ||
    !preg_match("/^[0-9\+\-\(\)\s]+$/", $contact_phone)) {
    echo json_encode(['success' => false, 'message' => 'Invalid input.']);
    exit;
}

if (!isset($_SESSION['captcha_a'], $_SESSION['captcha_b']) || 
    intval($captcha_input) !== ($_SESSION['captcha_a'] + $_SESSION['captcha_b'])) {
    echo json_encode(['success' => false, 'message' => 'captcha_error']);
    exit;
}

$message_body = htmlspecialchars($message_body, ENT_QUOTES, 'UTF-8');

try {
    $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
    $pdo = new PDO($dsn, $config['user'], $config['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("INSERT INTO contact_messages (name, subject, phone, body, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([$contact_name, $message_subject, $contact_phone, $message_body]);

    unset($_SESSION['captcha_a'], $_SESSION['captcha_b']);

    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
