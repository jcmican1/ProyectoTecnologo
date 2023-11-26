const express = require('express')
const bodyParser = require('body-parser')
const conexion = require('./conexion'); 
const app = express()
const auth = require('./middleware/auth')
const roleAuth = require('./middleware/roleAuth')
const cors = require('cors')

const listaBlanca = ['http://localhost:4200']

app.use(cors({
    origin: listaBlanca
}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO} bien`);
})


// Importa los enrutadores

const estadosRouter = require('./routers/estadosRouter');
const rolesRouter = require('./routers/rolesRouter');
const usuariosRouter = require('./routers/usuariosRouter');
const notificacionesRouter = require('./routers/notificacionesRouter');
const usuarioNotificacionesRouter = require('./routers/usuarioNotificacionesRouter');

const unidad_medidaRouter = require('./routers/unidad_medidaRouter');
const plantilla_producto_has_producto_materia_prima = require('./routers/plantilla_producto_has_producto_materia_prima');
const plantilla_producto = require("./routers/plantilla_producto")
const categoriaRouter = require('./routers/categoriaRouter');
const producto_materia_prima = require('./routers/producto_materia_prima');

const proveedorRouter = require('./routers/proveedorRouter');
const ubicacionAlmacenRouter = require('./routers/ubicacionAlmacenRouter');
const existenciasRouter = require('./routers/existenciasRouter');
const movimientoRouter = require('./routers/movimientoRouter');
const motivoRouter = require('./routers/motivoRouter');

// Usa los enrutadores
app.use('/estados',auth ,roleAuth([1]), estadosRouter);
app.use('/roles',auth ,roleAuth([1]), rolesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/notificaciones',auth ,roleAuth([2]), notificacionesRouter);
app.use('/usuario-notificaciones',auth ,roleAuth([2]), usuarioNotificacionesRouter);

app.use('/unidad-medida',auth ,roleAuth([2]), unidad_medidaRouter);
app.use('/producto-materia',auth ,roleAuth([2]), plantilla_producto_has_producto_materia_prima);
app.use('/plantilla-producto',auth ,roleAuth([2]), plantilla_producto);
app.use('/categoria',auth ,roleAuth([2]), categoriaRouter);
app.use('/materia-prima',auth ,roleAuth([2]), producto_materia_prima);

app.use('/proveedor',auth ,roleAuth([2]), proveedorRouter);
app.use('/ubicacion-almacen/',auth ,roleAuth([2]), ubicacionAlmacenRouter);
app.use('/existencias',auth ,roleAuth([2]), existenciasRouter);
app.use('/movimiento',auth ,roleAuth([2]), movimientoRouter);
app.use('/motivo',auth ,roleAuth([2]), motivoRouter);



//comienzo de rutas

app.get('/', (req, res) => {
    res.send('API DE SIMP informacion de uso : /ruta normal ')
})