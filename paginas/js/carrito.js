 
 const clickBoton = document.querySelectorAll('.agregar-carrito')
 const tbody = document.querySelector('.tbody')
 let carrito = []
 
clickBoton.forEach(btn => {
    btn.addEventListener('click', agregarProdCarrito)
 })
 
 
  function agregarProdCarrito(e){
    const boton = e.target;
  
    const producto = boton.closest('.card');
    const prodTitulo = producto.querySelector('.card-titulo').textContent;
    const prodPrecio = producto.querySelector('.precio').textContent;
  
    const prodImg = producto.querySelector('.imagen-producto').src;
 
    const nuevoProd = {
      titulo: prodTitulo,
      precio: prodPrecio,
      img: prodImg,
      cantidad: 1
    }
 
    agregarCarrito(nuevoProd)
  }
 
 
  function agregarCarrito(nuevoProd){
 
 
 
    const InputCantidad = tbody.getElementsByClassName('input-Cantidad')
    
    for(let i =0; i < carrito.length ; i++){
      if(carrito[i].titulo.trim() === nuevoProd.titulo.trim()){
        carrito[i].cantidad ++;
        const inputValue = InputCantidad[i]
        inputValue.value++;

        CarritoTotal()
        return null;
      }
    }
    
    carrito.push(nuevoProd)
   
    renderCarrito()
  } 
 
 
  function renderCarrito(){
  
    tbody.innerHTML = ''
    carrito.map(producto => { 
      const tr = document.createElement('tr')
      tr.classList.add('ProdCarrito')
      const Contenido = 
      `
     
      <td>
          <img src="${producto.img}" width=90> 
      </td> 
      <td class='titulo' style="width=40;">${producto.titulo}</td>
      
      <td class="tabla-precio">${producto.precio}</td>
      
      <td class="tabla-cantidad" >
      <input type="number" min="1" value=${producto.cantidad} class="input-Cantidad" style="background-color: #dfd6d686;
      border: none;
      width: 40px;">
      <button class="borrar-producto btn btn-danger"><i class="fas fa-trash-alt"></i></button>
      </td>
   `
  
   tr.innerHTML = Contenido;
   tbody.append(tr)
 
    tr.querySelector(".borrar-producto").addEventListener('click', eliminarProducto)
    tr.querySelector(".input-Cantidad").addEventListener('change', sumaCantidad)
    
    })
    CarritoTotal()
  }
 
  function CarritoTotal(){
    let Total = 0;
    const totalProductos = document.querySelector('.totalProductos')
    carrito.forEach((producto) => {
      const precio = Number(producto.precio.replace("$", ''))
      Total = Total + precio*producto.cantidad
    })
 
    totalProductos.innerHTML = `Total: $${Total}`
    addLocalStorage()
  }
 
  function eliminarProducto(e){
    const botonEliminar = e.target
    const tr = botonEliminar.closest(".ProdCarrito")
    const titulo = tr.querySelector('.titulo').textContent;
    for(let i=0; i<carrito.length ; i++){
 
      if(carrito[i].titulo.trim() === titulo.trim()){
        carrito.splice(i, 1)
       
      }
    }
 
    tr.remove()
    CarritoTotal()
  }
 
 
  function sumaCantidad(e){
    const sumarProducto  = e.target
    const tr = sumarProducto.closest(".ProdCarrito")
    const titulo = tr.querySelector('.titulo').textContent;
    
    carrito.forEach(producto => {
      if(producto.titulo.trim() === titulo){
        sumarProducto.value < 1 ?  (sumarProducto.value = 1) : sumarProducto.value;
        producto.cantidad = sumarProducto.value;
        CarritoTotal()
      }
    })
  } 
 
  function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }
 
  window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
      carrito = storage;
      renderCarrito()
    }
  }
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 