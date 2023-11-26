const express = require('express')
const bodyParser = require('body-parser')
const conexion = require('./conexion'); 
const app = express()
const checkAuth = require('./middleware/auth')
const checkRoleAuth = require('./middleware/roleAuth')


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
app.use('/estados', estadosRouter);
app.use('/roles', rolesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/notificaciones',checkAuth ,checkRoleAuth([2]), notificacionesRouter);
app.use('/usuario-notificaciones',checkAuth ,checkRoleAuth([2]), usuarioNotificacionesRouter);

app.use('/unidad-medida',checkAuth ,checkRoleAuth([2]), unidad_medidaRouter);
app.use('/producto-materia',checkAuth ,checkRoleAuth([2]), plantilla_producto_has_producto_materia_prima);
app.use('/plantilla-producto',checkAuth ,checkRoleAuth([2]), plantilla_producto);
app.use('/categoria',checkAuth ,checkRoleAuth([2]), categoriaRouter);
app.use('/materia-prima',checkAuth ,checkRoleAuth([2]), producto_materia_prima);

app.use('/proveedor',checkAuth ,checkRoleAuth([2]), proveedorRouter);
app.use('/ubicacion-almacen/',checkAuth ,checkRoleAuth([2]), ubicacionAlmacenRouter);
app.use('/existencias',checkAuth ,checkRoleAuth([2]), existenciasRouter);
app.use('/movimiento',checkAuth ,checkRoleAuth([2]), movimientoRouter);
app.use('/motivo',checkAuth ,checkRoleAuth([2]), motivoRouter);

//comienzo de rutas

app.get('/', (req, res) => {
    res.send('API DE SIMP informacion de uso : /ruta normal ')
})