abstract class PerifericoSalida {
  constructor(public propiedad: string) {}
}

class Monitor extends PerifericoSalida {}
class Impresora extends PerifericoSalida {}
class Proyector extends PerifericoSalida {}

class PerifericoSalidaFactory {
  public static crearPeriferico(tipo: string): PerifericoSalida | null {
    switch (tipo) {
      case "Monitor":
        return new Monitor("1080p");
      case "Impresora":
        return new Impresora("Láser");
      case "Proyector":
        return new Proyector("Full HD");
      default:
        return null;
    }
  }
}
