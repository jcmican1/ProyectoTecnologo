const express = require('express');
const conexion = require('../conexion');
const router = express.Router();

// Obtener todos los Movimientos con descripciones de motivo, almacén, proveedor, materia prima y nombre de usuario
router.get('/', (req, res) => {
    const query = `
        SELECT Movimiento.IdMovimiento, Movimiento.FechaMovimiento, Movimiento.CantidadProducto,
        Movimiento.PrecioProductoMovimiento, Motivo.DescripcionMovimiento, UbicacionAlmacen.NombreAlmacen,
        Proveedor.NombreProveedor, Producto_Materia_Prima.NombreProducto, Usuario.NombreUsuario
        FROM Movimiento
        INNER JOIN Motivo ON Movimiento.IdMotivo = Motivo.IdMotivo
        INNER JOIN UbicacionAlmacen ON Movimiento.IdUbicacionAlmacen = UbicacionAlmacen.IdUbicacionAlmacen
        INNER JOIN Proveedor_has_Producto_MateriaPrima ON Movimiento.NITProveedor = Proveedor_has_Producto_MateriaPrima.NITProveedor
        AND Movimiento.IdProductoMateriaPrima = Proveedor_has_Producto_MateriaPrima.IdProductoMateriaPrima
        INNER JOIN Proveedor ON Proveedor_has_Producto_MateriaPrima.NITProveedor = Proveedor.NITProveedor
        INNER JOIN Producto_Materia_Prima ON Proveedor_has_Producto_MateriaPrima.IdProductoMateriaPrima = Producto_Materia_Prima.IdProductoMateriaPrima
        INNER JOIN Usuario ON Movimiento.IdUsuario = Usuario.IdUsuario;
    `;

    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros de movimientos`)
        }
    })
})

// Obtener Movimiento por ID con descripciones de motivo, almacén, proveedor, materia prima y nombre de usuario
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT Movimiento.IdMovimiento, Movimiento.FechaMovimiento, Movimiento.CantidadProducto,
        Movimiento.PrecioProductoMovimiento, Motivo.DescripcionMovimiento, UbicacionAlmacen.NombreAlmacen,
        Proveedor.NombreProveedor, Producto_Materia_Prima.NombreProducto, Usuario.NombreUsuario
        FROM Movimiento
        INNER JOIN Motivo ON Movimiento.IdMotivo = Motivo.IdMotivo
        INNER JOIN UbicacionAlmacen ON Movimiento.IdUbicacionAlmacen = UbicacionAlmacen.IdUbicacionAlmacen
        INNER JOIN Proveedor_has_Producto_MateriaPrima ON Movimiento.NITProveedor = Proveedor_has_Producto_MateriaPrima.NITProveedor
        AND Movimiento.IdProductoMateriaPrima = Proveedor_has_Producto_MateriaPrima.IdProductoMateriaPrima
        INNER JOIN Proveedor ON Proveedor_has_Producto_MateriaPrima.NITProveedor = Proveedor.NITProveedor
        INNER JOIN Producto_Materia_Prima ON Proveedor_has_Producto_MateriaPrima.IdProductoMateriaPrima = Producto_Materia_Prima.IdProductoMateriaPrima
        INNER JOIN Usuario ON Movimiento.IdUsuario = Usuario.IdUsuario
        WHERE Movimiento.IdMovimiento = ${id};
    `;

    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`ID de movimiento no corresponde a ningún registro`)
        }
    })
})

// Agregar un nuevo Movimiento
router.post('/agregar', (req, res) => {
    const movimiento = {
        FechaMovimiento: req.body.FechaMovimiento,
        CantidadProducto: req.body.CantidadProducto,
        PrecioProductoMovimiento: req.body.PrecioProductoMovimiento,
        IdMotivo: req.body.IdMotivo,
        IdUbicacionAlmacen: req.body.IdUbicacionAlmacen,
        NITProveedor: req.body.NITProveedor,
        IdProductoMateriaPrima: req.body.IdProductoMateriaPrima,
        IdUsuario: req.body.IdUsuario
    };

    const query = `INSERT INTO Movimiento SET ?;`;

    conexion.query(query, movimiento, (error, resultado) => {
        if (error) return console.error(error.message)

        res.json(`Se insertó correctamente el registro de movimiento`)
    })
})

// Actualizar Movimiento por ID
router.put('/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        FechaMovimiento,
        CantidadProducto,
        PrecioProductoMovimiento,
        IdMotivo,
        IdUbicacionAlmacen,
        NITProveedor,
        IdProductoMateriaPrima,
        IdUsuario
    } = req.body

    const query = `
        UPDATE Movimiento SET
        FechaMovimiento='${FechaMovimiento}',
        CantidadProducto=${CantidadProducto},
        PrecioProductoMovimiento=${PrecioProductoMovimiento},
        IdMotivo=${IdMotivo},
        IdUbicacionAlmacen=${IdUbicacionAlmacen},
        NITProveedor=${NITProveedor},
        IdProductoMateriaPrima=${IdProductoMateriaPrima},
        IdUsuario=${IdUsuario}
        WHERE IdMovimiento=${id};
    `;

    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente el registro de movimiento`)
    })
})

// Borrar Movimiento por ID
router.delete('/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM Movimiento WHERE IdMovimiento=${id};`;

    conexion.query(query, (error, resultado) => {
        if (error) console.error(error.message)

        res.json(`Se eliminó correctamente el registro de movimiento`)
    })
})

module.exports = router;

