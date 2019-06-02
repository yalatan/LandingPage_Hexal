<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$textarea = $_POST['textarea'];

$file = fopen("log.txt","at");
fwrite($file,"\n $name:$email:$subject:$textarea \n");
fclose($file);
?>
