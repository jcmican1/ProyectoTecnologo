export class MovimientoModel{
    constructor(
        public IdMovimiento:string,
        public FechaMovimiento:string,
        public CantidadProducto:string,
        public PrecioProductoMovimiento:string,
        public IdMotivo:string,
        public IdUbicacionAlmacen:string,
        public NITProveedor:string,
        public IdProductoMateriaPrima:string,
        public IdUsuario:string
    ){}
}