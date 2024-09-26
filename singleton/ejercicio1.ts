class Configuracion {
  private static instancia: Configuracion;
  private idioma: string;
  private rutaBaseDatos: string;
  private nivelRegistro: string;

  private constructor() {
    this.idioma = "es";
    this.rutaBaseDatos = "/db/inventario";
    this.nivelRegistro = "INFO";
  }

  public static getInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  public getIdioma(): string {
    return this.idioma;
  }

  public setIdioma(idioma: string): void {
    this.idioma = idioma;
  }

  public getRutaBaseDatos(): string {
    return this.rutaBaseDatos;
  }

  public setRutaBaseDatos(ruta: string): void {
    this.rutaBaseDatos = ruta;
  }

  public getNivelRegistro(): string {
    return this.nivelRegistro;
  }

  public setNivelRegistro(nivel: string): void {
    this.nivelRegistro = nivel;
  }
}
