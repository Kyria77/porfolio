const proyectoContainer = document.getElementById("grid-2");

fetch("./assets/data/datos.json")
    .then(response => response.json())
    .then(data => {
        data.proyectos.map((item) =>{
            proyectoContainer.innerHTML +=
            `
                <div class="proyectos-container" style="background-image: url(${item.imagen})">
                    <a href=${item.url}></a>
                    <div class="descripcion">
                        <h3>${item.nombre}</h3>
                        <p>${item.descripcion}</p>
                        <small>${item.tecnologias}</small>
                    </div>
                </div>
            `
        })
    })
