  let indicador = window.matchMedia("(max-width: 800px)");
  let menu = document.getElementById("menu");
  

if(indicador.matches){ 

    menu.innerHTML =
    ` <nav class="navbar navbar-expand-lg navbar-light bg-none" id="menu">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"  style=" font-family: 'Italiana', serif;">Timea</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Ss2022</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="href="./paginas/carrito.html"">Ella</a>
                </li>  
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=href="./paginas/carrito.html">Tienda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contacto">Contacto</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Unete</a>
                </li>
            </ul>
          </div>
        </div>
    </nav>


    `
    };
