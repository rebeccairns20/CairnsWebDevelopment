<?php

$first_name = $_POST['firstname'] ;
$last_name = $_POST['lastname'] ;
$email_address = $_POST['email'] ;
$phone = $_POST['phone'] ;
$comments = $_POST['comments'] ;

$msg =
date("Y-m-d H:i:s") .
" First Name: " . $first_name .
" Last Name: " . $last_name .
" Email: " . $email_address .
" Phone Number: " . $phone .
" Comments: " . $comments .
"---------------------------";

//echo $msg;
$ret = file_put_contents('../contacts.txt', $msg, FILE_APPEND | LOCK_EX);
?>
