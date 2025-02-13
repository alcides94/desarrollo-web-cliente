<?php

$HOST = "localhost";
$USER = "s01afdd4_temporal8";
$PASS = "#medac2021#";
$DB = "s01afdd4_mobas";

$conexion = new mysqli($HOST, $USER, $PASS, $DB);

if ($conexion->connect_errno) {
    //no necesita salida
    echo json_encode("Fallo de conexión: " . $conexion->connect_error);
    exit();
}

// Recibir datos del formulario
$id = $_POST['id'];
$nombre = $_POST['nombre'];
$img = $_POST['imagen'];
$desc = $_POST['desc'];

// Actualizar los datos en la base de datos
$consulta = "UPDATE juegos SET nombre='$nombre', imagen='$img', descripcion='$desc' WHERE id='$id'";//devo e modificar por la id

$resultado = $conexion->query($consulta);

if (!$resultado) {
    $salida = "ERROR al actualizar valores.";
} else {
    $salida = "Valores actualizados correctamente: $nombre";
}

echo json_encode($salida);

?>
