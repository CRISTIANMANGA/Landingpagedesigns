<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'tudirecciondecorreo@example.com'; 
    $subject = 'Mensaje de tu sitio web';
    $body = "Nombre: $name\nCorreo electrónico: $email\nMensaje:\n$message";

    if (mail($to, $subject, $body)) {
        echo 'Mensaje enviado con éxito. ¡Gracias por contactarnos!';
    } else {
        echo 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
    }
}
?>
