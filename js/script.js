// Inicializa localStorage con zapatos si no existe


function inicializarLocalStorage() {
  const productosGuardados = localStorage.getItem("productosZ");
  if (!productosGuardados) {
    localStorage.setItem("productosZ", JSON.stringify(zapatos));
  }
}
const zapatos = [
    {
      nombre: "Deportivo Ligero",
      genero: "Masculino",
      categoria: "Deportivo",
      imagen: "../img/img1.jpg",
      codigo: "aB92Cd12",
      precio: 79990,
      talla: 40
    },
    {
      nombre: "Casual Confort",
      genero: "Femenino",
      categoria: "Casual",
      imagen: "../images/Zapatos2.jpg",
      codigo: "xY27Zp89",
      precio: 59990,
      talla: 37
    },
    {
      nombre: "Sandalia Verano",
      genero: "Femenino",
      categoria: "Sandalias",
      imagen: "../img/img3.jpg",
      codigo: "pQ12Rs56",
      precio: 39500,
      talla: 38
    },
    {
      nombre: "Formal Clásico",
      genero: "Masculino",
      categoria: "Formal",
      imagen: "../img/img4.jpg",
      codigo: "mN89Op34",
      precio: 99000,
      talla: 42
    },
    {
      nombre: "Bota Invierno",
      genero: "Femenino",
      categoria: "Botas",
      imagen: "../img/img5.jpg",
      codigo: "gH56Ij78",
      precio: 119990,
      talla: 39
    },
    {
      nombre: "Deportivo Urbano",
      genero: "Masculino",
      categoria: "Deportivo",
      imagen: "../img/img6.jpg",
      codigo: "uV34Wx67",
      precio: 85000,
      talla: 43
    },
    {
      nombre: "Sandalia Playa",
      genero: "Femenino",
      categoria: "Sandalias",
      imagen: "../img/img7.jpg",
      codigo: "eF21Gh43",
      precio: 29990,
      talla: 36
    },
    {
      nombre: "Mocasín Elegante",
      genero: "Masculino",
      categoria: "Casual",
      imagen: "../img/img8.jpg",
      codigo: "rS78Tu90",
      precio: 75000,
      talla: 41
    },
    {
      nombre: "Zapato Tacón",
      genero: "Femenino",
      categoria: "Formal",
      imagen: "../img/img9.jpg",
      codigo: "lK45Mn67",
      precio: 125500,
      talla: 37
    },
    {
      nombre: "Tenis Clásicos",
      genero: "Unisex",
      categoria: "Casual",
      imagen: "../img/img10.jpg",
      codigo: "dB67Ef89",
      precio: 65000,
      talla: 40
    },
    {
      nombre: "Running Veloz",
      genero: "Masculino",
      categoria: "Deportivo",
      imagen: "../img/img1.jpg",
      codigo: "cA34Fg56",
      precio: 95000,
      talla: 41
    },
    {
      nombre: "Balerina Cómoda",
      genero: "Femenino",
      categoria: "Casual",
      imagen: "../img/img2.jpg",
      codigo: "wQ90Rt23",
      precio: 49990,
      talla: 38
    },
    {
      nombre: "Chancla Piscina",
      genero: "Unisex",
      categoria: "Sandalias",
      imagen: "../img/img3.jpg",
      codigo: "oP67Zs12",
      precio: 25000,
      talla: 39
    },
    {
      nombre: "Oxford Moderno",
      genero: "Masculino",
      categoria: "Formal",
      imagen: "../img/img4.jpg",
      codigo: "iL23Mk89",
      precio: 105000,
      talla: 43
    },
    {
      nombre: "Botín Casual",
      genero: "Femenino",
      categoria: "Botas",
      imagen: "../img/img5.jpg",
      codigo: "yH89Ju45",
      precio: 89990,
      talla: 36
    },
    {
      nombre: "Entrenamiento Pro",
      genero: "Unisex",
      categoria: "Deportivo",
      imagen: "../img/img6.jpg",
      codigo: "sV56Wn78",
      precio: 110000,
      talla: 42
    },
    {
      nombre: "Alpargata Verano",
      genero: "Femenino",
      categoria: "Sandalias",
      imagen: "../img/img7.jpg",
      codigo: "dN12Er34",
      precio: 45500,
      talla: 37
    },
    {
      nombre: "Náutico Clásico",
      genero: "Masculino",
      categoria: "Casual",
      imagen: "../img/img8.jpg",
      codigo: "fG78Ip90",
      precio: 80000,
      talla: 40
    },
    {
      nombre: "Stiletto Elegante",
      genero: "Femenino",
      categoria: "Formal",
      imagen: "../img/img9.jpg",
      codigo: "bK34Lm56",
      precio: 135000,
      talla: 38
    },
    {
      nombre: "Zapatilla Urbana",
      genero: "Unisex",
      categoria: "Casual",
      imagen: "../img/img10.jpg",
      codigo: "zC56Xy78",
      precio: 70000,
      talla: 41
    },
    {
      nombre: "Deportivo Transpirable",
      genero: "Masculino",
      categoria: "Deportivo",
      imagen: "../img/img1.jpg",
      codigo: "qB23Cd45",
      precio: 88000,
      talla: 39
    },
    {
      nombre: "Manoletina Chic",
      genero: "Femenino",
      categoria: "Casual",
      imagen: "../img/img2.jpg",
      codigo: "tY67Zp12",
      precio: 55000,
      talla: 36
    },
    {
      nombre: "Sandalia Plataforma",
      genero: "Femenino",
      categoria: "Sandalias",
      imagen: "../img/img3.jpg",
      codigo: "rP89Qs34",
      precio: 42000,
      talla: 40
    },
    {
      nombre: "Derby Sofisticado",
      genero: "Masculino",
      categoria: "Formal",
      imagen: "../img/img4.jpg",
      codigo: "jL12Mk78",
      precio: 115000,
      talla: 44
    },
    {
      nombre: "Bota de Montaña",
      genero: "Unisex",
      categoria: "Botas",
      imagen: "../img/img5.jpg",
      codigo: "hH45Ju90",
      precio: 129990,
      talla: 37
    },
    {
      nombre: "Training Ligero",
      genero: "Femenino",
      categoria: "Deportivo",
      imagen: "../img/img6.jpg",
      codigo: "wV78Wn34",
      precio: 92000,
      talla: 40
    },
    {
      nombre: "Cangrejera Moderna",
      genero: "Unisex",
      categoria: "Sandalias",
      imagen: "../img/img7.jpg",
      codigo: "sN34Er56",
      precio: 35500,
      talla: 38
    },
    {
      nombre: "Blucher Casual",
      genero: "Masculino",
      categoria: "Casual",
      imagen: "../img/img8.jpg",
      codigo: "kG90Ip12",
      precio: 78000,
      talla: 42
    },
    {
      nombre: "Zapato Salón",
      genero: "Femenino",
      categoria: "Formal",
      imagen: "../img/img9.jpg",
      codigo: "mK23Lm45",
      precio: 140000,
      talla: 39
    },
    {
      nombre: "Sneaker Retro",
      genero: "Unisex",
      categoria: "Casual",
      imagen: "../img/img10.jpg",
      codigo: "vC45Xy67",
      precio: 68000,
      talla: 43
    },
    {
      nombre: "Deportivo de Calle",
      genero: "Femenino",
      categoria: "Deportivo",
      imagen: "../img/img1.jpg",
      codigo: "pB56Cd78",
      precio: 82000,
      talla: 37
    },
    {
      nombre: "Mercedita Cómoda",
      genero: "Femenino",
      categoria: "Casual",
      imagen: "../img/img2.jpg",
      codigo: "uY89Zp23",
      precio: 52000,
      talla: 41
    },
    {
      nombre: "Sandalia Deportiva",
      genero: "Masculino",
      categoria: "Sandalias",
      imagen: "../img/img3.jpg",
      codigo: "nP12Qs45",
      precio: 38000,
      talla: 36
    },
    {
      nombre: "Zapato Vestir",
      genero: "Masculino",
      categoria: "Formal",
      imagen: "../img/img4.jpg",
      codigo: "oL34Mk90",
      precio: 108000,
      talla: 40
    },
    {
      nombre: "Bota de Trabajo",
      genero: "Masculino",
      categoria: "Botas",
      imagen: "../img/img5.jpg",
      codigo: "tH67Ju12",
      precio: 135000,
      talla: 42
    },
    {
      nombre: "Atletismo Ligero",
      genero: "Femenino",
      categoria: "Deportivo",
      imagen: "../img/img6.jpg",
      codigo: "rV90Wn45",
      precio: 98000,
      talla: 38
    },
    {
      nombre: "Hawaiana Casual",
      genero: "Unisex",
      categoria: "Sandalias",
      imagen: "../img/img7.jpg",
      codigo: "qN23Er67",
      precio: 22000,
      talla: 44
    },
    {
      nombre: "Oxford Clásico",
      genero: "Masculino",
      categoria: "Formal",
      imagen: "../img/img8.jpg",
      codigo: "sG56Ip23",
      precio: 95000,
      talla: 39
    },
    {
      nombre: "Plataforma Elegante",
      genero: "Femenino",
      categoria: "Formal",
      imagen: "../img/img9.jpg",
      codigo: "nK45Lm78",
      precio: 150000,
      talla: 35
    },
    {
      nombre: "Zapatilla Deportiva",
      genero: "Unisex",
      categoria: "Deportivo",
      imagen: "../img/img10.jpg",
      codigo: "wC78Xy90",
      precio: 72000,
      talla: 44
    },
    {
      nombre: "Deportivo de Moda",
      genero: "Femenino",
      categoria: "Deportivo",
      imagen: "../img/img1.jpg",
      codigo: "aC12Fd34",
      precio: 89990,
      talla: 36
    },
    {
      nombre: "Slip-on Cómodo",
      genero: "Unisex",
      categoria: "Casual",
      imagen: "../img/img2.jpg",
      codigo: "xR34Zt56",
      precio: 48000,
      talla: 42
    },
    {
      nombre: "Sandalia de Cuña",
      genero: "Femenino",
      categoria: "Sandalias",
      imagen: "../img/img3.jpg",
      codigo: "pL56Rs78",
      precio: 41500,
      talla: 37
    },
    {
      nombre: "Zapato Inglés",
      genero: "Masculino",
      categoria: "Formal",
      imagen: "../img/img4.jpg",
      codigo: "mO78Op12",
      precio: 102000,
      talla: 41
    },
    {
      nombre: "Bota de Lluvia",
      genero: "Unisex",
      categoria: "Botas",
      imagen: "../img/img5.jpg",
      codigo: "gI90Ij34",
      precio: 79000,
      talla: 40
    },
    {
      nombre: "Cross Training",
      genero: "Unisex",
      categoria: "Deportivo",
      imagen: "../img/img6.jpg",
      codigo: "uW23Wx56",
      precio: 105000,
      talla: 44
    },
    {
      nombre: "Sandalia Casual",
      genero: "Femenino",
      categoria: "Sandalias",
      imagen: "../img/img7.jpg",
      codigo: "eG45Gh78",
      precio: 32000,
      talla: 39
    },
    {
      nombre: "Mocasín Casual",
      genero: "Masculino",
      categoria: "Casual",
      imagen: "../img/img8.jpg",
      codigo: "rT67Tu90",
      precio: 68000,
      talla: 43
    },
    {
      nombre: "Zapato de Noche",
      genero: "Femenino",
      categoria: "Formal",
      imagen: "../img/img9.jpg",
      codigo: "lM89Mn12",
      precio: 160000,
      talla: 36
    },
    {
      nombre: "Tenis Juvenil",
      genero: "Unisex",
      categoria: "Casual",
      imagen: "../img/img10.jpg",
      codigo: "dE12Ef34",
      precio: 62000,
      talla: 40
    }
];

