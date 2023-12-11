export class MovimientoModel {
    constructor(
        public IdMovimiento: string,
        public FechaMovimiento: string,
        public CantidadProducto: string,
        public PrecioProductoMovimiento: string,
        public DescripcionMovimiento: string, // Agregar descripción de motivo
        public NombreAlmacen: string, // Agregar nombre de almacén
        public NombreProveedor: string, // Agregar nombre de proveedor
        public NombreProducto: string, // Agregar nombre de producto materia prima
        public NombreUsuario: string // Agregar nombre de usuario
    ) {}
}
