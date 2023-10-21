let arrayProcesadores = ["1 - i3: $60.000", "2 - i5: $110.000", "3 - i7: $210.000"];
let arrayPlacaBase = ["1 - H610M: $94.000", "2 - B660M: $112.000", "3 - Z790: $215.000"];
let arrayMemoriaRam = ["1 - DDR4 4gb: $14.000", "2 - DDR4 8gb: $25.000", "3 - DDR4 16gb: $45.000"];
let arrayPlacaDeVideo = ["1 - GTX 1650: $150.000", "2 - RTX 2060: $300.000", "3 - RTX 3070: $500.000"];
let arrayFuenteDePoder = ["1 - 500W: $35.000", "2 - 600W: $45.000", "3 - 700W: $55.000"];
let arrayAlmacenamiento = ["1 - 1T: $45.000", "2 - 2T: $60.000", "3 - 6T: $130.000"];
let arrayGabinete = ["1 - Gabinete Antec NX201: $35.000", "2 - Gabinete Antec NX200M: $40.000", "3 - Gabinete Antec NX292: $50.000"];

let pc = [
    {
        nombre: "PC 1",
        procesador: "Ryzen 3 3200g",
        placaBase: "Asus A520",
        memoriaRam: "8gb",
        placaDeVideo: "No tiene",
        fuenteDePoder: "550W",
        almacenamiento: "SSD 480gb",
        gabinete: "CORSAIR CARBIDE SPEC DELTA",
        precio: 400000
    },
    {
        nombre: "PC 2",
        procesador: "i3 12100F",
        placaBase: "MSI H610M",
        memoriaRam: "16gb",
        placaDeVideo: "GTX 1650",
        fuenteDePoder: "550W",
        almacenamiento: "SSD 480gb",
        gabinete: "Gamemax NOVA N6",
        precio: 620000
    },
    {
        nombre: "PC 3",
        procesador: "Ryzen 5 7600",
        placaBase: "Gigabyte A620M",
        memoriaRam: "16gb",
        placaDeVideo: "RTX 3060",
        fuenteDePoder: "700w",
        almacenamiento: "SSD 960gb",
        gabinete: "Thermaltake TT S200",
        precio: 1000000
    }
]

// Carrito

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

localStorage.setItem('carrito', JSON.stringify(carrito));
let carritoEnLs = localStorage.getItem('carrito');
carritoEnLs = JSON.parse(carritoEnLs);

