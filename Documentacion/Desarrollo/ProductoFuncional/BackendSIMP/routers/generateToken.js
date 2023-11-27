const jwt = require('jsonwebtoken') //TODO : 😎

const tokenSign = async (user) => { //TODO: Genera Token
    console.log(typeof user);
    console.log(user);
    return jwt.sign(
        {
            IdUsuario: user.IdUsuario, //TODO: <---
            Rol_IdRol: user.Rol_IdRol
        }, //TODO: Payload ! Carga útil
        "123456", //TODO ENV 
        {
            expiresIn: "2h", //TODO tiempo de vida
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, "123456")
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, null)
}



module.exports = { tokenSign, decodeSign, verifyToken }