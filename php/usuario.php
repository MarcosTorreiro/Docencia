<?php

  require 'BDdocencia.php';
  $tipoFormulario = $_GET['tipoFormulario'];
  if($tipoFormulario==1){
    session_start();
    $datos = getUser($_GET['user']);
      if(!empty($datos)){
        if($_GET['user']==$datos[0]['Nombre'] && $_GET['password']==$datos[0]['password']){
          $_SESION['user']=$_GET['user'];
          $array = ['validacion'=>true];
          $array["user"] =$_GET['user'];
          echo json_encode($array);
        } else {
          $array = ['validacion'=>false];
          echo json_encode($array);
        }
      }else {
          $array = ['validacion'=>false];
          echo json_encode($array);
      }
  }else{
    if (isset($_GET['password'])) {
        $array = ['Nombre'=>$_GET['user'],
     'password'=>sha1($_GET['password'])];
        if (insertUser($array)) {
            echo json_encode($confirmacion = ['insercion'=>true]);
        } else {
            echo json_encode($confirmacion = ['insercion'=>false]);
        }
    } else {
        echo json_encode($confirmacion = ['insercion'=>false]);
    }
  }



 ?>
