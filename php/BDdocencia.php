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
    $query = $bd->prepare('SELECT * FROM user WHERE name=:name');
    $query->execute(array(":name"=>$user));
    return $query->fetch(PDO::FETCH_ASSOC);
  }

  function getTags($bd){
    $query = $bd->prepare('SELECT * FROM tags');
    $query->execute();
    return $query->fetchAll(PDO::FETCH_ASSOC);
  }

  function insertEntrada($bd, $datos){
    $fecha = date('Y-m-d H:i:s');
    $query = 'INSERT INTO entrada(iduser, title, body, tags, fecha) VALUES(:iduser, :title, :body, :tags, :fecha)';
    $resultado = $bd->prepare($query);
    $resultado->bindParam(":iduser", $datos['iduser']);
    $resultado->bindParam(":title", $datos['title']);
    $resultado->bindParam(":body", $datos['body']);
    $resultado->bindParam(":tags", $datos['tags']);
    $resultado->bindParam(":fecha", $fecha);
    return $resultado->execute();
  }

  function getEntradas($bd, $tag){
    $query = 'SELECT * FROM entrada ';
    if($tag != ''){
      $query .= 'WHERE tags="'.$tag.'"';
      $resultado = $bd->prepare($query);
      $resultado->execute();
      return $resultado->fetch(PDO::FETCH_ASSOC);
    }else{
      $resultado = $bd->prepare($query);
      $resultado->execute();
      return $resultado->fetchAll(PDO::FETCH_ASSOC);
    }
  }
 ?>
