let opcion = 0;
let flag = 0;
let producto;
let gbmemoria;
let precio = 0;
let totalcompra= 0;

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

do {
  do {
    producto = prompt(
      "Buenos días, que celular estabas buscando? \n 1)iPhone 12 Pro Max: $820 \n 2)Samsung Galaxy S22: $690 \n 3)Moto G Stylus: $320 \n 4)xiaomi redmi note 11: $410 \n 5)huawei p40 pro: $800 "
    );

    if (producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5") {

      alert(
        "Agregado al carrito"
      );
      flag = 1;
    } else {
      alert("Numero incorrecto");
    }
  } while (flag == 0);
  flag = 0;
  do {
    gbmemoria = prompt(
      "De cuantos GB estaba buscando? \n 1)128GB \n 2)256GB(+130USD)"
    );

    if (gbmemoria == "1" || gbmemoria == "2") {

      alert(
        "agregado al carrito"
      )
      flag = 1;

    } else {
      alert("Numero incorrecto");
    }
    
  } while (flag == 0);
  flag = 0;
  do {
  opcion = prompt("Desea seguir comprando? \n 1)seguir comprando \n 2)finalizar compra")
    ;
    if (opcion == "1" || opcion == "2") {
    flag = 1;
  } else {
    alert("numero incorrecto");
  }
  } while (flag == 0);

} while (opcion == 1);

totalcompra = calculadoraDePrecios (producto, gbmemoria);


alert ("el total de su compra es: $"+totalcompra);

