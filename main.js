let opcion = 0;
let flag = 0;
let producto;
let gbmemoria;
let precio = 0;
let totalcompra= 0;
let i=0;

class celular{
    constructor(modelo, memoria) {
        this.modelo = modelo;
        this.memoria = memoria;
    }
}
function AsignacionProducto (producto){
    switch (producto){
        case "1":
            producto= "IPhone 12 Pro Max";
            break
        case "2":
            producto= "Samsung Galaxy S22";
            break
        case "3":
            producto= "Moto G Stylus";
            break
        case "4":
            producto= "Xiaomi Redmi note 11";
            break
        case "5":
            producto= "Huawei P40 pro";
            break
    }
    return producto;
}
function AsignacionMemoria (memoria){
    if(memoria == 1){
        memoria = "128 GB"
    }
    else{
        memoria = "256 GB";
    }
    return memoria;
}
function cargaobjeto (objeto, arreglo){
  flag=0;
    do {
        producto = prompt(
          "Buenos dias, que celular estabas buscando? \n 1)iPhone 12 Pro Max: $820 \n 2)Samsung Galaxy S22: $690 \n 3)Moto G Stylus: $320 \n 4)Xiaomi Redmi note 11: $410 \n 5)Huawei P40 pro: $800 "
        );

        if (producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5") {
          alert(
            "Agregado al carrito"
          )
          flag = 1;
        } else {
          alert("Numero incorrecto");
        }

    } while (flag == 0);
    flag=0;
    do{
        gbmemoria = prompt("De cuantos GB estaba buscando? \n 1)128GB \n 2)256GB(+130USD)");
        if (gbmemoria == "1" || gbmemoria == "2") 
        {
            alert
            (
              "agregado al carrito"
            )
            flag = 1;
        }
        else
        {
        alert("Numero incorrecto");
        }
    }while(flag == 0);
    flag=0;
    totalcompra=calculadoraDePrecios(producto,gbmemoria); 
    
    producto=AsignacionProducto(producto);
    objeto.modelo=producto;
    
    gbmemoria=AsignacionMemoria(gbmemoria);
    objeto.memoria=gbmemoria; 
    celulares[i]= objeto.modelo+ " "+objeto.memoria;  
    i++;                                               

}
function calculadoraDePrecios (modelo, memoria){
  switch (modelo){
    case "1": precio += 820;
    break;

    case "2": precio += 690;
    break;

    case "3": precio += 320;
    break;

    case "4": precio += 410;
    break;

    case "5": precio += 800;
    break;
    default:
      return 0;
      break;
  }

  if (memoria == "2") {
    precio += 130


}
return precio;

}

let celulares = []; 

do {
  cargaobjeto(celular,celulares);
    do{
    opcion = prompt("Desea seguir comprando? \n 1)seguir comprando \n 2)finalizar compra")
      ;
      if (opcion == "1" || opcion == "2") {
      flag = 1;
    } else {
      alert("numero incorrecto");
    }
    } while (flag == 0);
  
  } while (opcion == 1);
  alert("total de compra: "+ totalcompra);
  for(let i=0;i<celulares.length;i++){
    alert("USTED COMPRÓ\n"+celulares[i]);
  }


celulares.sort() //Ordenados por orden alfabetico
  for (let i=0;i<celulares.length;i++){
    console.log(celulares[i]);
  }

let telefonosDe256gb = celulares.filter(elemento => elemento.includes("256 GB"));
  console.log(telefonosDe256gb);
