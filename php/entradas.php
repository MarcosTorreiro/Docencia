<?php

  require 'BDdocencia.php';

  if($_POST){
    $bd = conectar();
    $title = $_POST['title'];
    $body = $_POST['content'];
    $tag = $_POST['tags'];
    $user = getUser($bd, $_POST['user']);
    $datos = ['iduser'=>$user['idUser'], 'title'=>$title, 'body'=>$body, 'tags'=>$tag];
    try {
      if(insertEntrada($bd, $datos)){
        header("Content-Type: application/json");
        $error_string = ["data"=>["result" => "Success","msg" => "Entrada creada"]];
        echo json_encode($error_string);
      }else{
        // No se ejecuto correctamente la query
        header("Content-Type: application/json");
        $error_string = ["data"=>["result" => "Error","code"=>"Ex001", "msg" => "Error al crear la entrada"]];
        echo json_encode($error_string);
      }
    } catch (\Exception $e) {

    }
  }else{
    $error_string =
    "
    <font size='1'>
      <table class='xdebug-error xe-parse-errror' dir='ltr' cellspacing='0' border='1'>
        <tbody>
          <tr>
            <th colspan='5' bgcolor='#f57900' align='left'>
              <span style='background-color: #cc0000; color: #fce94f; font-size: x-large;'>( ! )</span>
              Unexpected error: No arguments were provided
            </th>
          </tr>
        </tbody>
    </font>
    ";
    die($error_string);
  }
 ?>