function registrarZapato(event) {
  event.preventDefault(); // Evita recarga

  const nombre = document.getElementById("nombre").value.trim();
  const genero = document.getElementById("genero").value;
  const categoria = document.getElementById("categoria").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const codigo = document.getElementById("codigo").value.trim();
  const talla = document.getElementById("talla").value;
  const imagen = document.getElementById("imagen").value;

  const resultado = document.getElementById("resultado");

  if (
    !nombre ||
    !genero ||
    !categoria ||
    isNaN(precio) ||
    !codigo ||
    !talla ||
    !imagen
  ) {
    resultado.textContent = "Por favor completa todos los campos.";
    return;
  }

  if (nombre.length > 20) {
    resultado.textContent = "El nombre no debe superar los 20 caracteres.";
    return;
  }
  
  if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
    resultado.textContent = "El precio debe ser un número válido.";
    return;
  }

  const precioFormateado = precio.toFixed(2);

  if (
    codigo.length < 8 ||
    !/[A-Z]/.test(codigo) || 
    !/[a-z]/.test(codigo) || 
    (codigo.match(/\d/g) || []).length < 2
  ) {
    resultado.textContent = "El código debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula y dos números.";
    return;
  }

  // Construimos objeto zapato
  const zapato = {
    nombre,
    genero,
    categoria,
    precio: parseFloat(precioFormateado),
    codigo,
    talla,
    imagen, // nombre del archivo o ruta
  };

  let productos = JSON.parse(localStorage.getItem("productosZ")) || [];
  productos.push(zapato);
  localStorage.setItem("productosZ", JSON.stringify(productos));

  resultado.textContent = "Registro Exitoso, Redirigiendo...";

  setTimeout(() => {
    window.location.href = "../html/productos.html"; // Página principal de productos
  }, 1500);

  limpiarCampos();
}

