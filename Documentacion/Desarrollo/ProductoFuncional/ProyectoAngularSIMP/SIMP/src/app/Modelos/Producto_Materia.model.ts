export class ProductoMateriaModel{
  constructor(
      public IdProductoMateria: string,
      public IdPlantillaProducto: string,
      public IdProductoMateriaPrima:string,
      public NombreProductoPlantilla: string,
      public NombreProducto:string
  ){}
}
