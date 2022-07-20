<?php

$pass = "";
$user = "root";
$bd = "ltasks";

try {
    return new PDO('mysql:host=localhost;dbname=' . $bd, $user, $pass);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}