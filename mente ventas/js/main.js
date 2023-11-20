document.addEventListener("DOMContentLoaded", () => {
    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu = document.querySelector(".nav-menu");
    const carrito = document.querySelector(".carrito");
    const carritomenu = document.querySelector(".carrito-menu");

    carrito.addEventListener("click", () => {
        carritomenu.classList.toggle("active");
        if (carritomenu.classList.contains("active")) {
            carrito.setAttribute("aria-label", "Cerrar Carrito");
        } else {
            carrito.setAttribute("aria-label", "Abrir Carrito");
        }

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
    { id: 7, img: "./img/patriot-ssd-240.png", nombre: "Disco Duro SSD PATRIOT ", nombre_vendedor: "JTheRed", precio_anterior: 250000, precio_actual: 200000 },
    { id: 8, img: "./img/nintendo switch.jpg", nombre: "Nintendo Switch", nombre_vendedor: "David", precio_anterior: 1500000, precio_actual: 1400000},
    { id: 9, img: "./img/ps5.jpg", nombre: "Play Station 5", nombre_vendedor: "Juegos Ya", precio_anterior: 5500000, precio_actual: 2500000 },

];

let carrito = [];

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
            agretabla(item);
        });

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

function calcularTotalCarrito() {
    let total = carrito.reduce((sum, item) => sum + item.precio_total, 0);
    return total;
}

function agretabla(item) {
    const objeto = carrito.find((articulo) => articulo.id === item.id)
    if (objeto) {
        objeto.cantidad += 1
        objeto.precio_total = objeto.precio_actual * objeto.cantidad; 
    } else {
        let objetos = {
            id: item.id,
            img: item.img,
            nombre: item.nombre,
            precio_actual: item.precio_actual,
            cantidad: 1,
            precio_total: item.precio_actual 
        }
        carrito.push(objetos)
    }
    document.getElementById("carrito-tabla").innerHTML = "";
    pintarcarrito()
}

function pintarcarrito() {
    let frag = document.createDocumentFragment();

    carrito.forEach((item, index) => {
        let tr = document.createElement("tr")
        let timagen = document.createElement("td");
        let imagen = document.createElement("img");
        imagen.src = item.img;
        timagen.appendChild(imagen);
        imagen.classList.add("prev");
        let tnombre = document.createElement("td");
        tnombre.textContent = item.nombre;
        let tprecio = document.createElement("td");
        tprecio.textContent = formatCurrency(item.precio_total);
        let tcantidad = document.createElement("td");
        tcantidad.textContent = item.cantidad;
        let tvaciar = document.createElement("td");
        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.classList.add("botonele");
        boton.addEventListener("click", () => {
            borrar(index);
        })
        tr.appendChild(timagen);
        tr.appendChild(tnombre);
        tr.appendChild(tprecio);
        tr.appendChild(tcantidad);
        tr.appendChild(tvaciar);
        tvaciar.appendChild(boton);
        frag.appendChild(tr);

    })

    document.getElementById("carrito-tabla").appendChild(frag);
    const totalElement = document.getElementById("ptotal");
    totalElement.textContent = formatCurrency(calcularTotalCarrito());
    
}




function borrar(i) {
    let index = i;
    carrito.splice(index, 1);
    document.getElementById("carrito-tabla").innerHTML = "";
    pintarcarrito();
}

function vaciarcarro() {
    carrito = [];
    document.getElementById("carrito-tabla").innerHTML = "";
    pintarcarrito();
}