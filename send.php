<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  						// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mail@mail.mail'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mail@mail.mail'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mail@mail.mail'); // от кого будет уходить письмо?
$mail->addAddress('mail@mail.mail');     // Кому будет уходить письмо 

$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый клиент';
$mail->Body    = 'Клиент прошел тест и ждет обратной связи.';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>




