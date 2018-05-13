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

function insertUser($datos, $bd)
{
    $query = 'INSERT INTO user(name, password, profession) VALUES(:name, :pass, :profession)';
    $resultado = $bd->prepare($query);
    $resultado->bindParam(":name", $datos['name']);
    $resultado->bindParam(":pass", $datos['pass']);
    $resultado->bindParam(":profession", $datos['profession']);

    return $resultado->execute();
}

  function getUser($bd,$user){
    $query = $bd->prepare('SELECT name, password FROM user WHERE name=:name');
    $query->execute(array(":name"=>$user));
    return $query->fetch(PDO::FETCH_ASSOC);
  }


 ?>
