<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con = retornarConexion();
  
  $correo = $_GET['Correo'];

  // Utilizar sentencia preparada para evitar inyección SQL
  $stmt = $con->prepare("SELECT idUsuario, Correo, Clave FROM Usuario WHERE Correo = ?");
  $stmt->bind_param("s", $correo);
  $stmt->execute();
  $resultado = $stmt->get_result();
  
  $vec = array();  
  while ($reg = mysqli_fetch_array($resultado))  
  {
    $vec[] = $reg;
  }
  
  $cad = json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
