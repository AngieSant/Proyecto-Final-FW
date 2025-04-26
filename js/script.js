function registrarZapato(event) {
    event.preventDefault(); // Evita que se recargue la página

    const nombre = document.getElementById("nombre").value.trim();
    const genero = document.getElementById("genero").value;
    const categoria = document.getElementById("categoria").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const codigo = document.getElementById("codigo").value.trim();
    const atributo2 = document.getElementById("atributo2").value.trim();
    const imagenInput = document.getElementById("imagen");
    const resultado = document.getElementById("resultado");

    if (!nombre || !genero || !categoria || !precio || !codigo || !atributo2 || imagenInput.files.length === 0) {
        resultado.textContent = "Por favor completa todos los campos.";
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const imagenBase64 = reader.result;

        const zapato = {
            nombre,
            genero,
            categoria,
            precio,
            codigo,
            atributo2,
            imagen: imagenBase64
        };

        let productos = JSON.parse(localStorage.getItem("productosZ")) || [];
        productos.push(zapato);
        localStorage.setItem("productosZ", JSON.stringify(productos));

        resultado.textContent = "Registro Exitoso";

        limpiarCampos();
    };

    reader.readAsDataURL(imagenInput.files[0]);

}



function viewZapatos() {
    const contenedor = document.getElementById("cardZap");

    const productos = JSON.parse(localStorage.getItem("productosZ")) || [];

    let contenidoHTML = "";

    productos.forEach((zapato) => {
        contenidoHTML += `
    <div class="card-item">
      <img src="${zapato.imagen}" alt="${zapato.nombre}" class="card-img">
      <div class="card-info">
        <h3>${zapato.nombre}</h3>
        <p><strong>Género:</strong> ${zapato.genero}</p>
        <p><strong>Categoría:</strong> ${zapato.categoria}</p>
        <p><strong>Código:</strong> ${zapato.codigo}</p>
        <p><strong>Precio:</strong> $${zapato.precio}</p>
        <p><strong>Atributo 2:</strong> ${zapato.atributo2}</p>
      </div>
    </div>
  `;
    });

    contenedor.innerHTML = contenidoHTML;
}

window.addEventListener("DOMContentLoaded", viewZapatos);


function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("atributo2").value = "";
    document.getElementById("resultado").innerHTML = "";
}

