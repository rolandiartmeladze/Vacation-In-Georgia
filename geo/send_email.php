<?php
// Retrieve form data
$saxeli = $_POST['saxeli'];
$emaili = $_POST['emaili'];
$telefoni = $_POST['telefoni'];
$dro = $_POST['dro'];
$tour_name = $_POST['tour_name'];
$car_name = $_POST['car_name'];
$food_name = $_POST['food_name'];
$user_coment = $_POST['user_coment'];

// Compose the email body
$gasagzavni_monacemebi = "
saxeli: $saxeli\n 
meili: $emaili\n 
telefoni: $telefoni\n
dro: $dro\n
turi: $tour_name\n
tansporti: $car_name\n
kveba: $food_name\n
komentari: $user_coment";



                          $to = 'mail.vacationingeorgia.ge'; // Replace with the actual recipient email address
                          $headers = 'From: tours_vacationingeorgia.ge' . "\r\n" .
                                     'Reply-To: noreply@gmail.com' . "\r\n" .
                                     'X-Mailer: PHP/' . phpversion();

                                     
if (mail($to, $subject, $gasagzavni_monacemebi, $headers)) {
  http_response_code(200);
} else {
  http_response_code(500);
}
?>
