<?php

$HOST="localhost";
$USER="s01afdd4_temporal8";
$PASS="#medac2021#";
$DB="s01afdd4_mobas";

$conexion = new mysqli($HOST,$USER,$PASS,$DB);

if($conexion->connect_errno){
    $salida = "Fallo: ".$conexion->connect_error;
    echo json_encode($salida);
    exit();
}
//Cambio esto dependiendo de que datos me pidan en el formulario
$nombre = $_POST['nombre'];
$img = $_POST['imagen'];
$desc = $_POST['desc'];



$consulta = "INSERT INTO juegos (nombre, imagen, descripcion) VALUES ('$nombre', '$img', '$desc')";//Cambio esto dependiendo

$resultado=$conexion->query($consulta);

if(!$resultado){
    $salida = "ERROR insertando valores:";
    
}
else{
    $salida = "Valores insertados correctamente: $nombre , $dni";//Cambio esto dependiendo
}

echo json_encode($salida);

?>