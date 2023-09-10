<?php 
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  
  // Obtener los datos del JSON enviado en la solicitud
  $json = file_get_contents('php://input');
  $params = json_decode($json);
  
  // Verificar que los datos necesarios estén presentes
  if (isset($params->Correo) && isset($params->Clave)) {
    $correo = $params->Correo;
    $clave = $params->Clave;
  
    require("conexion.php");
    $con = retornarConexion();
  
    // Utilizar una sentencia preparada para evitar inyección SQL
    $stmt = $con->prepare("INSERT INTO usuario (Correo, Clave) VALUES (?, ?)");
    $stmt->bind_param("ss", $correo, $clave);
    $stmt->execute();
    $stmt->close();
    
    // Crear una respuesta para indicar que los datos se han grabado correctamente
    $response = new stdClass();
    $response->resultado = 'OK';
    $response->mensaje = 'Datos grabados correctamente.';
  
    header('Content-Type: application/json');
    echo json_encode($response);
  } else {
    // Si falta alguno de los datos requeridos, enviar una respuesta de error
    http_response_code(400); // Código de respuesta de error 400 Bad Request
    $response = new stdClass();
    $response->error = 'Faltan datos requeridos.';
  
    header('Content-Type: application/json');
    echo json_encode($response);
  }
?>
