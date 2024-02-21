export class ExistenciasModel{
    constructor(
        public IdExistencias:string,
        public CantidadExistencias:string,
        public CantidadConsumida:string,
        public PuntoCompraProducto:string,
        public PuntoMaximoProducto: string,
        public FechaUltimaModificacionFormateada:string,
        public IdProductoMateriaPrima:string,
        public NombreProducto:string,
    ){}
}