abstract class DispositivoEntrada {
  constructor(public tipoConexion: string, public marca: string) {}
}

class Teclado extends DispositivoEntrada {}
class Raton extends DispositivoEntrada {}
class Scanner extends DispositivoEntrada {}

class DispositivoEntradaFactory {
  public static crearDispositivo(tipo: string): DispositivoEntrada | null {
    switch (tipo) {
      case "Teclado":
        return new Teclado("USB", "Logitech");
      case "Raton":
        return new Raton("Bluetooth", "Razer");
      case "Scanner":
        return new Scanner("WiFi", "HP");
      default:
        return null;
    }
  }
}
