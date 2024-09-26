interface Observador {
  notificar(): void;
}

class DepartamentoMantenimiento implements Observador {
  notificar(): void {
    console.log("El equipo necesita mantenimiento.");
  }
}

class Equipo {
  private observadores: Observador[] = [];
  constructor(public nombre: string, public tiempoUso: number) {}

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  eliminarObservador(observador: Observador): void {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  notificarObservadores(): void {
    if (this.tiempoUso > 1000) {
      this.observadores.forEach((obs) => obs.notificar());
    }
  }

  usarEquipo(horas: number): void {
    this.tiempoUso += horas;
    this.notificarObservadores();
  }
}
