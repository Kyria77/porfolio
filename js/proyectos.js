const proyectoContainer = document.getElementById("grid-2");

fetch("./assets/data/datos.json")
    .then(response => response.json())
    .then(data => {
        data.proyectos.map((item) =>{
            proyectoContainer.innerHTML +=
            `
                <a href=${item.url} target="_blank">
                    <div class="proyectos-container" style="background-image: url(${item.imagen})">
                        <div class="descripcion">
                            <h3>${item.nombre}</h3>
                            <p>${item.descripcion}</p>
                            <small>${item.tecnologias}</small>
                        </div>
                    </div>
                </a>
            `
        })
    })
