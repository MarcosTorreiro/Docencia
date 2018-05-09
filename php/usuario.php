<?php

  require 'BDdocencia.php';
  $tipoFormulario = $_POST['tipoFormulario'];
  if($tipoFormulario==1){
    $array = ['validation'=>true];
    echo json_encode($array);
  }else{
    $array = ['validation'=>false];
    echo json_encode($array);
  }



 ?>
