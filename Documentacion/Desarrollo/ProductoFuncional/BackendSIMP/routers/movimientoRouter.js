const express = require('express');
const conexion = require('../conexion');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `
        SELECT Movimiento.IdMovimiento, Movimiento.FechaMovimiento, Movimiento.CantidadProducto, Motivo.DescripcionMovimiento, Producto_Materia_Prima.NombreProducto, Usuario.NombreUsuario
        FROM Movimiento
        INNER JOIN Motivo ON Movimiento.IdMotivo = Motivo.IdMotivo
        INNER JOIN Producto_Materia_Prima ON Movimiento.IdProductoMateriaPrima = Producto_Materia_Prima.IdProductoMateriaPrima
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
        SELECT Movimiento.IdMovimiento, Movimiento.FechaMovimiento, Movimiento.CantidadProducto, Motivo.DescripcionMovimiento, Producto_Materia_Prima.NombreProducto, Usuario.NombreUsuario
        FROM Movimiento
        INNER JOIN Motivo ON Movimiento.IdMotivo = Motivo.IdMotivo
        INNER JOIN Producto_Materia_Prima ON Movimiento.IdProductoMateriaPrima = Producto_Materia_Prima.IdProductoMateriaPrima
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
        IdMotivo: req.body.IdMotivo,
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
        IdMotivo,
        IdProductoMateriaPrima,
        IdUsuario
    } = req.body

    const query = `
        UPDATE Movimiento SET
        FechaMovimiento='${FechaMovimiento}',
        CantidadProducto=${CantidadProducto},
        IdMotivo=${IdMotivo},
        IdProductoMateriaPrima=${IdProductoMateriaPrima},
        IdUsuario=${IdUsuario}
        WHERE IdMovimiento=${id};
    `;

    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente el registro de movimiento`)
    })
})

module.exports = router;

