let num = 0;
let contenido = [];

function citas() {
    num++;
    contenido.push({
        turno: num,
        aceptado: false,
        rechazado: false,
    });
    updatedisplay();
}

function updatedisplay() {
    document.getElementById("contar").innerHTML = num;
    tablainfo();
}

function tablainfo() {
    let fragment = document.createDocumentFragment();

    contenido.forEach((item, index) => {
        let tr = document.createElement("tr");
        let tdturno = document.createElement("td");
        tdturno.classList.add("tdturno");
        let tdopciones = document.createElement("td");
        tdopciones.classList.add("tdopciones",)
        let btnaceptar = document.createElement("button");
        btnaceptar.classList.add("btnaceptar");
        btnaceptar.textContent = "Aceptar";
        btnaceptar.addEventListener("click", () => {
            document.getElementById("contarturno").innerHTML = item.turno;
            item.aceptado = true;
            item.rechazado = false;
            btnrechazar.disabled = true;
            btnaceptar.disabled = true;
        })
        let btnrechazar = document.createElement("button");
        btnrechazar.classList.add("btnrechazar");
        btnrechazar.textContent = "Rechazar";
        btnrechazar.addEventListener("click", () => {
            tdturno.style.backgroundColor = "#f88888";
            tdopciones.style.backgroundColor = "#f88888";
            tdturno.style.color = "white";
            tdturno.style.fontWeight = "bold";
            item.rechazado = true;
            item.aceptado = false;
            btnaceptar.disabled = true;
            btnrechazar.disabled = true;
          
        })
        tdturno.textContent = item.turno;
      
        if (item.aceptado) {
            document.getElementById("contarturno").innerHTML = item.turno;
            btnrechazar.disabled = true;
            btnaceptar.disabled = true;
        } else if (item.rechazado) {
            btnrechazar.disabled = true;
            btnaceptar.disabled = true;
                      tdturno.style.backgroundColor = "#f88888";
            tdopciones.style.backgroundColor = "#f88888";
            tdturno.style.color = "white";
            tdturno.style.fontWeight = "bold";
        }
        tr.appendChild(tdturno);
        tr.appendChild(tdopciones);
        tdopciones.appendChild(btnaceptar);
        tdopciones.appendChild(btnrechazar);
        fragment.appendChild(tr);
    });

    document.getElementById("contenido").innerHTML = "";
    document.getElementById("contenido").appendChild(fragment);
}

