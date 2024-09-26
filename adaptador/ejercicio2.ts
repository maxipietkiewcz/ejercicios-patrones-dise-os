class ProveedorExternoAPI {
  fetchProductos(): void {
    console.log("Obteniendo productos desde API externa.");
  }

  updateStock(): void {
    console.log("Actualizando stock en API externa.");
  }
}

interface IProveedor {
  obtenerProductos(): void;
  actualizarInventario(): void;
}

class AdaptadorProveedor implements IProveedor {
  private proveedorExternoAPI: ProveedorExternoAPI;

  constructor(proveedorExternoAPI: ProveedorExternoAPI) {
    this.proveedorExternoAPI = proveedorExternoAPI;
  }

  obtenerProductos(): void {
    this.proveedorExternoAPI.fetchProductos();
  }

  actualizarInventario(): void {
    this.proveedorExternoAPI.updateStock();
  }
}
