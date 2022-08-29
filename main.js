const carrito = document.querySelector("#carrito");
const contenedor = document.querySelector("#contenedor");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const precioFinal = document.querySelector("#precio-final");
const precioTotal = document.getElementById(`precioTotal`)
const listaTelefonos = document.querySelector("#lista-telefonos");
const carritoTotal = document.querySelector(".carrito__total")
const toast = document.querySelector(".boton")
const toast2 = document.querySelector(".boton2")
const toast3 = document.querySelector(".boton3")
const toast4 = document.querySelector(".boton4")
const toast5 = document.querySelector(".boton5")
const toast6 = document.querySelector(".boton6")
const toast7 = document.querySelector(".boton7")
const toast8 = document.querySelector(".boton8")
const toast9 = document.querySelector(".boton9")
const toast10 = document.querySelector(".boton10")
const toast11 = document.querySelector(".boton11")
const toast12 = document.querySelector(".boton12")
let precioCarrito;
let celular;
let precio = 0;
let i=0;
let celularesCarrito = [];


document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('celularesCarrito')){
    celularesCarrito = JSON.parse(localStorage.getItem('celularesCarrito'))
    actualizarCarrito()
  }
})

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
   /* calculaTotal(); */

  }

  const actualizarCarrito = () => {
    celularesCarrito.innerHTML = ""
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

      localStorage.setItem('celularesCarrito', JSON.stringify(celularesCarrito))
    });
  
    /*precioTotal.innerText = celularesCarrito.reduce((acc,Producto) => acc + Producto.precio, 0) // No pude resolver esto ya que se me concatenan los precios*/

    
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


/toast2.addEventListener("click", () => {

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

toast6.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
toast7.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
toast8.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})

toast9.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
toast10.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
toast11.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
toast12.addEventListener("click", () => {

  Toastify({
    text: "Agregado al carrito",
    className: "boton",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #9b9b9b, #454545)",
    }
    }).showToast();
})
