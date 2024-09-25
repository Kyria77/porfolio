const navbarLinks = document.getElementById("links-navbar");  //Cogemos el div de links navbar

fetch("./assets/data/datos.json")   //Aquí recupero los datos
    .then(response => response.json())  //Entonces recibo una respuesta, y esa respuesta la quiero convertir a json
    .then(data => {                   //Entonces esta transformación se almacena en data
        data.navItems.map((link) => {   //Y desde data, puedo acceder y ya hago lo mismo que hicimos con estos datos, manejamos los datos. Nos recorre cada objeto y crea el elemento a, le pone el texto que corresponda, y además rellena el atributo href, y con esto ya tenemos hecho el nav tal cual lo teníamos en el html, y totalmente funcional
            const anchor = document.createElement("a");
            anchor.textContent = link.title;
            anchor.href = link.url;
            navbarLinks.appendChild(anchor);
        
            //navbarLinks.innerHTML += `<a href="${link.url}">${link.title}</a>`;   También se puede hacer con tan solo esta línea de código
        })
    }) 
