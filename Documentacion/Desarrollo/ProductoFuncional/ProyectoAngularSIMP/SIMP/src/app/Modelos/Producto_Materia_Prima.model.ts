export class ProductoMateriaPrimaModel{
  constructor(
      public IdProductoMateriaPrima:string,
      public NombreProducto:string,
      public DescripcionProductoMateriaPrima:string,
      public IdCategoria:string,
      public IdUnidadMedida:string,
      public DescripcionCategoria:string,
      public UnidadMedida: string
  ){}
}
