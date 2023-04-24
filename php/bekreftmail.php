<?php
// Include the PHPMailer library
require_once 'phpmailer/PHPMailerAutoload.php';

// Create a new PHPMailer instance
$mail = new PHPMailer;

// Set up the mail parameters
$mail->isSMTP(); // Use SMTP
$mail->Host = 'smtp.gmail.com'; // SMTP server
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'thomasjen286@gmail.com'; // SMTP username
$mail->Password = 'Shoterman28'; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption
$mail->Port = 587; // TCP port to connect to

// Set the email parameters
$mail->setFrom('thomasjen286@gmail.com', 'Your Name');
$mail->addAddress($_POST['email'], $_POST['name']); // Add recipient email address

// Set the email content
$mail->isHTML(true); // Set email format to HTML
$mail->Subject = 'Registration Confirmation'; // Email subject
$mail->Body    = 'Dear ' . $_POST['name'] . ',<br><br>Thank you for registering for our course. We look forward to seeing you!<br><br>Best regards,<br>Your Name'; // Email body

// Send the email
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}
?>