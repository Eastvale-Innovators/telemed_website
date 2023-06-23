<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer/src/Exception.php';
require 'PHPMailer/PHPMailer/src/PHPMailer.php';
require 'PHPMailer/PHPMailer/src/SMTP.php';


$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";


$mail->SMTPDebug  = 1;
$mail->SMTPAuth   = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port       = 587;
$mail->Host       = "smtp.gmail.com";
$mail->Username   = "vmmvirtualmedicalmissions@gmail.com";
$mail->Password   = "wnxmjxkwdgqtqubh";

$mail->IsHTML(true);
$mail->AddAddress("vmmvirtualmedicalmissions@gmail.com", $name);
$mail->SetFrom("vmmvirtualmedicalmissions@gmail.com", "VMM Admin");
$mail->AddCC($visitor_email, $name);
$mail->Subject = "New Submission From " . $visitor_email;
$content = '<h1>Message from <b>' . $name . '</b></h1><br>' . $message;

$mail->MsgHTML($content);
if(!$mail->Send()) {
    echo "Error while sending Email.";
} else {
    echo "Email sent successfully";
}

header("Location: ../index.html");
