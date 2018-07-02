<?php

require 'BDdocencia.php';

if($_GET){

      $bd = conectar();
      $id = $_GET['entrada'];
      $entrada = getEntrada($bd, $id);
      echo json_encode($entrada);

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
