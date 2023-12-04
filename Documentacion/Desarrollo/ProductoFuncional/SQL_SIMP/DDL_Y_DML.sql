-- Crear la base de datos simpUv
CREATE DATABASE simpUv;
USE simpUv;

-- Crear tabla Rol
CREATE TABLE Rol
(
    IdRol INT NOT NULL AUTO_INCREMENT,
    DescripcionRol VARCHAR(45) NOT NULL,
    PRIMARY KEY (IdRol)
);

-- Crear tabla Estado
CREATE TABLE Estado
(
    IdEstado INT NOT NULL AUTO_INCREMENT,
    DescripcionEstado VARCHAR(45) NOT NULL,
    PRIMARY KEY (IdEstado)
);

-- Crear tabla Usuario
CREATE TABLE Usuario
(
    IdUsuario INT NOT NULL AUTO_INCREMENT,
    NombreUsuario VARCHAR(45) NOT NULL,
    Apellido VARCHAR(45) NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Clave VARCHAR(200) NOT NULL,
    Rol_IdRol INT NOT NULL,
    Estado_idEstado INT NOT NULL,
    PRIMARY KEY (IdUsuario),
    FOREIGN KEY (Rol_IdRol) REFERENCES Rol (IdRol) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (Estado_idEstado) REFERENCES Estado (IdEstado) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Crear tabla Categoria
CREATE TABLE Categoria
(
    IdCategoria INT NOT NULL AUTO_INCREMENT,
    DescripcionCategoria VARCHAR(45) NOT NULL,
    PRIMARY KEY (IdCategoria)
);

-- Crear tabla Unidad_Medida
CREATE TABLE Unidad_Medida
(
    IdUnidadMedida INT NOT NULL AUTO_INCREMENT,
    UnidadMedida VARCHAR(45) NOT NULL,
    PRIMARY KEY (IdUnidadMedida)
);

-- Crear tabla Producto_Materia_Prima
CREATE TABLE Producto_Materia_Prima
(
    IdProductoMateriaPrima INT NOT NULL AUTO_INCREMENT,
    NombreProducto VARCHAR(45) NOT NULL,
    DescripcionProductoMateriaPrima VARCHAR(45) NOT NULL,
    IdCategoria INT NOT NULL,
    IdUnidadMedida INT NOT NULL,
    PRIMARY KEY (IdProductoMateriaPrima),
    FOREIGN KEY (IdCategoria) REFERENCES Categoria (IdCategoria) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (IdUnidadMedida) REFERENCES Unidad_Medida (IdUnidadMedida) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Crear tabla Motivo
CREATE TABLE Motivo
(
    IdMotivo INT NOT NULL AUTO_INCREMENT,
    DescripcionMovimiento VARCHAR(45) NOT NULL,
    PRIMARY KEY (IdMotivo)
);

-- Crear tabla Movimiento
CREATE TABLE Movimiento
(
    IdMovimiento INT NOT NULL AUTO_INCREMENT,
    FechaMovimiento DATE,
    CantidadProducto INT NOT NULL,
    IdMotivo INT NOT NULL,
    IdProductoMateriaPrima INT NOT NULL,
    IdUsuario INT NOT NULL,
    TipoMovimiento ENUM('Entrada', 'Salida') NOT NULL,
    PRIMARY KEY (IdMovimiento),
    FOREIGN KEY (IdMotivo) REFERENCES Motivo (IdMotivo) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario (IdUsuario) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Crear tabla Existencias
CREATE TABLE Existencias
(
    IdExistencias INT NOT NULL AUTO_INCREMENT,
    CantidadExistencias INT NOT NULL,
    CantidadConsumida INT NOT NULL,
    PuntoCompraProducto INT NOT NULL,
    PuntoMaximoProducto INT NOT NULL,
    FechaUltimaModificacion DATE NOT NULL,
    IdProductoMateriaPrima INT NOT NULL,
    PRIMARY KEY (IdExistencias, IdProductoMateriaPrima),
    FOREIGN KEY (IdProductoMateriaPrima) REFERENCES Producto_Materia_Prima (IdProductoMateriaPrima) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Crear trigger para actualizar existencias
DELIMITER //
CREATE TRIGGER tr_actualizar_existencias AFTER INSERT ON Movimiento
FOR EACH ROW
BEGIN
    DECLARE factor INT;

    IF NEW.TipoMovimiento = 'Entrada' THEN
        SET factor = 1;
    ELSE
        SET factor = -1;
    END IF;

    UPDATE Existencias
    SET CantidadExistencias = CantidadExistencias + (NEW.CantidadProducto * factor),
        FechaUltimaModificacion = CURRENT_DATE
    WHERE IdProductoMateriaPrima = NEW.IdProductoMateriaPrima;
END;
//
DELIMITER ;

-- Insertar datos en la tabla Rol
INSERT INTO Rol (DescripcionRol) VALUES ('Administrador'), ('Usuario Normal');

-- Insertar datos en la tabla Estado
INSERT INTO Estado (DescripcionEstado) VALUES ('Activo'), ('Inactivo');

-- Insertar datos en la tabla Usuario
INSERT INTO Usuario (NombreUsuario, Apellido, Correo, Clave, Rol_IdRol, Estado_idEstado)
VALUES ('Usuario1', 'Apellido1', 'usuario1@example.com', 'clave1', 1, 1),
       ('Usuario2', 'Apellido2', 'usuario2@example.com', 'clave2', 2, 1);

-- Insertar datos en la tabla Notificaciones
INSERT INTO Notificaciones (Notificacionescol) VALUES ('Notificacion1'), ('Notificacion2');

-- Insertar datos en la tabla Usuario_has_Notificaciones
INSERT INTO Usuario_has_Notificaciones (Usuario_idUsuario, Notificaciones_idNotificaciones)
VALUES (1, 1),
       (2, 2);

-- Insertar datos en la tabla Proveedor
INSERT INTO Proveedor (NombreProveedor, NumeroTelefonoProveedor, DireccionProveedor)
VALUES ('Proveedor1', 1234567890, 'DirecciónProveedor1'),
       ('Proveedor2', 9876543210, 'DirecciónProveedor2');

-- Insertar datos en la tabla Categoria
INSERT INTO Categoria (DescripcionCategoria) VALUES ('Categoria1'), ('Categoria2');

-- Insertar datos en la tabla Unidad_Medida
INSERT INTO Unidad_Medida (UnidadMedida) VALUES ('Unidad1'), ('Unidad2');

-- Insertar datos en la tabla Producto_Materia_Prima
INSERT INTO Producto_Materia_Prima (NombreProducto, DescripcionProductoMateriaPrima, IdCategoria, IdUnidadMedida)
VALUES ('Producto1', 'DescripciónProducto1', 1, 1),
       ('Producto2', 'DescripciónProducto2', 2, 2);

-- Insertar datos en la tabla UbicacionAlmacen
INSERT INTO UbicacionAlmacen (NombreAlmacen) VALUES ('Almacen1'), ('Almacen2');

-- Insertar datos en la tabla Proveedor_has_Producto_MateriaPrima
INSERT INTO Proveedor_has_Producto_MateriaPrima (NITProveedor, IdProductoMateriaPrima)
VALUES (1, 1),
       (2, 2);

-- Insertar datos en la tabla Motivo
INSERT INTO Motivo (DescripcionMovimiento) VALUES ('Entrada'), ('Salida');

-- Insertar datos en la tabla Movimiento
INSERT INTO Movimiento (FechaMovimiento, CantidadProducto, IdMotivo, IdProductoMateriaPrima, IdUsuario, TipoMovimiento)
VALUES ('2023-01-01', 10, 1, 1, 1, 'Entrada'),
       ('2023-01-02', 5, 2, 2, 2, 'Salida');

-- Insertar datos en la tabla Existencias
INSERT INTO Existencias (CantidadExistencias, CantidadConsumida, PuntoCompraProducto, PuntoMaximoProducto, FechaUltimaModificacion, IdProductoMateriaPrima)
VALUES (50, 20, 10, 100, '2023-01-01', 1),
       (30, 10, 5, 80, '2023-01-02', 2);

-- Insertar datos en la tabla PlantillaProducto
INSERT INTO PlantillaProducto (NombreProductoPlantilla, ValorVenta)
VALUES ('Plantilla1', '100'),
       ('Plantilla2', '150');

-- Insertar datos en la tabla PlantillaProducto_has_ProductoMateriaPrima
INSERT INTO PlantillaProducto_has_ProductoMateriaPrima (IdPlantillaProducto, IdProductoMateriaPrima)
VALUES (1, 1),
       (2, 2);