// Limpiar campos del formulario
function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("codigo").value = "";
  document.getElementById("genero").value = "";
  document.getElementById("talla").value = "";
  document.getElementById("imagen").value = "";
  document.getElementById("resultado").textContent = "";
}

// Variables globales para paginación
let productos = [];
let paginaActual = 1;
const productosPorPagina = 12;

// Mostrar productos de la página actual
function mostrarPagina(pagina) {
  const contenedor = document.getElementById("cardZap");
  const infoPagina = document.getElementById("pageInfo");
  contenedor.innerHTML = "";

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  if (pagina < 1) pagina = 1;
  if (pagina > totalPaginas) pagina = totalPaginas;

  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productos.slice(inicio, fin);

  productosPagina.forEach((zapato) => {
    const card = document.createElement("article");
    card.classList.add("card-item");

    card.innerHTML = `
      <img src="../img/${zapato.imagen}" alt="${zapato.nombre}" class="card-img" />
      <h3>${zapato.nombre}</h3>
      <p><strong>Género:</strong> ${zapato.genero}</p>
      <p><strong>Categoría:</strong> ${zapato.categoria}</p>
      <p><strong>Precio:</strong> $${zapato.precio.toFixed(2)}</p>
      <p><strong>Código:</strong> ${zapato.codigo}</p>
      <p><strong>Talla:</strong> ${zapato.talla}</p>
    `;

    contenedor.appendChild(card);
  });

  infoPagina.textContent = `Página ${pagina} de ${totalPaginas || 1}`;

  document.getElementById("prevPage").disabled = pagina <= 1;
  document.getElementById("nextPage").disabled = pagina >= totalPaginas;
}

