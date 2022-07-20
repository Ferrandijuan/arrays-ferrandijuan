const carrito = document.querySelector("#carrito");
const contenedor = document.querySelector("#contenedor");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaTelefonos = document.querySelector("#lista-telefonos");
let celularesCarrito = [];



function agregarCelular(e) {
    e.preventDefault();
  
    if (e.target.classList.contains("agregar-celular")) {
      const celularSeleccionado = e.target.parentElement;
      DatosCelulares(celularSeleccionado);
    }
  }

  function DatosCelulares(celular) {
    const infoCelulares = {
      imagen: celular.querySelector("img").src,
      titulo: celular.querySelector(".card-title").innerText,
      precio: celular.querySelector("h6").innerText,
      id: celular.querySelector("a").getAttribute("id"),
      cantidad: 1,
    };
 
  
    const existe = celularesCarrito.some((celular) => celular.id === infoCelulares.id);
    if (existe) {
      const celulares = celularesCarrito.map((celular) => {
        if (celular.id === infoCelulares.id) {
          celular.cantidad++;
          return celular; 
        } else {
          return celular; 
        }
      });
      celularesCarrito = [...celulares];
    } else {
      celularesCarrito = [...celularesCarrito, infoCelulares];
    }
    carritoHTML();
  }


  function carritoHTML() {
    limpiarHTML();

    celularesCarrito.forEach((celular) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${celular.titulo}</td>
      <td>${celular.precio}</td>
      <td>${celular.cantidad}</td>
      <td>
      <a href="" class="borrar-celular" id="${celular.id}">x</a>
      </td>`;
      contenedor.appendChild(row);
    });
  }

function eliminarCelular(e) {
    e.preventDefault();
    if (e.target.classList.contains("borrar-celular")) {
      const celularID = e.target.getAttribute("id");

      celularesCarrito = celularesCarrito.filter((celular) => celular.id !== celularID);
  
      carritoHTML();
    }
  }

  
function limpiarHTML() {
    contenedor.innerHTML = "";
  }



cargarEventListeners();

  function cargarEventListeners() {
    listaTelefonos.addEventListener("click", agregarCelular);
  
    carrito.addEventListener("click", eliminarCelular);
  
  
  
    vaciarCarrito.addEventListener("click", () => {
        celularesCarrito = [];
  
      limpiarHTML();
    });
  }