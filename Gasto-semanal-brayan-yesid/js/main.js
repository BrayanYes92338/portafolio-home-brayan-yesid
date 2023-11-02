function formatCurrency(amount) {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });
}


let saldo = 0;
let preinicial = 0;
function presupuestoEstablecido() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    const botonInput = document.getElementById('boton-input');
    const enviarPresuBtn = document.getElementById('enviar-presu-btn');
    const alerta = document.getElementById('alert');
    const closeModalBtn = document.querySelector('.closeicon');
    botonInput.addEventListener('input', () => {
        if (isNaN(botonInput.value) || botonInput.value <= 0 || botonInput.value.trim() === "") {
            enviarPresuBtn.disabled = true;
            alerta.textContent = "Ingresa un número  válido.";
            setTimeout(() => {
                alerta.textContent = "";
            }, 5000);
        } else {
            enviarPresuBtn.disabled = false;

        }
    });


    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        info2.classList.add("active");
        document.getElementById("mini2").textContent = "No has establecido un presupuesto por ende se han bloqueado los campos"
        document.getElementById("articulo").disabled = true;
        document.getElementById("Precio").disabled = true;
        document.getElementById("okboton").disabled = true;
    });

    enviarPresuBtn.addEventListener('click', () => {

    
        
        preinicial = parseFloat(botonInput.value);
        saldo = preinicial
        document.getElementById("presupuestoini").textContent = formatCurrency(preinicial);
        document.getElementById("saldo").textContent = formatCurrency(preinicial);
        modal.classList.remove('active');
        info.classList.add("active");
        document.getElementById("mini").textContent = "Presupuesto establecido correctamente"
        setTimeout(() => {
            document.getElementById("mini").textContent = "";
            info.classList.remove("active");
        }, 5000);
        document.getElementById("articulo").disabled = false;
        document.getElementById("Precio").disabled = false;
        document.getElementById("okboton").disabled = false;
    });

}


document.addEventListener("DOMContentLoaded", () => {
    presupuestoEstablecido();


});


let articulos = [];
let indice = null;

function establecerpre(oper) {
    let articulo = document.getElementById("articulo").value;
    let precio = parseFloat(document.getElementById("Precio").value);
    const porcentajeGastado = ((saldo / preinicial) * 100).toFixed(2);
    const datosPre2 = document.querySelector('.datos-pre2');

    if (porcentajeGastado >= 80) {
        datosPre2.classList.add("active")
        datosPre2.classList.remove('alr', 'ala');
        datosPre2.classList.add('alv');
    } else if (porcentajeGastado >= 50) {
        datosPre2.classList.add("active")
        datosPre2.classList.remove('alv', 'alr');
        datosPre2.classList.add('ala');
    } else {
        datosPre2.classList.add("active")
        datosPre2.classList.remove('ala', 'alv');
        datosPre2.classList.add('alr');
    }

    if (isNaN(precio) || precio <= 0 || articulo.trim() === "") {
        alertas();
        return;
    }

    if (saldo - precio >= 0) {
        if (oper !== true) {
            articulos.push({
                articulo: articulo,
                precio: precio,
            });
        }
        saldo -= precio;
        document.getElementById("saldo").textContent = formatCurrency(saldo);
    } else {
        alertas();
        return;
    }

    document.getElementById("articulo").value = "";
    document.getElementById("Precio").value = "";

    console.log(articulos);
    document.getElementById("tabla").innerHTML = "";
    tabla();
}

function alertas(estaEnvPresup) {
    const aceptar = document.querySelector(".botonmini");
    const aceptar2 = document.querySelector(".botonmini2");
    const info = document.querySelector(".info");
    const info2 = document.querySelector(".info2");
    const cierre = document.querySelector(".iconocierre");
    const cierre2 = document.querySelector(".iconocierre2");
    const mini = document.getElementById("mini");
    const mini2 = document.getElementById("mini2");


    if (saldo <= 0 && !estaEnvPresup) {
        document.getElementById("okboton").disabled = true;
        info2.classList.add("active");
        document.getElementById("mini2").textContent = "Se ha acabado el presupuesto";
        setTimeout(() => {
            document.getElementById("mini2").textContent = "";
            info2.classList.remove("active");
        }, 5000);
    }

    if (document.getElementById("articulo").value == "" && !estaEnvPresup) {
        info2.classList.add("active");
        document.getElementById("mini2").textContent = "No has ingresado el nombre del articulo"
        setTimeout(() => {
            document.getElementById("mini2").textContent = "";
            info2.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("Precio").value == "" && !estaEnvPresup) {
        info2.classList.add("active");
        document.getElementById("mini2").textContent = "No has ingresado el precio del articulo"
        setTimeout(() => {
            document.getElementById("mini2").textContent = "";
            info2.classList.remove("active");
        }, 5000);
    } else if (isNaN(document.getElementById("Precio").value) == true && !estaEnvPresup) {
        info2.classList.add("active");
        document.getElementById("mini2").textContent = "El campo de precio debe ser un numero"
        setTimeout(() => {
            document.getElementById("mini2").textContent = "";
            info2.classList.remove("active");
        }, 5000);

    } else if(/\d/.test(document.getElementById("articulo").value) && !estaEnvPresup) {
        info2.classList.add("active");
        document.getElementById("mini2").textContent = "El campo de articulo no debe tener numeros"
        setTimeout(() => {
            document.getElementById("mini2").textContent = "";
            info2.classList.remove("active");
        }, 5000);
    }else if(parseFloat(document.getElementById("Precio").value) > saldo && !estaEnvPresup){
            info2.classList.add("active");
            document.getElementById("mini2").textContent = "El precio del articulo no debe ser mayor al saldo"
            setTimeout(() => {
                document.getElementById("mini2").textContent = "";
                info2.classList.remove("active");
            }, 5000);
    }else if (!estaEnvPresup) {
        establecerpre(false)
        document.getElementById("mini").textContent = "Se ha agregado el articulo correctamente"
        info.classList.add("active");
        setTimeout(() => {
            document.getElementById("mini").textContent = "";
            info.classList.remove("active");
        }, 5000);
    }

    aceptar.addEventListener("click", () => {
        info.classList.remove("active");
    });

    aceptar2.addEventListener("click", () => {
        info2.classList.remove("active");
    });

    cierre.addEventListener("click", () => {
        info.classList.remove("active");
    });

    cierre2.addEventListener("click", () => {
        info2.classList.remove("active");
    })

    document.addEventListener("click", (event) => {
        if (event.target === info) {
            info.classList.remove("active");
        } else if (event.target === info2) {
            info2.classList.remove("active");
        }
    })

}

function tabla() {
    let frag = document.createDocumentFragment();
    articulos.forEach((item, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let borrar = document.createElement("button");
        borrar.textContent = "Borrar";
        borrar.addEventListener("click", () => {
            eliminar(index)
        });

        td1.textContent = item.articulo;
        td2.textContent = formatCurrency(item.precio);
        td3.appendChild(borrar);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        frag.appendChild(tr);
        document.getElementById("tabla").appendChild(frag);
    });

}

function eliminar(i) {
    index = i
    const precioEliminado = articulos[index].precio;
    let montoTotalEliminado = precioEliminado;
    articulos.splice(index, 1);

    for (let i = 0; i < articulos.length; i++) {
        montoTotalEliminado += articulos[i].precio;
    }
    saldo += precioEliminado;
    document.getElementById("saldo").textContent = formatCurrency(saldo);
    document.getElementById("tabla").innerHTML = "";
    tabla();
    if (saldo > 0) {
        document.getElementById("okboton").disabled = false;
    }

}