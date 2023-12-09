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

-- Crear tabla PlantillaProducto
create table PlantillaProducto
(
    IdPlantillaProducto int not null auto_increment,
    NombreProductoPlantilla varchar(45) not null,
    ValorVenta varchar(45) not null,
    primary key (IdPlantillaProducto)
);

-- Crear tabla PlantillaProducto_has_ProductoMateriaPrima
create table PlantillaProducto_has_ProductoMateriaPrima
(
    IdProductoMateria int not null auto_increment,
    IdPlantillaProducto int not null,
    IdProductoMateriaPrima int not null,
    primary key (IdProductoMateria),
    foreign key (IdPlantillaProducto) references PlantillaProducto (IdPlantillaProducto) on update cascade on delete cascade,
    foreign key (IdProductoMateriaPrima) references Producto_Materia_Prima (IdProductoMateriaPrima) on update cascade on delete cascade
);
-- Insertar datos de prueba en la tabla Rol
INSERT INTO Rol (DescripcionRol) VALUES
    ('Admin'),
    ('Empleado'),
    ('Gerente');

-- Insertar datos de prueba en la tabla Estado
INSERT INTO Estado (DescripcionEstado) VALUES
    ('Activo'),
    ('Inactivo'),
    ('En Espera');

-- Insertar datos de prueba en la tabla Usuario
INSERT INTO Usuario (NombreUsuario, Apellido, Correo, Clave, Rol_IdRol, Estado_idEstado) VALUES
    ('juan123', 'Pérez', 'juan@example.com', 'clave123', 1, 1),
    ('ana456', 'López', 'ana@example.com', 'clave456', 2, 1),
    ('carlos789', 'Gómez', 'J@E.com', 'a0aa2a69c1a92bd3343b37d1a900c980', 1, 3);

-- Insertar datos de prueba en la tabla Notificaciones
INSERT INTO Notificaciones (Notificacionescol) VALUES
    ('Notificación 1'),
    ('Notificación 2'),
    ('Notificación 3');

-- Insertar datos de prueba en la tabla Usuario_has_Notificaciones
INSERT INTO Usuario_has_Notificaciones (Usuario_idUsuario, Notificaciones_idNotificaciones) VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (3, 1);

-- Insertar datos de prueba en la tabla Proveedor
INSERT INTO Proveedor (NombreProveedor, NumeroTelefonoProveedor, DireccionProveedor) VALUES
    ('Proveedor 1', 1234567890, 'Calle 123, Ciudad'),
    ('Proveedor 2', 9876543210, 'Avenida 456, Otra Ciudad');

-- Insertar datos de prueba en la tabla Categoria
INSERT INTO Categoria (DescripcionCategoria) VALUES
    ('Categoría 1'),
    ('Categoría 2'),
    ('Categoría 3');

-- Insertar datos de prueba en la tabla Unidad_Medida
INSERT INTO Unidad_Medida (UnidadMedida) VALUES
    ('Unidad 1'),
    ('Unidad 2'),
    ('Unidad 3');

-- Insertar datos de prueba en la tabla Producto_Materia_Prima
INSERT INTO Producto_Materia_Prima (NombreProducto, DescripcionProductoMateriaPrima, IdCategoria, IdUnidadMedida) VALUES
    ('Producto 1', 'Descripción Producto 1', 1, 1),
    ('Producto 2', 'Descripción Producto 2', 2, 2),
    ('Producto 3', 'Descripción Producto 3', 3, 3);

-- Insertar datos de prueba en la tabla Motivo
INSERT INTO Motivo (DescripcionMovimiento) VALUES
    ('Motivo 1'),
    ('Motivo 2'),
    ('Motivo 3');

-- Insertar datos de prueba en la tabla UbicacionAlmacen
INSERT INTO UbicacionAlmacen (NombreAlmacen) VALUES
    ('Almacén 1'),
    ('Almacén 2'),
    ('Almacén 3');

-- Insertar datos de prueba en la tabla Proveedor_has_Producto_MateriaPrima
INSERT INTO Proveedor_has_Producto_MateriaPrima (NITProveedor, IdProductoMateriaPrima) VALUES
    (1, 1),
    (2, 2),
    (1, 3);

-- Insertar datos de prueba en la tabla Movimiento
INSERT INTO Movimiento (FechaMovimiento, CantidadProducto, PrecioProductoMovimiento, IdMotivo, IdUbicacionAlmacen, NITProveedor, IdProductoMateriaPrima, IdUsuario) VALUES
    ('2023-09-01', 100, 50, 1, 1, 1, 1, 1),
    ('2023-09-02', 200, 75, 2, 2, 2, 2, 2),
    ('2023-09-03', 150, 60, 3, 3, 1, 3, 3);

-- Insertar datos de prueba en la tabla Existencias
INSERT INTO Existencias (CantidadExistencias, CantidadConsumida, PuntoCompraProducto, PuntoMaximoProducto, FechaUltimaModificacion, IdProductoMateriaPrima) VALUES
    (500, 200, 100, 400, '2023-09-01', 1),
    (800, 300, 200, 600, '2023-09-02', 2),
    (600, 250, 150, 500, '2023-09-03', 3);

/* -- Insertar datos de prueba en la tabla PlantillaProducto
INSERT INTO PlantillaProducto (NombreProductoPlantilla, ValorVenta) VALUES
    ('Plantilla 1', '100'),
    ('Plantilla 2', '200'),
    ('Plantilla 3', '150'); */

/* -- Insertar datos de prueba en la tabla PlantillaProducto_has_ProductoMateriaPrima
INSERT INTO PlantillaProducto_has_ProductoMateriaPrima (IdPlantillaProducto, IdProductoMateriaPrima) VALUES
    (1, 1),
    (2, 2),
    (3, 3); */