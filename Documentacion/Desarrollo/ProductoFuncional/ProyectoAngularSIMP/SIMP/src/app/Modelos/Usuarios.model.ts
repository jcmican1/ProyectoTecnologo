export class UsuarioModel {
    constructor(
        public idUsuario: string,
        public NombreUsuario: string,
        public Apellido: string,
        public Correo: string,
        public Clave: string,
        public PalabraClave:string,
        public DescripcionRol: string,
        public DescripcionEstado: string
    ) { }
}