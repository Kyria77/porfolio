
document.addEventListener('DOMContentLoaded', () => {    //Este evento se activa cuando estén todos los elementos cargados
    const temaActual = localStorage.getItem('theme') || 'light';  //Guardamos en esa variable el tema actual que tiene el usuario, que lo sacamos del locaStorage. Sino, por defecto es light
    //console.log(temaActual);
    const botonTema = document.getElementById("cambiar-tema");
    const iconoLight = document.getElementById("icono-light");
    const iconoDark = document.getElementById("icono-dark");

    const actualizarIconos = (tema) => {          //1esta es la función para que aparezca el icono luna o el icono sol, dependiendo del tema que tengamos puesto
        if (tema === "dark") {
            iconoLight.style.display = 'inline';
            iconoDark.style.display = 'none';
        }else {
            iconoLight.style.display = 'none';
            iconoDark.style.display = 'inline';
        }
    }

    document.body.classList.add(temaActual + '-theme');  //Añádimos a las clases que tenga el body, la clase que esté en temaActual y la clase theme
    actualizarIconos(temaActual);

    botonTema.addEventListener('click', () => {
        document.body.classList.toggle('light-theme'); //Con esto cambiamos la clase, si está en dark, la pone en light
        //console.log(document.body.classList);
        document.body.classList.toggle('dark-theme');  //Si está en light, la pone en dark
        //console.log(document.body.classList);

        const nuevoTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light';   //Condición ternaria. Si se cumple lo que hay entre paréntesis, almacenamos dark, si no se cumple, almacenamos light
        localStorage.setItem('theme', nuevoTema);
        actualizarIconos(nuevoTema);
    })
})