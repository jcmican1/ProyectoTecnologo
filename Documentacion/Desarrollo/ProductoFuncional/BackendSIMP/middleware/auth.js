const { verifyToken } = require('../routers/generateToken')

const checkAuth = async (req, res, next) => {
    try {
        //TODO: authorization: Bearer 1010101010101001010100 
        const token = req.headers.authorization.split(' ').pop() //TODO:123123213
        const tokenData = await verifyToken(token)
        console.log("Toketon",tokenData);
        if (tokenData.IdUsuario) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Tu no tienes acceso a esta ruta' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'No es posible el acceso a esta ruta' })
    }

}

module.exports = checkAuth