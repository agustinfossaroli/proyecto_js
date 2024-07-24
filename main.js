
let nombre = prompt('Bienvenido a Mi Tienda. Por favor, ingrese su nombre: ');
let edad;
while (true) {
    edad = prompt('Hola ' + nombre + ', ¿eres mayor de 18 años? (si/no)').toLowerCase();
    if (edad === 'si' || edad === 'no') {
        break;
    } else {
        alert("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
    }
}

function preguntarOpcion(mensaje, opcionesValidas) {
    let opcion;
    while (true) {
        opcion = parseInt(prompt(mensaje));
        if (opcionesValidas.includes(opcion)) {
            return opcion;
        } else {
            alert("Opción no válida. Vuelva a intentarlo.");
        }
    }
}

const productos = [
    { id: 1, nombre: 'Vino tinto', bebida: 'Alcoholica', marca: 'Viñas de Balbo', Volumen: '1250 ml.', descripcion: 'Botella de vino tinto Borgoña magnum.', precio: 3500, cantidad: 0 },
    { id: 2, nombre: 'Vino blanco', bebida: 'Alcoholica', marca: 'Viñas de Balbo', Volumen: '1250 ml.', descripcion: 'Botella de vino blanco Chablis magnum.', precio: 3100, cantidad: 0 },
    { id: 3, nombre: 'Fernet', bebida: 'Alcoholica', marca: 'Branca', Volumen: '750 ml.', descripcion: 'Botella de fernet Branca.', precio: 10000, cantidad: 0 },
    { id: 4, nombre: 'Vodka', bebida: 'Alcoholica', marca: 'Smirnoff', Volumen: '700 ml.', descripcion: 'Botella de vodka Smirnoff común.', precio: 7000, cantidad: 0 },
    { id: 5, nombre: 'Ron', bebida: 'Alcoholica', marca: 'Havana Club', Volumen: '750 ml.', descripcion: 'Botella de ron Havana Club Añejo Especial Dorado.', precio: 12000, cantidad: 0 },
    { id: 6, nombre: 'Coca Cola', bebida: 'Sin alcohol', marca: 'Coca cola', Volumen: '2250 ml.', descripcion: 'Botella de Coca Cola común.', precio: 3500, cantidad: 0 },
    { id: 7, nombre: 'Sprite', bebida: 'Sin alcohol', marca: 'Sprite', Volumen: '2250 ml.', descripcion: 'Botella de Sprite Lima Limón.', precio: 3500, cantidad: 0 },
    { id: 8, nombre: 'Agua Saborizada', bebida: 'Sin alcohol', marca: 'Aquarius', Volumen: '2250 ml.', descripcion: 'Botella de Aquarius de Pomelo.', precio: 2600, cantidad: 0 }
];

const carrito = [];

const agregarAlCarrito = (producto, productoCantidad, productoid) => {
    const productoRepetido = carrito.find(producto => producto.id === productoid);

    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad;
    } else {
        producto.cantidad += productoCantidad;
        carrito.push(producto);
    }
    console.log(carrito);
};

const mostrarListaYComprar = (productosFiltrados) => {
    const listaProductos = productosFiltrados.map(producto => producto.id + ' ' + producto.nombre + ' ($' + producto.precio + ')').join('\n');
    let productoId = preguntarOpcion('Seleccione una opción:\n' + listaProductos, productosFiltrados.map(producto => producto.id));
    let productoCantidad = parseInt(prompt('¿Cuántos desea comprar?'));
    const productoSeleccionado = productos.find(producto => producto.id === productoId);
    agregarAlCarrito(productoSeleccionado, productoCantidad, productoSeleccionado.id);
};

if (edad === 'si') {
    let bebidaAlcoholica = preguntarOpcion(
        '¿Qué estás buscando? Ingrese el número correspondiente: \n1 Bebidas alcohólicas \n2 Bebidas sin alcohol',
        [1, 2]
    );
    if (bebidaAlcoholica === 1) {
        const bebidasAlcoholicas = productos.filter(producto => producto.bebida === 'Alcoholica');
        mostrarListaYComprar(bebidasAlcoholicas);
    } else if (bebidaAlcoholica === 2) {
        const bebidasSinAlcohol = productos.filter(producto => producto.bebida === 'Sin alcohol');
        mostrarListaYComprar(bebidasSinAlcohol);
    }
} else {
    const bebidasSinAlcohol = productos.filter(producto => producto.bebida === 'Sin alcohol');
    mostrarListaYComprar(bebidasSinAlcohol);
}


// Permite la compra de productos seleccionados
comprarProductos();
