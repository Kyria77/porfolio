const presentacionContainer =document.getElementById("presentacion-container");

fetch("./assets/data/datos.json")
    .then(response => response.json())
    .then(data => {
        data.presentacion.map((item) =>{
            presentacionContainer.innerHTML += 
            `
                <img class="img-circular" src="./assets/foto.jpg" alt="foto carnet" width="1136" height="1256">
                        <h3>${item.nombre} - ${item.trabajo}</h3>
                        <p>${item.descripcion}</p>
        
                        <div class="iconos">
                            <a href=${item.linkedin} target="_blank">
                                <img class="icono" src="./assets/linkedin-svgrepo-com (2).svg" alt="icono linkedin" height="40" width="40">
                            </a>
                            <a href=${item.github} target="_blank">
                                <img class="icono" src="./assets/github-142-svgrepo-com (1).svg" alt="icono github" height="40" width="40">
                            </a>
                            <a href=${item.cvLink} target="_blank">
                                <img class="icono" src="./assets/cv-file-interface-symbol-svgrepo-com (1).svg" alt="icono curriculum" height="40" width="40">
                            </a>
                        </div>
            `
        })
    })
