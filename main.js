const carrito = document.querySelector("#carrito");
const contenedor = document.querySelector("#contenedor");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaTelefonos = document.querySelector("#lista-telefonos");
const toast = document.querySelector(".boton")
const toast2 = document.querySelector(".boton2")
const toast3 = document.querySelector(".boton3")
const toast4 = document.querySelector(".boton4")
const toast5 = document.querySelector(".boton5")
let celularesCarrito = [];
i = 0;



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
 
  
    const elegir = celularesCarrito.some((celular) => celular.id === infoCelulares.id);
    if (elegir) {
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

    console.log(celularesCarrito);
    localstorageListacelulares(celularesCarrito);
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


function getCelularesList(){
  let storedList = localStorage.getItem(`localcelularesCarrito`);
  if (storedList == null){
    celularesCarrito = [];
    }else{
      celularesCarrito = JSON.parse(storedList);
  }
  return celularesCarrito;
}


function localstorageListacelulares(plist) {
  localStorage.setItem(`localcelularesCarrito`, JSON.stringify(plist));
}



toast.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})


toast2.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})


toast3.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})


toast4.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})


toast5.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
