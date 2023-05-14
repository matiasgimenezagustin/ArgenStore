const productos = [
    {
      id: 1,
      nombre: "Laptop Lenovo",
      precio: 1000,
      imagen: "https://via.placeholder.com/150",
      stock: 5,
      descripcion:
        "Laptop Lenovo con procesador Intel Core i7 de 11ª generación, pantalla Full HD de 15.6 pulgadas, memoria RAM de 16 GB y almacenamiento SSD de 512 GB.",
        categoria: 'computadoras'
    },
    {
      id: 2,
      nombre: "Monitor LG",
      precio: 500,
      imagen: "https://via.placeholder.com/150",
      stock: 10,
      descripcion:
        "Monitor LG de 27 pulgadas con resolución Full HD, tiempo de respuesta de 1ms y tecnología AMD FreeSync.",
        categoria: 'televisiones'
    },
    {
      id: 3,
      nombre: "Mouse Logitech",
      precio: 50,
      imagen: "https://via.placeholder.com/150",
      stock: 15,
      descripcion:
        "Mouse Logitech inalámbrico con sensor óptico avanzado y batería recargable.",
        categoria: 'computadoras'
    },
    {
      id: 4,
      nombre: "Teclado Microsoft",
      precio: 80,
      imagen: "https://via.placeholder.com/150",
      stock: 20,
      descripcion:
        'Teclado Microsoft ergonómico con reposamuñecas acolchado y teclas multimedia',
        categoria: 'computadoras'
    },
    {
      id: 5,
      nombre: "Impresora HP",
      precio: 200,
      imagen: "https://via.placeholder.com/150",
      stock: 25,
      descripcion:
        "Impresora HP multifuncional con impresión a doble cara automática y conectividad Wi-Fi.",
        categoria: 'computadoras'
    },
     {
       id:6,
       nombre:"Disco duro externo Seagate",
       precio:70,
       imagen:"https://via.placeholder.com/150",
       stock:35,
       descripcion:"Disco duro externo Seagate Backup Plus Slim con capacidad de almacenamiento de hasta 2 TB.",
       categoria: 'computadoras' 
     },
     {
       id:"7",
       nombre:"Tarjeta gráfica Nvidia GeForce RTX",
       precio:800,
       imagen:"https://via.placeholder.com/150",
       stock:40,
       descripcion:"Tarjeta gráfica Nvidia GeForce RTX con arquitectura Ampere y tecnología Ray Tracing.",
       categoria: 'computadoras'
     },
     {
       id:"8",
       nombre:"Auriculares inalámbricos Sony WH-1000XM4",
       precio:350,
       imagen:"https://via.placeholder.com/150",
       stock:45,
       descripcion:"Auriculares inalámbricos Sony WH-1000XM4 con cancelación activa de ruido y batería de larga duración.",
       categoria: 'audio'
     },
     {
       id:"9",
       nombre:"Smartwatch Samsung Galaxy Watch4 Classic",
       precio:400,
       imagen:"https://via.placeholder.com/150",
       stock:50,
       descripcion:"Smartwatch Samsung Galaxy Watch4 Classic con sistema operativo Wear OS y monitorización avanzada del sueño.",
       categoria: 'celulares'
     },
     {
       id:"10",
       nombre:"Tablet Apple iPad Pro (2021)",
       precio:1000,
       imagen:"https://via.placeholder.com/150",
       stock:55,
       descripcion:"Tablet Apple iPad Pro (2021) con pantalla Liquid Retina XDR de 12.9 pulgadas y procesador M1.",
       categoria: 'celulares'
     }
  ];
  


  export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 1000)
    })
}

export const getProductsByCategoria = (categoria) => {
    return new Promise(resolve => {
        setTimeout( () => {

            const filteredProducts = productos.filter(prod => prod.categoria === categoria);
            resolve(filteredProducts);
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise( resolve =>{
        setTimeout( () =>{
            const productFound = productos.find(prod => Number(prod.id) === Number(id))
            resolve(productFound)
        }, 1000)
    } )
}