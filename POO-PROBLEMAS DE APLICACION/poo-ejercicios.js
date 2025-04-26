// Ejercicio 1
class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    caminar() {
      console.log(`${this.nombre} está caminando.`);
    }
  }
  
  const persona1 = new Persona("Ana");
  persona1.caminar();
  
  // Ejercicio 2
  class Contador {
    static cuenta = 0;
  
    static incrementar() {
      Contador.cuenta++;
    }
  }
  
  Contador.incrementar();
  Contador.incrementar();
  console.log(`Cuenta actual: ${Contador.cuenta}`);
  
  // Ejercicio 3
  class CuentaBancaria {
    #saldo;
  
    constructor(saldoInicial = 0) {
      this.#saldo = saldoInicial;
    }
  
    depositar(cantidad) {
      if (cantidad > 0) {
        this.#actualizarSaldo(this.#saldo + cantidad);
        console.log(`Se depositaron ${cantidad}. Saldo actual: ${this.#saldo}`);
      } else {
        console.log("La cantidad a depositar debe ser mayor que cero.");
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.#saldo) {
        this.#actualizarSaldo(this.#saldo - cantidad);
        console.log(`Se retiraron ${cantidad}. Saldo actual: ${this.#saldo}`);
      } else if (cantidad > this.#saldo) {
        console.log("Saldo insuficiente.");
      } else {
        console.log("La cantidad a retirar debe ser mayor que cero.");
      }
    }
  
    #actualizarSaldo(nuevoSaldo) {
      this.#saldo = nuevoSaldo;
    }
  
    getSaldo() {
      return this.#saldo;
    }
  }
  
  const cuenta1 = new CuentaBancaria(100);
  cuenta1.depositar(50);
  cuenta1.retirar(20);
  cuenta1.retirar(200);
  console.log(`Saldo final: ${cuenta1.getSaldo()}`);
  
  // Ejercicio 4
  class Animal {
    hacerSonido() {
      console.log("Sonido genérico de animal.");
    }
  }
  
  class Perro extends Animal {
    hacerSonido() {
      console.log("¡Guau guau!");
    }
  }
  
  class Gato extends Animal {
    hacerSonido() {
      console.log("¡Miau!");
    }
  }
  
  const perro1 = new Perro();
  const gato1 = new Gato();
  perro1.hacerSonido();
  gato1.hacerSonido();
  
  // Ejercicio 5
  class Vehiculo {
    constructor(peso, velocidadMaxima) {
      this.peso = peso;
      this.velocidadMaxima = velocidadMaxima;
    }
  
    mover() {
      console.log("El vehículo se está moviendo.");
    }
  }
  
  class Carro extends Vehiculo {
    mover() {
      console.log("El carro está rodando por la carretera.");
    }
  }
  
  class Bicicleta extends Vehiculo {
    mover() {
      console.log("La bicicleta está avanzando con pedales.");
    }
  }
  
  const carro1 = new Carro(1500, 200);
  const bicicleta1 = new Bicicleta(15, 30);
  carro1.mover();
  bicicleta1.mover();
  
  // Ejercicio 6
  class Universidad {
    static numEstudiantes = 0;
  
    static registrarEstudiante() {
      Universidad.numEstudiantes++;
      console.log(`Estudiante registrado. Total de estudiantes: ${Universidad.numEstudiantes}`);
    }
  }
  
  Universidad.registrarEstudiante();
  Universidad.registrarEstudiante();
  console.log(`Número total de estudiantes en la universidad: ${Universidad.numEstudiantes}`);
  
  // Ejercicio 7
  class Coche {
    #encenderMotor() {
      console.log("El motor del coche se ha encendido.");
    }
  
    conducir() {
      this.#encenderMotor();
      console.log("El coche está en movimiento.");
    }
  }
  
  const coche2 = new Coche();
  coche2.conducir();
  
  // Ejercicio 8
  class Empleado {
    #nombre;
    #salario;
  
    constructor(nombre, salario) {
      this.#nombre = nombre;
      this.#salario = salario;
    }
  
    trabajar() {
      console.log(`${this.#nombre} está trabajando.`);
    }
  
    getNombre() {
      return this.#nombre;
    }
  
    setNombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
  
    getSalario() {
      return this.#salario;
    }
  
    setSalario(nuevoSalario) {
      this.#salario = nuevoSalario;
    }
  }
  
  const empleado1 = new Empleado("Carlos", 2000);
  empleado1.trabajar();
  console.log(`Nombre del empleado: ${empleado1.getNombre()}`);
  
  // Ejercicio 9
  class Empleado2 {
    constructor(nombre) {
      this.nombre = nombre;
    }
    trabajar() {
      console.log(`${this.nombre} está realizando tareas generales.`);
    }
  }
  
  class Gerente extends Empleado2 {
    trabajar() {
      console.log(`${this.nombre} está gestionando el equipo.`);
    }
  }
  
  const empleado2_1 = new Empleado2("Laura");
  const gerente1 = new Gerente("Sofía");
  empleado2_1.trabajar();
  gerente1.trabajar();
  
  // Ejercicio 10
  class InstrumentoMusical {
    tocar() {
      throw new Error("El método tocar() debe ser implementado por las clases hijas.");
    }
  }
  
  class Piano extends InstrumentoMusical {
    tocar() {
      console.log("El piano está sonando melodías.");
    }
  }
  
  class Guitarra extends InstrumentoMusical {
    tocar() {
      console.log("La guitarra está rasgueando acordes.");
    }
  }
  
  const piano1 = new Piano();
  const guitarra1 = new Guitarra();
  piano1.tocar();
  guitarra1.tocar();
  
  // Ejercicio 11
  class Vehiculo2 {
    #modelo;
    marca;
  
    constructor(modelo, marca) {
      this.#modelo = modelo;
      this.marca = marca;
    }
  
    #encenderMotor() {
      console.log("El motor del vehículo se ha encendido.");
    }
  
    arrancar() {
      this.#encenderMotor();
      console.log(`El vehículo ${this.marca} ${this.#modelo} está listo para arrancar.`);
    }
  
    getModelo() {
      return this.#modelo;
    }
  
    setModelo(nuevoModelo) {
      this.#modelo = nuevoModelo;
    }
  }
  
  const vehiculo3 = new Vehiculo2("Sedán", "Toyota");
  vehiculo3.arrancar();
  console.log(`Modelo del vehículo: ${vehiculo3.getModelo()}, Marca: ${vehiculo3.marca}`);
  
  // Ejercicio 12
  class Escuela {
    static numEstudiantes = 0;
  }
  
  class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      Escuela.numEstudiantes++;
    }
  }
  
  const estudiante1 = new Estudiante("Luis");
  const estudiante2 = new Estudiante("María");
  console.log(`Número total de estudiantes en la escuela: ${Escuela.numEstudiantes}`);
  
  // Ejercicio 13
  class Cliente {
    #saldo;
  
    constructor(saldoInicial = 0) {
      this.#saldo = saldoInicial;
    }
  
    #calcularDescuento() {
      if (this.#saldo > 100) {
        return 0.10; // 10% de descuento
      } else {
        return 0;
      }
    }
  
    aplicarDescuento() {
      const descuento = this.#calcularDescuento();
      const descuentoAplicado = this.#saldo * descuento;
      this.#saldo -= descuentoAplicado;
      console.log(`Descuento aplicado: ${descuentoAplicado}. Saldo actual: ${this.#saldo}`);
    }
  
    getSaldo() {
      return this.#saldo;
    }
  
    depositar(cantidad) {
      this.#saldo += cantidad;
    }
  }
  
  const cliente1 = new Cliente(150);
  console.log(`Saldo inicial del cliente: ${cliente1.getSaldo()}`);
  cliente1.aplicarDescuento();
  
  // Ejercicio 14
  class Producto {
    #precio;
  
    constructor(precioInicial) {
      this.#precio = precioInicial;
    }
  
    getPrecio() {
      return this.#precio;
    }
  
    setPrecio(nuevoPrecio) {
      if (nuevoPrecio >= 0) {
        this.#precio = nuevoPrecio;
      } else {
        console.log("El precio no puede ser negativo.");
      }
    }
  }
  
  const producto1 = new Producto(50);
  console.log(`Precio inicial del producto: ${producto1.getPrecio()}`);
  producto1.setPrecio(60);
  console.log(`Precio actualizado del producto: ${producto1.getPrecio()}`);
  
  // Ejercicio 15
  class Animal3 {
    hacerSonido() {
      console.log("Sonido genérico de animal.");
    }
  }
  
  class Perro3 extends Animal3 {
    hacerSonido() {
      console.log("¡Guau guau!");
    }
  }
  
  class Gato3 extends Animal3 {
    hacerSonido() {
      console.log("¡Miau!");
    }
  }
  
  const perro2 = new Perro3();
  const gato2 = new Gato3();
  perro2.hacerSonido();
  gato2.hacerSonido();
  
  // Ejercicio 16
  class Vehiculo3 {
    mover() {
      console.log("El vehículo se está moviendo.");
    }
  }
  
  class Coche2 extends Vehiculo3 {
    mover() {
      console.log("El coche está acelerando.");
    }
  }
  
  class Bicicleta2 extends Vehiculo3 {
    mover() {
      console.log("La bicicleta está pedaleando.");
    }
  }
  
  const coche3 = new Coche2();
  const bicicleta3 = new Bicicleta2();
  coche3.mover();
  bicicleta3.mover();
  
  // Ejercicio 17
  class Empleado3 {
    static totalEmpleados = 0;
    constructor() {
      Empleado3.totalEmpleados++;
    }
  }
  
  class Gerente2 extends Empleado3 {
    constructor() {
      super();
    }
  }
  
  const empleado4 = new Empleado3();
  const gerente2_1 = new Gerente2();
  const empleado5 = new Empleado3();
  console.log(`Número total de empleados (y gerentes): ${Empleado3.totalEmpleados}`);
  
  // Ejercicio 18
  class Persona2 {
    #edad;
  
    setEdad(nuevaEdad) {
      if (nuevaEdad >= 0) {
        this.#edad = nuevaEdad;
      } else {
        console.log("La edad no puede ser negativa.");
      }
    }
  
    getEdad() {
      return this.#edad;
    }
  }
  
  class Empleado4 extends Persona2 {
    modificarEdad(nuevaEdad) {
      this.setEdad(nuevaEdad);
    }
  }
  
  const empleado6 = new Empleado4();
  empleado6.modificarEdad(30);
  console.log(`Edad del empleado: ${empleado6.getEdad()}`);
  
  //Ejercicio 19
  class CuentaBancaria2 {
    #saldo;
  
    constructor(saldoInicial = 0) {
      this.#saldo = saldoInicial;
    }
  
    #actualizarSaldo(nuevoSaldo) {
      this.#saldo = nuevoSaldo;
    }
  
    depositar(cantidad) {
      if (cantidad > 0) {
        this.#actualizarSaldo(this.#saldo + cantidad);
        console.log(`Depósito de ${cantidad} realizado. Saldo actual: ${this.#saldo}`);
      } else {
        console.log("La cantidad a depositar debe ser mayor que cero.");
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.#saldo) {
        this.#actualizarSaldo(this.#saldo - cantidad);
        console.log(`Retiro de ${cantidad} realizado. Saldo actual: ${this.#saldo}`);
      } else if (cantidad > this.#saldo) {
        console.log("Saldo insuficiente.");
      } else {
        console.log("La cantidad a retirar debe ser mayor que cero.");
      }
    }
  
    consultarSaldo() {
      return this.#saldo;
    }
  }
  
  const cuenta2 = new CuentaBancaria2(500);
  cuenta2.depositar(100);
  cuenta2.retirar(50);
  console.log(`Saldo final de la cuenta: ${cuenta2.consultarSaldo()}`);