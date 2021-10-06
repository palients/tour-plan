<?php
// Файлы phpmailer
require "phpmailer/PHPMailer.php";
require "phpmailer/SMTP.php";
require "phpmailer/Exception.php";

// Переменные, которые отправляет пользователь
$name = $_POST["name"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$email = $_POST["email"];

// Формирование самого письма
$title = "New appeal Best Tour Plan";
$body = "
<h2>New appeal</h2>
<b>Name:</b> $name<br>
<b>email:</b><br>$email<br>
<b>Phone:</b> $phone<br><br>
<b>Message:</b><br>$message

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS["status"][] = $str;};

    // Настройки вашей почты
    $mail->Host       = "smtp.yandex.ru"; // SMTP сервера вашей почты
    $mail->Username   = "c.morozov@coffeestudio.ru"; // Логин на почте
    $mail->Password   = "2021Constantin2021"; // Пароль на почте
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;
    $mail->setFrom("c.morozov@coffeestudio.ru", "Constantin Morozov"); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress("palients@yandex.ru");

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
header("Location: thankyou.html");