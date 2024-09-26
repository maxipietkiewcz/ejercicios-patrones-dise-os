class ConexionDB {
  private static instancia: ConexionDB;
  private host: string;
  private puerto: number;
  private usuario: string;

  private constructor() {
    this.host = "localhost";
    this.puerto = 5432;
    this.usuario = "admin";
  }

  public static getInstancia(): ConexionDB {
    if (!ConexionDB.instancia) {
      ConexionDB.instancia = new ConexionDB();
    }
    return ConexionDB.instancia;
  }

  public conectar(): void {
    console.log(
      `Conectando a DB en ${this.host}:${this.puerto} como ${this.usuario}`
    );
  }

  public desconectar(): void {
    console.log("Desconectando de la base de datos");
  }
}
