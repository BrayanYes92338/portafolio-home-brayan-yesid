document.addEventListener("DOMContentLoaded", function() {
    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu = document.querySelector(".nav-menu");
    const carritoMenu = document.querySelector(".carrito-menu");
    const tablaCarrito = document.querySelector(".carrito-menu table");
    const carritoButton = document.querySelector(".carrito");

    // Verificar si hay datos guardados en el almacenamiento local
    const carritoData = localStorage.getItem("carritoData");

    if (carritoData) {
        tablaCarrito.innerHTML = carritoData;
        carritoMenu.style.display = "block";
    } else {
        carritoMenu.style.display = "none";
    }

    navtoggle.addEventListener("click", () => {
        navmenu.classList.toggle("nav-menu_visible");
        carritoMenu.style.display = "none";
    });

    carritoButton.addEventListener("click", (event) => {
        carritoMenu.style.display = (carritoMenu.style.display === "none" || carritoMenu.style.display === "") ? "block" : "none";
        navmenu.classList.remove("nav-menu_visible");
        event.stopPropagation();
    });

    tablaCarrito.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Guardar datos de la tabla del carrito en el almacenamiento local al cerrar la página
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("carritoData", tablaCarrito.innerHTML);
    });

    document.addEventListener("click", () => {
        carritoMenu.style.display = "none";
    });
});
