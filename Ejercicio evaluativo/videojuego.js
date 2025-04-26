
class Videojuego {
  constructor(id, nombre, plataforma, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.plataforma = plataforma;
    this.precio = precio;
    this.stock = stock;
  }

  actualizarStock(cantidad) {
    if (this.stock + cantidad < 0) {
      console.log(`No hay suficiente stock de "${this.nombre}".`);
      return;
    }
    this.stock += cantidad;
    console.log(`Stock actualizado: ${this.stock} unidades de "${this.nombre}".`);
  }

  mostrarDetalles() {
    console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Plataforma: ${this.plataforma}, Precio: $${this.precio}, Stock: ${this.stock}`);
  }
}

class Inventario {
  constructor() {
    this.videojuegos = [];
  }

  agregarVideojuego(videojuego) {
    if (this.videojuegos.some(v => v.id === videojuego.id)) {
      console.log(`Ya existe un juego con ID ${videojuego.id}.`);
      return;
    }
    this.videojuegos.push(videojuego);
    console.log(`"${videojuego.nombre}" agregado al inventario.`);
  }

  buscarVideojuego(id) {
    return this.videojuegos.find(v => v.id === id);
  }

  eliminarVideojuego(id) {
    const index = this.videojuegos.findIndex(v => v.id === id);
    if (index !== -1) {
      const eliminado = this.videojuegos[index].nombre;
      this.videojuegos.splice(index, 1);
      console.log(`"${eliminado}" fue eliminado del inventario.`);
    } else {
      console.log(`No se encontró el videojuego con ID ${id}.`);
    }
  }

  listarVideojuegos() {
    if (this.videojuegos.length === 0) {
      console.log("El inventario está vacío.");
      return;
    }
    console.log("📦 Inventario de Videojuegos:");
    this.videojuegos.forEach(v => v.mostrarDetalles());
  }

  actualizarStockVideojuego(id, cantidad) {
    const juego = this.buscarVideojuego(id);
    if (juego) {
      juego.actualizarStock(cantidad);
    } else {
      console.log(`No se encontró el videojuego con ID ${id}.`);
    }
  }
}

class Admin {
  constructor(inventario) {
    this.inventario = inventario;
  }

  agregarNuevoVideojuego(id, nombre, plataforma, precio, stock) {
    if (precio < 0 || stock < 0) {
      console.log("El precio y el stock deben ser positivos.");
      return;
    }
    const nuevo = new Videojuego(id, nombre, plataforma, precio, stock);
    this.inventario.agregarVideojuego(nuevo);
  }

  eliminarVideojuego(id) {
    this.inventario.eliminarVideojuego(id);
  }

  listarInventario() {
    this.inventario.listarVideojuegos();
  }

  actualizarStock(id, cantidad) {
    this.inventario.actualizarStockVideojuego(id, cantidad);
  }

  buscarVideojuegoPorId(id) {
    const juego = this.inventario.buscarVideojuego(id);
    if (juego) {
      juego.mostrarDetalles();
    } else {
      console.log(`No se encontró el videojuego con ID ${id}.`);
    }
  }
}

// Ejemplo de uso
const inventario = new Inventario();
const admin = new Admin(inventario);

// Agregar juegos
admin.agregarNuevoVideojuego(1, "Mario Kart 8 Deluxe", "Nintendo Switch", 59.99, 10);
admin.agregarNuevoVideojuego(2, "God of War Ragnarok", "PlayStation 5", 69.99, 5);

// Mostrar inventario
admin.listarInventario();

// Vender 2 unidades de Mario Kart
admin.actualizarStock(1, -2);

// Eliminar God of War
admin.eliminarVideojuego(2);

// Mostrar inventario final
admin.listarInventario();
