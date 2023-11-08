document.addEventListener("DOMContentLoaded", () => {
    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu = document.querySelector(".nav-menu");
    const carritoBtn = document.querySelector('.carrito');
    const carritoMenu = document.querySelector('.carrito-menu');

    carritoBtn.addEventListener('click', () => {
        carritoMenu.classList.toggle('visible');
    });

    navtoggle.addEventListener("click", () => {
        navmenu.classList.toggle("nav-menu_visible");
        if (navmenu.classList.contains("nav-menu_visible")) {
            navtoggle.setAttribute("aria-label", "Cerrar Menu");
        } else {
            navtoggle.setAttribute("aria-label", "Abrir Menu");
        }
    });
    articulos();
})

function formatCurrency(amount) {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });
}

let productos = [
    { id: 1, img: "./img/camisa-negra.jpg", nombre: "Camisa Negra de Algodon", nombre_vendedor: "Juan Lopez", precio_anterior: 24000, precio_actual: 18000 },
    { id: 2, img: "./img/reloj.png", nombre: "Reloj de Pulso", nombre_vendedor: "Luis Angel Jimenez", precio_anterior: 524000, precio_actual: 480000 },
    { id: 3, img: "./img/jordan.jpg", nombre: "Tenis Jordan", nombre_vendedor: "Criss", precio_anterior: 240000, precio_actual: 180000 },
    { id: 4, img: "./img/control xbox.jpg", nombre: "Control Xbox", nombre_vendedor: "Player fan de amphibia", precio_anterior: 150000, precio_actual: 145000 },
    { id: 5, img: "./img/R.jpg", nombre: "Gibson SG modelo standart", nombre_vendedor: "Bauti", precio_anterior: 12400000, precio_actual: 11800000 },
    { id: 6, img: "./img/hoodie.jpg", nombre: "Sudadera Amphibia Team Marcy", nombre_vendedor: "Player fan de amphibia", precio_anterior: 130000, precio_actual: 90000 },
    { id: 7, img: "./img/patriot-ssd-240.png", nombre: "Disco Duro SSD PATRIOT Burst de 240GB", nombre_vendedor: "JTheRed", precio_anterior: 250000, precio_actual: 200000 },
    { id: 8, img: "./img/nintendo switch.jpg", nombre: "Nintendo Switch", nombre_vendedor: "David", precio_anterior: 1500000, precio_actual: 1400000 },
];



function articulos() {
    let fragment = document.createDocumentFragment();

    productos.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("contenedor");
        let img = document.createElement("img");
        img.src = item.img;
        img.classList.add("imag");
        let divp = document.createElement("div");
        divp.classList.add("palabras")
        let h2 = document.createElement("h2");
        h2.classList.add("n-articulo")
        h2.textContent = item.nombre;
        let nv = document.createElement("p");
        nv.classList.add("n-vendedor");
        nv.textContent = item.nombre_vendedor;
        let divpun = document.createElement("div");
        divpun.classList.add("puntuacion");
        let i1 = document.createElement("i");
        i1.classList.add("fas", "fa-star");
        let i2 = document.createElement("i");
        i2.classList.add("fas", "fa-star");
        let i3 = document.createElement("i");
        i3.classList.add("fas", "fa-star");
        let i4 = document.createElement("i");
        i4.classList.add("fas", "fa-star-half-alt");
        let i5 = document.createElement("i");
        i5.classList.add("far", "fa-star");
        let preci = document.createElement("div");
        preci.classList.add("precios");
        let pa = document.createElement("p");
        pa.classList.add("p-anterior")
        let p = document.createElement("p");
        p.classList.add("p-actual")
        pa.textContent = formatCurrency(item.precio_anterior);
        p.textContent = formatCurrency(item.precio_actual);
        let button = document.createElement("button");
        button.classList.add("boton");
        button.textContent = "Agregar al Carrito";
        button.addEventListener("click", () => {
            console.log(item.id);
        })
        div.appendChild(img);
        div.appendChild(divp);
        divp.appendChild(h2);
        divp.appendChild(nv);
        divp.appendChild(divpun);
        divpun.appendChild(i1);
        divpun.appendChild(i2);
        divpun.appendChild(i3);
        divpun.appendChild(i4);
        divpun.appendChild(i5);
        divp.appendChild(preci);
        preci.appendChild(pa);
        preci.appendChild(p);
        divp.appendChild(button);
        fragment.appendChild(div);
    })
    document.getElementById("contenedores").appendChild(fragment)

};