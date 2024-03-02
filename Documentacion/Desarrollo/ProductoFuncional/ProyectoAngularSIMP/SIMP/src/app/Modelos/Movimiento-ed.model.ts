export class MovimientoEDModel {
    constructor(
      public IdMovimiento: string,
      public FechaMovimiento: string,
      public CantidadProducto: string,
      public IdMotivo: string,
      public IdProductoMateriaPrima: string,
      public IdUsuario: string,
      public TipoMovimiento: string
    ) {}
  }
  
