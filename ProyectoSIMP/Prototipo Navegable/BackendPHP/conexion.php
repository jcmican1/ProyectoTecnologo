<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","jjdb1");
  return $con;
}
?>