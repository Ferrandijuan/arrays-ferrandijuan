//Objetos


class Producto {
    constructor(nombre, precio, id, img) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
      this.img = img;
    }
  }
  
  const iphone = new Producto(
    "IPhone 12 Pro Max",
    820,
    1,
    `img/iphone12, iphone`
  );
  const samsung = new Producto(
    "Samsung Galaxy S22 ",
    690,
    2,
    `img/samsung, samsung`
  );
  const motorola = new Producto(
    "Moto G Stylus",
    320,
    3,
    `img/motog, motorola`
  );
  const xiaomi = new Producto(
    "Xiaomi Redmi note 11",
    410,
    4,
    `img/xiaomi, xiaomi`
  );
  const huawei = new Producto(
    "Huawei P40 pro",
    800,
    5,
    `img/huawei, huawei`
  );
  
  export const productos = [iphone, samsung, motorola, xiaomi, huawei,];
  