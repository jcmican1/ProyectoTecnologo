const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const conexion = require('../conexion'); // Importa tu conexión a la base de datos aquí
const { tokenSign } = require('./generateToken')

router.post('/', (req, res) => {
    const nuevoUsuario = {
        Correo: req.body.Correo,
        Clave: req.body.Clave
    };
    console.log(nuevoUsuario);
    let hash = crypto.createHash('md5');
    hash.update(nuevoUsuario.Clave);
    let hashMD5 = hash.digest('hex');
    nuevoUsuario.Clave = hashMD5

    const query = `SELECT * FROM usuario WHERE Correo = '${nuevoUsuario.Correo}' AND Clave = '${nuevoUsuario.Clave}';`

    conexion.query(query, async (error, resultado) => {
        try {

            const tokenSession = await tokenSign(resultado[0]);
            if (resultado.length > 0) {
                console.log("Chido");
                res.json(tokenSession)
            } else {
                res.json(false)
            }

        } catch (error) {

            if (error) return console.error(error.message);

        }
    });
});

module.exports = router;
