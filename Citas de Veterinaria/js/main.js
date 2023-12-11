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
{ img: "./img/Reptil.jpg", tipo: "Reptil" },
{ img: "./img/OIP.jpg", tipo: "Otro" }];

function tenerimg(tipoMascotaSeleccionado) {
    let Mascen = tipoMascotas.find(mascota => mascota.tipo === tipoMascotaSeleccionado);

    if (Mascen) {
        return Mascen.img;
    }
}

let mascotas = [];
let oper = null;

function formulario() {
    let namemas = document.getElementById("nombre-mascota").value;
    let namedue = document.getElementById("nombre-dueño").value;
    let numtel = document.getElementById("num-tel").value;
    let tipo = document.getElementById("tipo-animal").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let descri = document.getElementById("descri").value;
    let imagenurl = tenerimg(tipo);


    if (oper === true) {
        mascotas[indice].nombreMascota = document.getElementById("nombre-mascota").value;
        mascotas[indice].nombreDueño = document.getElementById("nombre-dueño").value;
        mascotas[indice].telefono = document.getElementById("num-tel").value;
        mascotas[indice].tipoAnimal = document.getElementById("tipo-animal").value;
        mascotas[indice].fecha = document.getElementById("fecha").value;
        mascotas[indice].hora = document.getElementById("hora").value;
        mascotas[indice].sintomas = document.getElementById("descri").value;
    } else {
        mascotas.push({
            nombreMascota: namemas,
            nombreDueño: namedue,
            telefono: numtel,
            tipoAnimal: tipo,
            fecha: fecha,
            hora: hora,
            sintomas: descri,
            imagen: imagenurl,
            categoria: "Abierta" 
        })
    }

    document.getElementById("tipo-animal").disabled = false;
    console.log(mascotas);
    document.getElementById("nombre-mascota").value = "";
    document.getElementById("nombre-dueño").value = "";
    document.getElementById("num-tel").value = "";
    document.getElementById("tipo-animal").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("descri").value = "";
    contenedores();
    filtro()
    oper = false;
}

let categoriaActual = "Abierta";

function contenedores() {
    let fragment = document.createDocumentFragment();
    let fragmentAbierto = document.createDocumentFragment();
    let fragmentCerrado = document.createDocumentFragment();
    let fragmentCanceladas = document.createDocumentFragment();
    document.getElementById("abierto").innerHTML = "";
    document.getElementById("cerrado").innerHTML = "";
    document.getElementById("canceladas").innerHTML = "";

    mascotas.forEach((item, index) => {

        let dcontenedor = document.createElement("div");
        dcontenedor.classList.add("contened");
        let dconttex = document.createElement("div");
        dconttex.classList.add("cont-texto");
        let dvmas = document.createElement("div");
        dvmas.classList.add("mascota");
        let ifcat = document.createElement("img");
        ifcat.classList.add("fcat");
        ifcat.src = item.imagen;
        let pnombrem = document.createElement("p");
        pnombrem.textContent = item.nombreMascota;
        let dinfom = document.createElement("div");
        dinfom.classList.add("info-mas");
        let ptipo = document.createElement("p");
        ptipo.textContent = "Tipo:"
        let pntipo = document.createElement("p");
        pntipo.textContent = item.tipoAnimal;
        let cont = document.createElement("div");
        cont.classList.add("cont");
        let dpropi = document.createElement("div");
        dpropi.classList.add("propietario");
        let iuser = document.createElement("i");
        iuser.classList.add("fas", "fa-user", "mini-icon");
        let dconte = document.createElement("div");
        dconte.classList.add("conte");
        let dconte2 = document.createElement("div");
        let dconte3 = document.createElement("div");
        let dconte4 = document.createElement("div");
        let ppropi = document.createElement("p");
        ppropi.textContent = "Propietario";
        let npropi = document.createElement("p");
        npropi.textContent = item.nombreDueño;
        let dfecha = document.createElement("div");
        dfecha.classList.add("fecha");
        let ifecha = document.createElement("i");
        ifecha.classList.add("far", "fa-calendar", "mini-icon");
        let pcalen = document.createElement("p");
        pcalen.textContent = "Calendario";
        let calen = document.createElement("p");
        calen.textContent = item.fecha;
        let dcontacto = document.createElement("div");
        dcontacto.classList.add("contacto");
        let iphone = document.createElement("i");
        iphone.classList.add("fas", "fa-phone", "mini-icon");
        let pconta = document.createElement("p");
        pconta.textContent = "Contacto";
        let ncont = document.createElement("p");
        ncont.textContent = item.telefono;
        let dhora = document.createElement("div");
        dhora.classList.add("hora");
        let ihora = document.createElement("i");
        ihora.classList.add("far", "fa-clock", "mini-icon");
        let phora = document.createElement("p");
        phora.textContent = "Hora";
        let hora = document.createElement("p");
        hora.textContent = item.hora;
        let tsinto = document.createElement("h1");
        tsinto.textContent = "Sintomas:";
        let texta = document.createElement("textarea");
        texta.setAttribute("readonly", "readonly");
        texta.textContent = item.sintomas;
        texta.classList.add("texta");
        let dboton2 = document.createElement("div");
        dboton2.classList.add("botones2");
        let beditar = document.createElement("button");
        beditar.textContent = "Editar";
        beditar.classList.add("editar");
        beditar.addEventListener("click", () => {
            edicion(item, index);
        })
        let selec = document.createElement("select");
        selec.classList.add("select");
        selec.addEventListener("change", (event) => {
            cambiarCategoria(index, event.target.value);
       
        });
        let op0 = document.createElement("option");
        op0.setAttribute("disabled", "true");
        op0.setAttribute("selected", "true");
        op0.setAttribute("hidden", "true");
        op0.textContent = "Cambiar Categoria";
        let op1 = document.createElement("option");
        op1.textContent = "Abierta"
        let op2 = document.createElement("option");
        op2.textContent = "Cerrada"
        let op3 = document.createElement("option");
        op3.textContent = "Cancelada";


        dcontenedor.appendChild(dconttex);
        dconttex.appendChild(dvmas);
        dvmas.appendChild(ifcat);
        dvmas.appendChild(pnombrem);
        dvmas.appendChild(dinfom);
        dinfom.appendChild(ptipo);
        dinfom.appendChild(pntipo);
        dconttex.appendChild(cont);
        cont.appendChild(dpropi);
        dpropi.appendChild(iuser);
        dpropi.appendChild(dconte);
        dconte.appendChild(ppropi);
        dconte.appendChild(npropi);
        cont.appendChild(dfecha);
        dfecha.appendChild(ifecha);
        dfecha.appendChild(dconte2)
        dconte2.appendChild(pcalen);
        dconte2.appendChild(calen);
        cont.appendChild(dcontacto);
        dcontacto.appendChild(iphone);
        dcontacto.appendChild(dconte3);
        dconte3.appendChild(pconta);
        dconte3.appendChild(ncont);
        cont.appendChild(dhora);
        dhora.appendChild(ihora);
        dhora.appendChild(dconte4);
        dconte4.appendChild(phora);
        dconte4.appendChild(hora);
        dcontenedor.appendChild(tsinto);
        dcontenedor.appendChild(texta);
        dcontenedor.appendChild(dboton2);
        dboton2.appendChild(beditar);
        dboton2.appendChild(selec);
        selec.appendChild(op0);
        selec.appendChild(op1);
        selec.appendChild(op2);
        selec.appendChild(op3);
        fragment.appendChild(dcontenedor);
        if (item.categoria === "Abierta") {
            fragmentAbierto.appendChild(dcontenedor);
        } else if (item.categoria === "Cerrada") {
            fragmentCerrado.appendChild(dcontenedor);
        } else if (item.categoria === "Cancelada") {
            fragmentCanceladas.appendChild(dcontenedor);
        }

    });
    document.getElementById("abierto").appendChild(fragmentAbierto);
    document.getElementById("cerrado").appendChild(fragmentCerrado);
    document.getElementById("canceladas").appendChild(fragmentCanceladas);
}

