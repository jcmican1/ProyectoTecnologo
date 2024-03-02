-- Crear la base de datos simpUv
create database simpUv;
use simpUv;

-- Crear tabla Rol
create table Rol
(
    IdRol int not null auto_increment,
    DescripcionRol varchar(45) not null,
    primary key (IdRol)
);

-- Crear tabla Estado
create table Estado
(
    IdEstado int not null auto_increment,
    DescripcionEstado varchar(45) not null,
    primary key (IdEstado)
);

-- Crear tabla Usuario
create table Usuario
(
    IdUsuario int not null auto_increment,
    NombreUsuario varchar(45) not null,
    Apellido varchar(45) not null,
    Correo varchar(100) not null,
    Clave varchar(200) not null,
    Rol_IdRol int not null,
    Estado_idEstado int not null,
    primary key (IdUsuario),
    foreign key (Rol_IdRol) references Rol (IdRol) on update cascade on delete cascade,
    foreign key (Estado_idEstado) references Estado (IdEstado) on update cascade on delete cascade
);

-- Crear tabla Categoria
create table Categoria
(
    IdCategoria int not null auto_increment,
    DescripcionCategoria varchar(45) not null,
    primary key (IdCategoria)
);

-- Crear tabla Unidad_Medida
create table Unidad_Medida
(
    IdUnidadMedida int not null auto_increment,
    UnidadMedida varchar(45) not null,
    primary key (IdUnidadMedida)
);

-- Crear tabla Producto_Materia_Prima
create table Producto_Materia_Prima
(
    IdProductoMateriaPrima int not null auto_increment,
    NombreProducto varchar(45) not null,
    DescripcionProductoMateriaPrima varchar(45) not null,
    IdCategoria int not null,
    IdUnidadMedida int not null,
    primary key (IdProductoMateriaPrima),
    foreign key (IdCategoria) references Categoria (IdCategoria) on update cascade on delete cascade,
    foreign key (IdUnidadMedida) references Unidad_Medida (IdUnidadMedida) on update cascade on delete cascade
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
    FechaMovimiento DATETIME,
    CantidadProducto INT NOT NULL,
    IdMotivo INT NOT NULL,
    IdProductoMateriaPrima INT NOT NULL,
    IdUsuario INT NOT NULL,
    TipoMovimiento ENUM('Entrada', 'Salida') NOT NULL,
    PRIMARY KEY (IdMovimiento),
    FOREIGN KEY (IdMotivo) REFERENCES Motivo (IdMotivo) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario (IdUsuario) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (IdProductoMateriaPrima) REFERENCES Producto_Materia_Prima (IdProductoMateriaPrima) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Crear tabla Existencias
CREATE TABLE IF NOT EXISTS Existencias
(
    IdExistencias INT NOT NULL AUTO_INCREMENT,
    CantidadExistencias INT NOT NULL CHECK (CantidadExistencias >= 0),
    PuntoCompraProducto INT NOT NULL,
    FechaUltimaModificacion DATETIME NOT NULL,
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

-- Insertar datos de prueba en la tabla Rol
INSERT INTO Rol (DescripcionRol) VALUES
    ('Admin'),
    ('Empleado');

-- Insertar datos de prueba en la tabla Estado
INSERT INTO Estado (DescripcionEstado) VALUES
    ('Activo'),
    ('Inactivo');

-- Insertar datos de prueba en la tabla Usuario
INSERT INTO Usuario (NombreUsuario, Apellido, Correo, Clave, Rol_IdRol, Estado_idEstado) VALUES
    ('juan123', 'Pérez', 'juan@example.com', 'clave123', 1, 1),
    ('ana456', 'López', 'ana@example.com', 'clave456', 2, 1),
    ('carlos789', 'Gómez', 'J@E.com', 'a0aa2a69c1a92bd3343b37d1a900c980', 1, 2);

-- Insertar datos en la tabla Categoria
INSERT INTO Categoria (DescripcionCategoria) VALUES
('Ingredientes'),
('Bebidas');

-- Insertar datos en la tabla Unidad_Medida
INSERT INTO Unidad_Medida (UnidadMedida) VALUES
('Gramos'),
('Unidades');

-- Insertar datos en la tabla Producto_Materia_Prima
INSERT INTO Producto_Materia_Prima (NombreProducto, DescripcionProductoMateriaPrima, IdCategoria, IdUnidadMedida) VALUES
('Queso', 'Queso mozzarella rallado', 1, 1),
('Tomate', 'Tomate triturado', 1, 1),
('Pepperoni', 'Pepperoni en rodajas', 1, 1),
('Salsa de Tomate', 'Salsa de tomate para pizza', 1, 2),
('Refresco', 'Refresco de cola', 2, 2),
('NuevoProducto', 'Descripción del Nuevo Producto', 1, 1);  -- Agrega tu nuevo producto aquí

-- Trigger para insertar automáticamente en Existencias después de INSERT en Producto_Materia_Prima
DELIMITER //
CREATE TRIGGER tr_insertar_existencias_after_insert AFTER INSERT ON Producto_Materia_Prima
FOR EACH ROW
BEGIN
    INSERT INTO Existencias (IdProductoMateriaPrima, CantidadExistencias, PuntoCompraProducto, FechaUltimaModificacion)
    VALUES (NEW.IdProductoMateriaPrima, 0, 0, CURRENT_DATE);
END;
//
DELIMITER ;

-- Insertar datos en la tabla Motivo
INSERT INTO Motivo (DescripcionMovimiento) VALUES
('Compra'),
('Venta'),
('Devolución');

-- Insertar datos en la tabla Movimiento
INSERT INTO Movimiento (FechaMovimiento, CantidadProducto, IdMotivo, IdProductoMateriaPrima, IdUsuario, TipoMovimiento) VALUES
('2023-01-15', 500, 1, 1, 1, 'Entrada'),
('2023-01-16', 200, 2, 2, 2, 'Salida'),
('2023-01-17', 100, 1, 3, 3, 'Entrada');

-- Insertar datos en la tabla Existencias
INSERT INTO Existencias (CantidadExistencias, PuntoCompraProducto, FechaUltimaModificacion, IdProductoMateriaPrima) VALUES
(500, 100, '2023-01-15', 1),
(300, 50, '2023-01-16', 2),
(100, 20, '2023-01-17', 3),
(0, 0, CURRENT_DATE, 6);  -- Agrega el nuevo producto aquí