// Cargar productos y mostrar la primera página
function viewZapatos() {
  productos = JSON.parse(localStorage.getItem("productosZ")) || [];
  paginaActual = 1;
  mostrarPagina(paginaActual);
}

// Navegación paginación
document.getElementById("prevPage").addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
});

// Aplicar filtros
function aplicarFiltros() {
  const filtroNombre = document.getElementById("filtroNombre").value.toLowerCase();
  const filtroCategoria = document.getElementById("filtroCategoria").value;
  const filtroPrecio = parseFloat(document.getElementById("filtroPrecio").value);

  let productosFiltrados = JSON.parse(localStorage.getItem("productosZ")) || [];

  if (filtroNombre) {
    productosFiltrados = productosFiltrados.filter(z =>
      z.nombre.toLowerCase().includes(filtroNombre)
    );
  }
  if (filtroCategoria) {
    productosFiltrados = productosFiltrados.filter(z => z.categoria === filtroCategoria);
  }
  if (!isNaN(filtroPrecio)) {
    productosFiltrados = productosFiltrados.filter(z => z.precio <= filtroPrecio);
  }

  productos = productosFiltrados;
  paginaActual = 1;
  mostrarPagina(paginaActual);
}

// Limpiar filtros
function limpiarFiltros() {
  document.getElementById("filtroNombre").value = "";
  document.getElementById("filtroCategoria").value = "";
  document.getElementById("filtroPrecio").value = "";

  productos = JSON.parse(localStorage.getItem("productosZ")) || [];
  paginaActual = 1;
  mostrarPagina(paginaActual);
}

// Inicializar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.formu");
  if (form) form.addEventListener("submit", registrarZapato);

  if (window.location.pathname.includes("productos.html")) {
    viewZapatos();
  }
});
