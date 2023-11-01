function formatCurrency(amount) {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });
}


let saldo=0;

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
      
        const preinicial = parseFloat(botonInput.value);

        saldo= preinicial
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
    let precio = document.getElementById("Precio").value;

    if (isNaN(precio) || precio <= 0 || articulo.trim() === "") {
        alertas()
    } else {
        if (oper === true) {
           
        } else {
            articulos.push({
                articulo: articulo,
                precio: precio,
            });
        }
        saldo -= precio;

        document.getElementById("saldo").textContent = formatCurrency(saldo); 
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

    } else if (!estaEnvPresup) {
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
        td2.textContent = item.precio;
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
    articulos.splice(indice, 1);
    document.getElementById("tabla").innerHTML = "";
    tabla();
}