function filtro() {
    const btabierto = document.querySelector(".btabierto");
    const babierto = document.querySelector(".babierto");
    const btcerrado = document.querySelector(".btcerrado");
    const bcerrado = document.querySelector(".bcerrado");
    const btcanceladas = document.querySelector(".btcanceladas");
    const bcanceladas = document.querySelector(".bcanceladas");

    btabierto.addEventListener("click", () => {
        mostrarDiv(babierto);
    });

    btcerrado.addEventListener("click", () => {
        mostrarDiv(bcerrado);
    });

    btcanceladas.addEventListener("click", () => {
        mostrarDiv(bcanceladas);
    });
}

function mostrarDiv(div) {
    const divs = document.querySelectorAll('.babierto, .bcerrado, .bcanceladas');
    divs.forEach(d => {
        if (d === div) {
            d.classList.add("active");
        } else {
            d.classList.remove("active");
        }
    });

    
    if (div.classList.contains("babierto")) {
        categoriaActual = "Abierta";
    } else if (div.classList.contains("bcerrado")) {
        categoriaActual = "Cerrada";
    } else if (div.classList.contains("bcanceladas")) {
        categoriaActual = "Cancelada";
    }

    contenedores(); 
}

function cambiarCategoria(index, nuevaCategoria) {
    const mascota = mascotas[index];
    if (mascota && mascota.categoria !== nuevaCategoria) {
        mascota.categoria = nuevaCategoria;
        contenedores();
        
    }
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

    } else if (fecha_select < fecha_actual.setHours(0, 0, 0, 0)) {
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



function edicion(item, i) {
    oper = true;
    indice = i;
    document.getElementById("nombre-mascota").value = item.nombreMascota;
    document.getElementById("nombre-dueño").value = item.nombreDueño;
    document.getElementById("num-tel").value = item.telefono;
    document.getElementById("tipo-animal").value = item.tipoAnimal;
    document.getElementById("fecha").value = item.fecha;
    document.getElementById("hora").value = item.hora;
    document.getElementById("descri").value = item.sintomas;

    document.getElementById("tipo-animal").disabled = true;
}

