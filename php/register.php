<?php

  require 'BDdocencia.php';

  if($_POST){
    $bd = conectar();
    $name = $_POST['user'];
    $user_password  = $_POST['password'];
    $profession = $_POST['profession'];

    $password   = password_hash( $user_password, PASSWORD_BCRYPT, array('cost' => 11));

    $user_data = ['name'=> $name,'pass'=>$password,'profession'=>$profession];

    try {
      $query = $bd->prepare('SELECT * FROM user WHERE name=:name');
      $query->execute(array(":name"=>$name));
      $userduplicate = $query->rowCount();

      if($userduplicate == 0){
        if(insertUser($user_data, $bd)){
          // Exito en la insercion
          header("Content-Type: application/json");
          $error_string = ["data"=>["result" => "Success","msg" => "Usuario registrado"]];
          echo json_encode($error_string);
        }else{
          // No se ejecuto correctamente la query
          header("Content-Type: application/json");
          $error_string = ["data"=>["result" => "Error","code"=>"Ex002", "msg" => "Error en la insercion"]];
          echo json_encode($error_string);
        }
      }else{
        // Usuario duplicado
        header("Content-Type: application/json");
        $error_string = ["data"=>["result" => "Error","code"=>"Ex001", "msg" => "Ya existe un usuario con ese nombre"]];
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
