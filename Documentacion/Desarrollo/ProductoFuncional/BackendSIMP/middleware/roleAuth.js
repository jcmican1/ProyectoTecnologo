const { verifyToken } = require('../routers/generateToken')
const express = require('express');
const conexion = require('../conexion'); // Importa tu conexión a la base de datos aquí

const roleAuth = (roles) => async (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            res.status(401);
            return res.send({ error: 'Falta el encabezado de autorización' });
        }

        const token = req.headers.authorization.split(' ').pop() //TODO: 231231321
        const tokenData = await verifyToken(token)

        const userData = `SELECT * FROM usuario WHERE idUsuario=${tokenData.IdUsuario};`
        conexion.query(userData, (error, resultado) => {
            if (error) return console.error(error.message)

            //TODO ['user'].includes('user')
            if ([].concat(roles).includes(resultado[0].Rol_IdRol)) { //TODO:
                next()
            } else {
                res.status(409)
                res.send({ error: 'No tienes permisos' })
            }
        })

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

module.exports = roleAuth