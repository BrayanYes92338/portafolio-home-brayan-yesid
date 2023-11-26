document.addEventListener("DOMContentLoaded", function () {
    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu = document.querySelector(".nav-menu");

    navtoggle.addEventListener("click", () => {
        navmenu.classList.toggle("nav-menu_visible");
        if (navmenu.classList.contains("nav-menu_visible")) {
            navtoggle.setAttribute("aria-label", "Cerrar Menu");
        } else {
            navtoggle.setAttribute("aria-label", "Abrir Menu");
        }
    });

    bform();
});

function bform() {
    const form = document.querySelector(".form");
    const cerrar = document.querySelector(".cerrar");
    const boton = document.querySelector(".boton");
    const bcerar = document.querySelector(".boton-cerrar");

    boton.addEventListener("click", () => {
        form.classList.toggle("active");
        if (form.classList.contains("active")) {
            boton.setAttribute("aria-label", "Cerrar Formulario");
        } else {
            boton.setAttribute("aria-label", "Abrir Formulario");
        }
    })

    cerrar.addEventListener("click", () => {
        form.classList.remove("active");
    })

    bcerar.addEventListener("click", () => {
        form.classList.remove("active");
    })


}