document.addEventListener('DOMContentLoaded', () => {
    const formularioUsuario = document.getElementById('formulario-usuario');
    const listaProductos = document.getElementById('lista-productos');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const finalizarCompra = document.getElementById('finalizar-compra');
    const productosDiv = document.getElementById('productos');
    const carritoDiv = document.getElementById('carrito');
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    let productos = [];

    function mostrarProductos(filtrarAlcohol) {
        listaProductos.innerHTML = '';
        const productosDisponibles = filtrarAlcohol
            ? productos.filter(producto => producto.bebida === 'Sin alcohol')
            : productos;

        productosDisponibles.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `${producto.nombre} - $${producto.precio}
                            <button data-id="${producto.id}">Agregar al carrito</button>`;
            listaProductos.appendChild(li);
        });
    }

    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            productos = data;

            const edad = sessionStorage.getItem('edad');
            if (edad) {
                mostrarProductos(edad === 'no');
                productosDiv.style.display = 'block';
                carritoDiv.style.display = 'block';
            }
        });

    formularioUsuario.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const edad = document.getElementById('edad').value;

        if (nombre && edad) {
            sessionStorage.setItem('nombre', nombre);
            sessionStorage.setItem('edad', edad);

            productosDiv.style.display = 'block';
            carritoDiv.style.display = 'block';
            mostrarProductos(edad === 'no');
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Debes ingresar todos los datos.',
                icon: 'warning'
            });
        }
    });

    listaProductos.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productoId = parseInt(event.target.getAttribute('data-id'));
            agregarAlCarrito(productoId);
        }
    });

    function agregarAlCarrito(productoId) {
        const productoSeleccionado = productos.find(producto => producto.id === productoId);
        if (productoSeleccionado) {
            const productoEnCarrito = carrito.find(producto => producto.id === productoSeleccionado.id);
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1;
            } else {
                carrito.push({ ...productoSeleccionado, cantidad: 1 });
            }
            actualizarCarrito();
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000
            }).showToast();
        }
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `${producto.nombre} - ${producto.cantidad} unidades - $${producto.precio * producto.cantidad}`;
            listaCarrito.appendChild(li);
            total += producto.precio * producto.cantidad;
        });

        totalCarrito.innerHTML = `Total: $${total}`;
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }

    finalizarCompra.addEventListener('click', () => {
        const nombre = sessionStorage.getItem('nombre');
        Swal.fire({
            title: 'Gracias por su compra',
            text: `Gracias por su compra, ${nombre}. El total es $${totalCarrito.innerText.replace('Total: $', '')}.`,
            icon: 'success'
        });
        carrito = [];
        sessionStorage.removeItem('carrito');
        actualizarCarrito();
    });

    if (carrito.length > 0) {
        productosDiv.style.display = 'block';
        carritoDiv.style.display = 'block';
        actualizarCarrito();
    }
});







