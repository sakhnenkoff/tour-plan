<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if ($email){
$title = "New subscription Best Tour Plan";
$body = "
<h2>New subscription</h2>
<b>e-mail:</b> $email<br><br>
";
}
else{
$title = "New user message Best Tour Plan";
$body = "
<h2>New user message</h2>
<b>Name:</b> $name<br>
<b>mobile:</b> $phone<br><br>
<b>e-mail:</b> $email<br><br>
<b>message:</b><br>$message
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.sakhnenkoff.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'matthew.sakhnenko@sakhnenkoff.ru'; // Логин на почте
    $mail->Password   = 'mailpassmatthew'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAutoTLS = false;
    $mail->SMTPSecure = false;
    $mail->Port       = 25;
    $mail->setFrom('matthew.sakhnenko@sakhnenkoff.ru', 'Матвей Сахненко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('matvey.sakhnenko@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');