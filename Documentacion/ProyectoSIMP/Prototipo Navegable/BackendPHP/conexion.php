<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","simpconsultas");
  return $con;
}
?>