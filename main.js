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

function mostrarProductos(filtrarAlcohol) {
    let productosDisponibles = filtrarAlcohol
        ? productos.filter(producto => producto.bebida === 'Sin alcohol')
        : productos;

    let mensaje = 'Productos disponibles:\n';
    productosDisponibles.forEach(producto => {
        mensaje += `${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
    return productosDisponibles;
}

let productosDisponibles = mostrarProductos(edad === 'no');

let carrito = [];
let seleccion;

do {
    seleccion = prompt('Ingrese el nombre del producto que desea agregar al carrito o escriba "finalizar" para terminar: ').toLowerCase();
    if (seleccion !== 'finalizar') {
        let productoSeleccionado = productosDisponibles.find(producto => producto.nombre.toLowerCase() === seleccion);
        if (productoSeleccionado) {
            let cantidad = parseInt(prompt(`¿Cuántas unidades de ${productoSeleccionado.nombre} desea agregar?`));
            if (cantidad > 0) {
                let productoEnCarrito = carrito.find(producto => producto.nombre === productoSeleccionado.nombre);
                if (productoEnCarrito) {
                    productoEnCarrito.cantidad += cantidad;
                } else {
                    carrito.push({ ...productoSeleccionado, cantidad: cantidad });
                }
                alert(`Se agregaron ${cantidad} unidades de ${productoSeleccionado.nombre} al carrito.`);
            } else {
                alert('Cantidad no válida.');
            }
        } else {
            alert('Producto no encontrado.');
        }
    }
} while (seleccion !== 'finalizar');

let total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
alert(`Gracias por su compra, ${nombre}. El total es $${total}.`);


let detalleCarrito = 'Detalle del carrito:\n';
carrito.forEach(producto => {
    detalleCarrito += `${producto.nombre} - ${producto.cantidad} unidades - $${producto.precio * producto.cantidad}\n`;
});
alert(detalleCarrito);













