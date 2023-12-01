export class MovimientoModel {
    constructor(
        public IdMovimiento: string,
        public FechaMovimiento: string,
        public CantidadProducto: string,
        public IdMotivo: string,  // Agrega esta línea
        public IdProductoMateriaPrima: string,  // Agrega esta línea
        public NombreProducto: string,
        public NombreUsuario: string
    ) {}
}