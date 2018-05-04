<?php

function conectar()
{
    /* Conectar a una base de datos de MySQL invocando al controlador */
    $dsn = 'mysql:dbname=docencia;host=localhost';
    $usuario = 'root';
    $contraseña = '';

    try {
        $bd = new PDO($dsn, $usuario, $contraseña);
        return $bd;
    } catch (PDOException $e) {
        echo 'Falló la conexión: ' . $e->getMessage();
    }
}

function desconectar($bd)
{
    $bd->close();
}

function getUser($user)
{
    $bd = conectar();
    $query = "SELECT * FROM usuario where nombre='$user'";
    $result = $bd->query($query);

    return $result->fetchAll(PDO::FETCH_ASSOC);
}

function insertUser($datos)
{
    $bd = conectar();
    $query = 'INSERT INTO usuario (nombre, password) VALUES (:usuario,:password)';
    $resultado = $bd->prepare($query);
    $resultado->bindParam(':usuario', $datos['Nombre']);
    $resultado->bindParam(':password', $datos['password']);

    return $resultado->execute();
}

function getEntradas()
{
    $bd = conectar();

    $query = "SELECT * FROM entradas";
    $result = $bd->query($query);

    return $result->fetchAll(PDO::FETCH_ASSOC);
}

// function insertEntrada($datos)
// {
//     $bd = conectar();
//
//     $query = 'INSERT INTO reservas (idUser, fecha_entrada, fecha_salida, cant_personas,telefono) VALUES(:iduser,:entrada,:salida,:cantidad,:telefono)';
//     $resultado = $bd->prepare($query);
//     $resultado->bindParam(':iduser', $datos['iduser']);
//     $resultado->bindParam(':entrada', $datos['entrada']);
//     $resultado->bindParam(':salida', $datos['salida']);
//     $resultado->bindParam(':cantidad', $datos['cantidad']);
//     $resultado->bindParam(':telefono', $datos['telefono']);
//
//     return $resultado->execute();
// }

 ?>
