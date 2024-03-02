export class MovimientoModel {
    constructor(
        public IdMovimiento: string,
        public FechaMovimientoFormateada: string,
        public CantidadProducto: string,
        public DescripcionMovimiento: string, 
        public IdProductoMateriaPrima: string,  
        public NombreProducto: string,
        public NombreUsuario: string,
        public TipoMovimiento: string
    ) {}
}
