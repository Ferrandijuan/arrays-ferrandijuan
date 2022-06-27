let opcion = 0;
let flag = 0;
let valor = 0;
let producto;
let devolucion;
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
      if (producto == "1") {
        valor = valor + 820
      }
      if (producto == "2") {
        valor = valor + 690
      }
      if (producto == "3") {
        valor = valor + 320
      }
      if (producto == "4") {
        valor = valor + 410
      }
      if (producto == "5") {
        valor = valor + 800
      }
    } else {
      alert("Numero incorrecto");
    }
  } while (flag == 0);
  flag = 0;
  do {
    devolucion = prompt(
      "De cuantos GB estaba buscando? \n 1)128GB \n 2)256GB(+130USD)"
    );

    if (devolucion == "1" || devolucion == "2") {

      alert(
        "agregado al carrito"
      )
      flag = 1;
      if (devolucion == "2") {
        valor = valor + 130
      }
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

alert ("el total de su compra es: $"+valor)