function agregarCarrito(a, b) {
    carrito.push("Producto: " + a + " | " + "Precio: " + b);
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const carritoImg = document.querySelector('.carritoImg');
const contenedorCarrito = document.querySelector('.contenedorCarrito');
let seccionCarrito;
let btnBorrarCarrito;

function borrarCarrito() {
    localStorage.clear();
    location.reload();
}

function mostrarCarrito() {
    let carritoObtenido = localStorage.getItem('carrito');
    carritoObtenido = JSON.parse(carritoObtenido);

    if (!seccionCarrito) {
        seccionCarrito = document.createElement('ul');
        seccionCarrito.classList.add('seccionCarrito');
        contenedorCarrito.appendChild(seccionCarrito);
    }
    else {
        while (seccionCarrito.firstChild) {
            seccionCarrito.removeChild(seccionCarrito.firstChild);
        }
    }

    if (carritoObtenido.length > 0) {
        carritoObtenido.forEach(function (productoCarrito) {
            const listadoCarrito = document.createElement('li');
            listadoCarrito.classList.add('listadoCarrito');
            listadoCarrito.textContent = productoCarrito;
            seccionCarrito.appendChild(listadoCarrito);
        });
        btnBorrarCarrito = document.createElement('button');
        btnBorrarCarrito.classList.add('btnBorrarCarrito');
        seccionCarrito.appendChild(btnBorrarCarrito);
        btnBorrarCarrito.textContent = "Vaciar carrito";
        btnBorrarCarrito.addEventListener('click', borrarCarrito);
    }
    else {
        const listadoCarrito = document.createElement('li');
        listadoCarrito.classList.add('listadoCarrito');
        listadoCarrito.textContent = "El carrito está vacio";
        seccionCarrito.appendChild(listadoCarrito);
    }
}

carritoImg.addEventListener('click', mostrarCarrito);


// Seccion Piezas

const opcionesPieza = document.getElementById("opcionesPieza");
const piezas = document.querySelectorAll('.piezas');

piezas.forEach((pieza) => {
    pieza.addEventListener('click', () => {
        let arrayOpciones = [];
        switch (pieza.id) {
            case "procesador":
                arrayOpciones = arrayProcesadores;
                break;
            case "placaBase":
                arrayOpciones = arrayPlacaBase;
                break;
            case "memoriaRam":
                arrayOpciones = arrayMemoriaRam;
                break;
            case "placaDeVideo":
                arrayOpciones = arrayPlacaDeVideo;
                break;
            case "fuenteDePoder":
                arrayOpciones = arrayFuenteDePoder;
                break;
            case "almacenamiento":
                arrayOpciones = arrayAlmacenamiento;
                break;
            case "gabinete":
                arrayOpciones = arrayGabinete;
                break;
        }

        const mostrarPiezas = arrayOpciones.map(opcion => `<p class= "opcionPiezaElejida">${opcion}</p>`).join("");
        opcionesPieza.innerHTML = mostrarPiezas;
    });
});

// Seccion Ingresar Presupuesto

const formulario = document.querySelector('.formulario');
const pcEncontrada = document.querySelector('#pcEncontrada');

function mostrarPcFiltrada(pcs) {
    pcEncontrada.innerHTML = '';

    if (pcs.length > 0) {
        pcs.forEach(pc => {
            const pcContenedor = document.createElement('div');
            pcContenedor.classList.add('msgPc');

            const pcTitulo = document.createElement('p');
            pcTitulo.textContent = 'PC';

            const pcPrecio = document.createElement('p');
            pcPrecio.textContent = `Precio: $${pc.precio}`;

            const pcComponentes = document.createElement('p');
            pcComponentes.innerHTML = `<p>Procesador: ${pc.procesador}</p>
            <p>Placa Base: ${pc.placaBase}</p>
            <p>Memoria RAM: ${pc.memoriaRam}</p>
            <p>Placa de Video: ${pc.placaDeVideo}</p>
            <p>Fuente de Poder: ${pc.fuenteDePoder}</p>
            <p>Almacenamiento: ${pc.almacenamiento}</p>
            <p>Gabinete: ${pc.gabinete}</p>`

            pcContenedor.appendChild(pcTitulo);
            pcContenedor.appendChild(pcPrecio);
            pcContenedor.appendChild(pcComponentes);

            const btnAgregarCarrito = document.createElement('button');
            btnAgregarCarrito.classList.add('btnAgregarCarrito');
            btnAgregarCarrito.textContent = 'Agregar al carrito';

            btnAgregarCarrito.addEventListener('click', () => {
                agregarCarrito(pc.nombre, pc.precio);
            });

            pcContenedor.appendChild(btnAgregarCarrito);
            pcEncontrada.appendChild(pcContenedor);
        });
    }
    else {
        const noEncontrada = document.createElement('p');
        noEncontrada.classList.add('noEncontrada');
        noEncontrada.textContent = 'No encontramos una PC que se adapte a su presupuesto.';
        pcEncontrada.appendChild(noEncontrada);
    }
}

function buscarPc(evt) {
    evt.preventDefault();
    let presupuesto = parseInt(document.querySelector('.campo').value);
    const precioFiltrado = pc.filter(valor => valor.precio <= presupuesto);
    mostrarPcFiltrada(precioFiltrado);
    formulario.reset();
};

formulario.addEventListener('submit', buscarPc);

// Seccion Computadoras Armadas

const computadoras = document.querySelectorAll(".computadoras");
const detalles = document.querySelectorAll(".detalles");

computadoras.forEach((item, index) => {
    item.addEventListener('click', () => {
        const pcSeleccionada = pc[index];

        detalles.forEach(detalle => {
            detalle.style.display = 'none';
        });

        const detallesSeleccionados = detalles[index];

        detallesSeleccionados.innerHTML = `
            <p>${pcSeleccionada.nombre}</p>
            <p>Procesador: ${pcSeleccionada.procesador}</p>
            <p>Placa Base: ${pcSeleccionada.placaBase}</p>
            <p>Memoria RAM: ${pcSeleccionada.memoriaRam}</p>
            <p>Placa de Video: ${pcSeleccionada.placaDeVideo}</p>
            <p>Fuente de Poder: ${pcSeleccionada.fuenteDePoder}</p>
            <p>Almacenamiento: ${pcSeleccionada.almacenamiento}</p>
            <p>Gabinete: ${pcSeleccionada.gabinete}</p>
            <p>Precio: $${pcSeleccionada.precio}</p>
            <button class= "btnAgregarCarrito">Agregar al carrito</button>
        `;

        detallesSeleccionados.style.display = 'block';

        const btnAgregarCarrito = item.querySelector('.btnAgregarCarrito');

        btnAgregarCarrito.addEventListener('click', () => {
            agregarCarrito(pcSeleccionada.nombre, pcSeleccionada.precio);
        });
    });
});
