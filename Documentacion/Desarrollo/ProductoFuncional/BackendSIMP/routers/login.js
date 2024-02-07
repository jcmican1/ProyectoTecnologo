const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const conexion = require('../conexion'); // Importa tu conexión a la base de datos aquí
const { tokenSign } = require('./generateToken')

router.post('/', (req, res) => {
    if (!req.body.Correo) {
        res.json("Por favor escribe tu correo")
    }
    if (!req.body.Clave) {
        res.json("Por favor escribe tu clave")
    }
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
            let estadoidusuario = resultado[0]
            let estado = estadoidusuario.Estado_idEstado
            if (resultado.length > 0) {
                if (estado == 1) {
                    const tokenSession = await tokenSign(resultado[0]);
                    console.log("Chido", resultado);
                    res.json(tokenSession)
                } else {
                    res.json("Usuario no activo, contacta con el administrador")
                }
            } else {
            }

        } catch (error) {
            console.log("Mensaje de error----",error.message,"----Mensaje de error");
            if (error.message == "Cannot read properties of undefined (reading 'Estado_idEstado')") {
                res.json("Contraseña incorrecta")
            }else{
                res.json("No existe el usuario")
            }
            if (error) return console.error("Este es el controlador de errores del login en el backend ", error.message);
        }
    });
});

module.exports = router;
