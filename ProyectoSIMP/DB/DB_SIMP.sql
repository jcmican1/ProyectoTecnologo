create database simp; 

use simp; 

create table Rol 
( 

 IdRol int not null , 

 DescripcionRol varchar(45) not null, 

 primary key (IdRol) 

); 


create table Estado 
( 

 idEstado int not null , 

 DescripcionEstado varchar(45) not null, 

 primary key (idEstado) 

); 


create table Notificaciones 
( 

 idNotificaciones int not null , 

 Notificacionescol varchar(45) not null, 

 primary key (idNotificaciones) 

); 

 
create table Usuario 
( 

 idUsuario int not null, 

 NombreUsuario varchar(45) not null, 

 Apellido varchar(45) not null, 

 Correo varchar(100) not null, 

 Clave varchar(45) null, 

 Rol_IdRol int not null, 

 Estado_idEstado int not null, 

 primary key (idUsuario) 

); 

 
create table Usuario_has_Notificaciones 
( 

 Usuario_idUsuario int not null, 

 Notificaciones_idNotificaciones int not null, 

 primary key (Usuario_idUsuario, Notificaciones_idNotificaciones) 

); 

 
create table Proveedor 
( 

 NITProveedor int not null, 

 NombreProveedor varchar(45) not null, 

 NumeroTelefonoProveedor bigint not null, 

 DireccionProveedor varchar(45) not null, 

 primary key (NITProveedor) 

); 

 
create table Categoria 
( 

 idCategoria int not null , 

 DescripcionCategoria varchar(45) not null, 

 primary key (idCategoria) 

); 


create table UnidadMedida 
( 

 IdUnidadMedida int not null , 

 UnidadMedida varchar(45) not null, 

 primary key (IdUnidadMedida) 

); 


create table Producto_Materia_Prima 
( 

 IdProductoMateriaPrima int not null, 

 NombreProducto varchar(45) not null, 

 Descripcion varchar(45) not null, 

 Categoria_idCategoria int not null, 

 UnidadMedida_IdUnidadMedida int not null, 

 primary key (IdProductoMateriaPrima) 

); 

 
create table Motivo 
( 

 IdMotivo int not null, 

 DescripcionMovimiento varchar(45) not null, 

 primary key (IdMotivo) 

); 

 
create table UbicacionAlmacen 
( 

 IdUbicacionAlmacen int not null, 

 NombreAlmacen varchar(45) not null, 

 primary key (IdUbicacionAlmacen) 

); 


create table Proveedor_has_Producto_MateriaPrima 
( 

 Proveedor_NITProveedor int not null, 

 Producto_Materia_Prima_IdProductoMateriaPrima int not null, 

 primary key (Proveedor_NITProveedor,Producto_Materia_Prima_IdProductoMateriaPrima) 

); 


create table Movimiento 
( 

 IdMovimiento int not null, 

 FechaMovimiento date, 

 CantidadProducto int not null, 

 PrecioProductoMovimiento int null, 

 Motivo_IdMotivo int not null, 

 UbicacionAlmacen_IdUbicacionAlmacen int not null, 

 Proveedor_has_Producto_Materia_Prima_Proveedor_NITProveedor int not null, 

 P_H_P_M_P_P_M_P_I int not null, 

 Usuario_idUsuario int not null, 

 primary key (IdMovimiento) 

); 

 
create table Existencias 
( 

 IdExistencias int not null, 

 CantidadExistencias int not null, 

 CantidadConsumida int not null, 

 PuntoCompraProducto int not null, 

 PuntoMaximoProducto int not null, 

 FechaUltimaModificacion date not null, 

 Producto_Materia_Prima_IdProductoMateriaPrima int not null, 

 primary key (IdExistencias,Producto_Materia_Prima_IdProductoMateriaPrima) 

); 


create table PlantillaProducto 
( 

 idPlantillaProducto int not null , 

 NombreProductoPlantilla varchar(45) not null, 

 ValorVenta varchar(45) not null, 

 primary key (idPlantillaProducto) 

); 

 
create table PlantillaProducto_has_ProductoMateriaPrima 
( 

 PlantillaProducto_idPlantillaProducto int not null, 

 Producto_Materia_Prima_IdProductoMateriaPrima int not null, 

 primary key (PlantillaProducto_idPlantillaProducto,Producto_Materia_Prima_IdProductoMateriaPrima) 

); 


alter table Usuario_has_Notificaciones 
add constraint Notificaciones_usuarios 
foreign key (Usuario_idUsuario) 
references Usuario (idUsuario); 


alter table Usuario_has_Notificaciones 
add constraint Notificaciones_Has_notificaciones 
foreign key (Notificaciones_idNotificaciones) 
references Notificaciones(idNotificaciones); 
 

alter table Usuario 
add constraint Rol_usuarios 
foreign key (Rol_IdRol) 
references Rol (IdRol); 
 

alter table Usuario 
add constraint Estado_Usuario 
foreign key (Estado_idEstado) 
references Estado(idEstado); 

 
alter table Proveedor_has_Producto_MateriaPrima 
add constraint Provedor_ProductoMateriaPrima 
foreign key (Proveedor_NITProveedor) 
references Proveedor (NITProveedor); 
 

alter table Proveedor_has_Producto_MateriaPrima 
add constraint Producto_ProductoMateriaPrima 
foreign key (Producto_Materia_Prima_IdProductoMateriaPrima) 
references Producto_Materia_Prima (IdProductoMateriaPrima); 

 
alter table Producto_Materia_Prima 
add constraint Categoria_Producto_Materia_Prima 
foreign key (Categoria_idCategoria) 
references Categoria (idCategoria); 

 
alter table Producto_Materia_Prima 
add constraint UnidadMedida_Producto_Materia_Prima 
foreign key (UnidadMedida_IdUnidadMedida) 
references UnidadMedida (IdUnidadMedida); 


alter table Existencias 
add constraint ProductoMateriaPrima_Existencias 
foreign key (Producto_Materia_Prima_IdProductoMateriaPrima) 
references Producto_Materia_Prima (IdProductoMateriaPrima); 
 

alter table PlantillaProducto_has_ProductoMateriaPrima 
add constraint PlantillaProducto_ProductoMateriaPrima 
foreign key (PlantillaProducto_idPlantillaProducto) 
references PlantillaProducto (idPlantillaProducto); 
 

alter table PlantillaProducto_has_ProductoMateriaPrima 
add constraint ProductoMateriaPrima_PlantillaProducto 
foreign key (Producto_Materia_Prima_IdProductoMateriaPrima) 
references Producto_Materia_Prima (IdProductoMateriaPrima); 
 

alter table Movimiento add constraint Motivo_Movimiento 
foreign key (Motivo_IdMotivo) 
references Motivo (IdMotivo); 
 

alter table Movimiento 
add constraint UbicacionAlmacen_Movimiento 
foreign key (UbicacionAlmacen_IdUbicacionAlmacen) 
references UbicacionAlmacen(IdUbicacionAlmacen); 


alter table Movimiento 
add constraint Proveedor_Movimiento 
foreign key (Proveedor_has_Producto_Materia_Prima_Proveedor_NITProveedor,P_H_P_M_P_P_M_P_I) 
references Proveedor_has_Producto_MateriaPrima (Proveedor_NITProveedor, Producto_Materia_Prima_IdProductoMateriaPrima ); 

 
alter table Movimiento 
add constraint Usuario_Movimiento 
foreign key (Usuario_idUsuario) 
references Usuario (idUsuario); 