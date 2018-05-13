<?php

require 'BDdocencia.php';

if($_POST){
  $bd = conectar();
  $user = $_POST['username'];
  $user_pass = $_POST['pass'];

  try {
    $user = getUser($bd, $user);
    if($user != NULL){
      if(password_verify($user_pass, $user['password'])){
        header("Content-Type: application/json");
        $error_string = ["data"=>["result" => "Success","msg" => "Usuario correcto"]];
        echo json_encode($error_string);
      }else{
        header("Content-Type: application/json");
        $error_string = ["data"=>["result" => "Error","code"=>"Ex001", "msg" => "Contraseña incorrecta"]];
        echo json_encode($error_string);
      }
    }else{
      header("Content-Type: application/json");
      $error_string = ["data"=>["result" => "Error","code"=>"Ex002", "msg" => "El usuario no existe"]];
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
