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
    PuntoCompraProducto INT NOT NULL,
    FechaUltimaModificacion DATE NOT NULL,
    IdProductoMateriaPrima INT NOT NULL,
    PRIMARY KEY (IdExistencias, IdProductoMateriaPrima),
    FOREIGN KEY (IdProductoMateriaPrima) REFERENCES Producto_Materia_Prima (IdProductoMateriaPrima) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Trigger para actualizar existencias
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
