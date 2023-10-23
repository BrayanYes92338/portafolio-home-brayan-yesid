document.addEventListener("DOMContentLoaded", function() {
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
});
