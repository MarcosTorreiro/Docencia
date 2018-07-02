<?php

  require 'BDdocencia.php';

  try {

    $tag = '';
    if(isset($_GET['tag'])){
        $tag = $_GET['tag'];
    }
    $bd = conectar();
    $entradas = getEntradas($bd, $tag);
    echo json_encode($entradas);

  } catch (\Exception $e) {

  }

 ?>
