const express = require('express');
const conexion = require('../conexion');
const router = express.Router();
function validarMovimiento(movimiento) {
    if (typeof movimiento.FechaMovimiento !== 'string' ||
        typeof movimiento.CantidadProducto !== 'number' ||
        typeof movimiento.IdMotivo !== 'number' ||
        typeof movimiento.IdProductoMateriaPrima !== 'number' ||
        typeof movimiento.IdUsuario !== 'number') {
        return false;
    }
    if (movimiento.CantidadProducto <= 0 ||
        movimiento.IdMotivo <= 0 ||
        movimiento.IdProductoMateriaPrima <= 0 ||
        movimiento.IdUsuario <= 0) {
        return false;
    }
    return true;
}
router.get('/', (req, res) => {
    const query = `
        SELECT Movimiento.IdMovimiento, Movimiento.FechaMovimiento, Movimiento.CantidadProducto, Motivo.DescripcionMovimiento, Producto_Materia_Prima.NombreProducto, Usuario.NombreUsuario
        FROM Movimiento
        INNER JOIN Motivo ON Movimiento.IdMotivo = Motivo.IdMotivo
        INNER JOIN Producto_Materia_Prima ON Movimiento.IdProductoMateriaPrima = Producto_Materia_Prima.IdProductoMateriaPrima
        INNER JOIN Usuario ON Movimiento.IdUsuario = Usuario.IdUsuario;
    `;
    conexion.query(query, (error, resultado) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al realizar la consulta' });
        }

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay registros de movimientos' });
        }
    });
});
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
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al realizar la consulta' });
        }

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'ID de movimiento no corresponde a ningún registro' });
        }
    });
});
router.post('/agregar', (req, res) => {
    const movimiento = req.body;

    if (!validarMovimiento(movimiento)) {
        return res.status(400).json({ error: 'Datos de movimiento inválidos' });
    }

    const query = `INSERT INTO Movimiento SET ?;`;

    conexion.query(query, movimiento, (error, resultado) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al insertar el movimiento' });
        }

        res.json({ mensaje: 'Se insertó correctamente el registro de movimiento' });
    });
});
router.put('/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const movimiento = req.body;

    if (!validarMovimiento(movimiento)) {
        return res.status(400).json({ error: 'Datos de movimiento inválidos' });
    }

    const query = `
        UPDATE Movimiento SET
        FechaMovimiento='${movimiento.FechaMovimiento}',
        CantidadProducto=${movimiento.CantidadProducto},
        IdMotivo=${movimiento.IdMotivo},
        IdProductoMateriaPrima=${movimiento.IdProductoMateriaPrima},
        IdUsuario=${movimiento.IdUsuario},
        TipoMovimiento='${movimiento.TipoMovimiento}'
        WHERE IdMovimiento=${id};
    `;

    conexion.query(query, (error, resultado) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ error: 'Error al actualizar el movimiento' });
        }

        res.json({ mensaje: 'Se actualizó correctamente el registro de movimiento' });
    });
});
module.exports = router;