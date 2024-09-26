interface ObservadorInventario {
  actualizar(): void;
}

class InterfazUsuario implements ObservadorInventario {
  actualizar(): void {
    console.log("Actualización de la interfaz de usuario del inventario.");
  }
}

class Inventario {
  private observadores: ObservadorInventario[] = [];
  private equipos: string[] = [];

  agregarObservador(observador: ObservadorInventario): void {
    this.observadores.push(observador);
  }

  notificarObservadores(): void {
    this.observadores.forEach((obs) => obs.actualizar());
  }

  agregarEquipo(equipo: string): void {
    this.equipos.push(equipo);
    this.notificarObservadores();
  }

  eliminarEquipo(equipo: string): void {
    this.equipos = this.equipos.filter((e) => e !== equipo);
    this.notificarObservadores();
  }
}
