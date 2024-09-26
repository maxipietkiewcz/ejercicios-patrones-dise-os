class FacturacionVieja {
  crearFactura(): void {
    console.log("Factura creada con el sistema viejo.");
  }

  obtenerFactura(): void {
    console.log("Obteniendo factura con el sistema viejo.");
  }
}

interface IFacturacion {
  generarFactura(): void;
  consultarFactura(): void;
}

class AdaptadorFacturacion implements IFacturacion {
  private facturacionVieja: FacturacionVieja;

  constructor(facturacionVieja: FacturacionVieja) {
    this.facturacionVieja = facturacionVieja;
  }

  generarFactura(): void {
    this.facturacionVieja.crearFactura();
  }

  consultarFactura(): void {
    this.facturacionVieja.obtenerFactura();
  }
}
