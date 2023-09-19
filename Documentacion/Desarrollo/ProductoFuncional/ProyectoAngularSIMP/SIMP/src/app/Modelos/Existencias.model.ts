export class ExistenciasModel{
    constructor(
        public IdExistencias:string,
        public CantidadExistencias:string,
        public CantidadConsumida:string,
        public PuntoCompraProducto:string,
        public PuntoMaximoProducto: string,
        public FechaUltimaModificacion:string,
        public IdProductoMateriaPrima:string
    ){}
}