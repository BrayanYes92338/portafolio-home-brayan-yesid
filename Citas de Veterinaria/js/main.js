document.addEventListener("DOMContentLoaded", function () {
    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu = document.querySelector(".nav-menu");

    navtoggle.addEventListener("click", () => {
        navmenu.classList.toggle("nav-menu_visible");
    });

    bform();
});

function bform() {
    const form = document.querySelector(".form");
    const cerrar = document.querySelector(".cerrar");
    const boton = document.querySelector(".boton");
    const bcerrar = document.querySelector(".boton-cerrar");
    const add = document.querySelector(".boton-agregar");

    boton.addEventListener("click", () => {
        form.classList.add("active");
        if (form.classList.contains("active")) {
            boton.setAttribute("aria-label", "Cerrar Formulario");
        } else {
            boton.setAttribute("aria-label", "Abrir Formulario");
        }
    })

    cerrar.addEventListener("click", () => {
        form.classList.remove("active");
    })

    bcerrar.addEventListener("click", (event) => {
        event.preventDefault();
        form.classList.remove("active");
    })

    add.addEventListener("click", (event) => {
        event.preventDefault();

    })

}

let tipoMascotas = [{ img: "./img/istockphoto-963071796-170667a.jpg", tipo: "Perro" },
{ img: "./img/R.jpg", tipo: "Gato" },
{ img: "./img/depositphotos_152522110-stock-illustration-cute-blue-bird-cartoon-flying.jpg", tipo: "Ave" },
{ img: "./img/R(1).jpg", tipo: "Reptil" },
{ img: "./img/OIP.jpg", tipo: "Otro" }];

let mascotas = [];
let indice = null;
let oper = null;

function formulario() {
    let namemas = document.getElementById("nombre-mascota").value;
    let namedue = document.getElementById("nombre-dueño").value;
    let numtel = document.getElementById("num-tel").value;
    let tipo = document.getElementById("tipo-animal").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let descri = document.getElementById("descri").value;

    if(oper === true){
        mascotas[indice].nombreMascota = document.getElementById("nombre-mascota").value;
        mascotas[indice].nombreDueño = document.getElementById("nombre-dueño").value;
        mascotas[indice].telefono = document.getElementById("num-tel").value;
        mascotas[indice].tipoAnimal = document.getElementById("tipo-animal").value;
        mascotas[indice].fecha = document.getElementById("fecha").value;
        mascotas[indice].hora = document.getElementById("hora").value;
        mascotas[indice].sintomas = document.getElementById("descri").value;
    }else {
        mascotas.push({
            nombreMascota: namemas,
            nombreDueño: namedue,
            telefono: numtel,
            tipoAnimal: tipo,
            fecha: fecha,
            hora: hora,
            sintomas: descri
        })
    }
    console.log(mascotas);

}


function alertas() {
    const modal = document.querySelector(".modal");
    const modal2 = document.querySelector(".modal2");
    const boton = document.querySelector(".okbtn");
    const boton2 = document.querySelector(".okbtn2");
    const closeicon = document.querySelector(".closeicon");
    const closeicon2 = document.querySelector(".closeicon2");
    const alert = document.querySelector(".alert");
    const alert2 = document.querySelector(".alert2");
    let texto = /^[A-Za-zÁÉÍÓÚáéíóúñÑüÜ\s]+$/;
    let tipoa = document.getElementById("tipo-animal").value;
    let fecha_actual = new Date();
    let fecha_select = new Date(document.getElementById("fecha").value);
    let hora_select = document.getElementById("hora").value;
    let vhora = parseInt(hora_select.split(":")[0], 10);
    let vmin = parseInt(hora_select.split(":")[1], 10);
    const horaLimite = 17;
    const minLimite = 45;


    boton.addEventListener("click", () => {
        modal.classList.remove("active");
    })

    boton2.addEventListener("click", () => {
        modal2.classList.remove("active");
    })

    closeicon.addEventListener("click", () => {
        modal.classList.remove("active");
    })

    closeicon2.addEventListener("click", () => {
        modal2.classList.remove("active");
    })


    document.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        } else if (e.target === modal2) {
            modal2.classList.remove("active");
        }
    })

    if (document.getElementById("nombre-mascota").value == "") {
        document.getElementById("alert").textContent = "El campo nombre no puede estar vacio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (!texto.test(document.getElementById("nombre-mascota").value)) {
        document.getElementById("alert").textContent = "El campo nombre no puede tener numeros";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (document.getElementById("nombre-dueño").value == "") {
        document.getElementById("alert").textContent = "El campo nombre del dueño no puede estar vacio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (!texto.test(document.getElementById("nombre-dueño").value)) {
        document.getElementById("alert").textContent = "El campo nombre del dueño no puede tener numeros";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (document.getElementById("num-tel").value == "") {
        document.getElementById("alert").textContent = "El campo telefono no puede estar vacio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (isNaN(document.getElementById("num-tel").value) == true) {
        document.getElementById("alert").textContent = "El campo telefono debe ser numerico";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (document.getElementById("num-tel").value.length != 10) {
        document.getElementById("alert").textContent = "El campo telefono debe tener 10 digitos";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);


    } else if (tipoa == "") {
        document.getElementById("alert").textContent = "Debe seleccionar un tipo de animal";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (document.getElementById("fecha").value == "") {
        document.getElementById("alert").textContent = "Debe seleccionar una fecha";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (fecha_select < fecha_actual) {
        document.getElementById("alert").textContent = "La fecha seleccionada no puede ser menor a la fecha actual";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("hora").value == "") {
        document.getElementById("alert").textContent = "Debe seleccionar una hora";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (vhora < 8 || vhora > horaLimite || (vhora === horaLimite && vmin > minLimite)) {
        document.getElementById("alert").textContent = "Haz seleccionado una hora fuera del horario de atencion (8:00 am - 5:45 pm)";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (document.getElementById("descri").value == "") {
        document.getElementById("alert").textContent = "El campo de Sintomas no puede estar vacio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else {
        formulario();
        document.getElementById("alert2").textContent = "Se ha registrado correctamente";
        modal2.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert2").textContent = "";
            modal2.classList.remove("active");
        }, 5000);
    }
}

