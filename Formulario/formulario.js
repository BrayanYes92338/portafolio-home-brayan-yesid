let registros = [];
let oper = null;
let indice = null;

function formulario() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let birthdate = document.getElementById("birthdate").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let documenttype = document.getElementById("documentType").value;
    let documentnumber = document.getElementById("documentNumber").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let termsAndConditions = document.getElementById("termsAndConditions").checked;
    let genero = 0;
    if (male) {
        genero = "Masculino";
    } else if (female) {
        genero = "Femenino";
    }
    let acepta = 0;
    if (termsAndConditions) {
        acepta = "Acepta";
    } else {
        acepta = "No acepta";
    }

    if (oper === true) {
        registros[indice].name = document.getElementById("name").value;
        registros[indice].lastname = document.getElementById("lastname").value;
        registros[indice].birthdate = document.getElementById("birthdate").value;
        registros[indice].phone = document.getElementById("phone").value;
        registros[indice].email = document.getElementById("email").value;
        registros[indice].documenttype = document.getElementById("documentType").value;
        registros[indice].documentnumber = document.getElementById("documentNumber").value;
        registros[indice].male = document.getElementById("male").checked;
        registros[indice].female = document.getElementById("female").checked;
        registros[indice].termsAndConditions = document.getElementById("termsAndConditions").checked;
    } else {
        registros.push({
            name: name,
            lastname: lastname,
            birthdate: birthdate,
            phone: phone,
            email: email,
            documenttype: documenttype,
            documentnumber: documentnumber,
            genero: genero,
            male: male,
            female: female,
            acepta: acepta,
        })
    }


    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("documentType").value = "";
    document.getElementById("documentNumber").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("termsAndConditions").checked = false;


    console.log(registros);
    document.getElementById("tabla").innerHTML = ""

    tabla();
    oper = false


}

let registros_menor = [];

function formulario_menor() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let birthdate = document.getElementById("birthdate").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let documenttype = document.getElementById("documentType").value;
    let documentnumber = document.getElementById("documentNumber").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let termsAndConditions = document.getElementById("termsAndConditions").checked;
    let genero = 0;
    if (male) {
        genero = "Masculino";
    } else if (female) {
        genero = "Femenino";
    }
    let acepta = 0;
    if (termsAndConditions) {
        acepta = "Acepta";
    } else {
        acepta = "No acepta";
    }

    let registro_menor = {
        name_menor: name,
        lastname_menor: lastname,
        birthdate_menor: birthdate,
        phone_menor: phone,
        email_menor: email,
        documenttype_menor: documenttype,
        documentnumber_menor: documentnumber,
        genero_menor: genero,
        acepta_menor: acepta
    };

    registros_menor.push(registro_menor);

}

function validar() {
    event.preventDefault();
    const tryagain = document.querySelector(".okbtn");
    const tryagain2 = document.querySelector(".okbtn2");
    const tryagain3 = document.querySelector(".okbtn3");
    const modal = document.querySelector(".modal");
    const modal2 = document.querySelector(".modal2");
    const modal3 = document.querySelector(".modal3");
    const closeicon = document.querySelector(".closeicon");
    const closeicon2 = document.querySelector(".closeicon2");
    const closeicon3 = document.querySelector(".closeicon3");
    const alert = document.getElementById("alert");
    const alert2 = document.getElementById("alert");
    const alert3 = document.getElementById("alert3");
    const fecha_nacimiento = new Date(document.getElementById("birthdate").value);
    const fecha_actual = new Date();
    const edaduser = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
    const selectedDocumentType = document.getElementById("documentType").value;
    const termsAndConditions = document.getElementById("termsAndConditions").checked;
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    if (document.getElementById("name").value == "") {
        document.getElementById("alert").textContent = "Por favor ingrese su nombre";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("lastname").value == "") {
        document.getElementById("alert").textContent = "Por favor ingrese su apellido";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("birthdate").value == "") {
        document.getElementById("alert").textContent = "Por favor ingrese su fecha de nacimiento";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (edaduser < 18) {
        formulario_menor()
        document.getElementById("alert3").textContent = "Debe ser mayor de edad para poder registrarse";
        modal3.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert3").textContent = "";
            modal3.classList.remove("active");
        }, 5000);

    } else if (document.getElementById("phone").value == "") {
        document.getElementById("alert").textContent = "El campo telefono es obligatorio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (isNaN(document.getElementById("phone").value) == true) {
        formulario_menor()
        document.getElementById("alert").textContent = "El campo telefono debe contener solo números";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("phone").value.length < 8) {
        formulario_menor()
        document.getElementById("alert3").textContent = "El campo telefono debe contener al menos 8 números";
        modal3.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert3").textContent = "";
            modal3.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("email").value == "") {
        document.getElementById("alert").textContent = "El campo email es obligatorio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)) {
        formulario_menor()
        document.getElementById("alert3").textContent = "Debes ingresar un correo valido";
        modal3.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert3").textContent = "";
            modal3.classList.remove("active");
        }, 5000);
    } else if (selectedDocumentType === "") {
        formulario_menor()
        document.getElementById("alert").textContent = "El campo tipo de documento es obligatorio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else if (document.getElementById("documentNumber").value == "") {
        formulario_menor()
        document.getElementById("alert").textContent = "El campo numero de documento es obligatorio";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (isNaN(document.getElementById("documentNumber").value) == true) {
        formulario_menor()
        document.getElementById("alert3").textContent = "El campo numero de documento debe contener solo números";
        modal3.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert3").textContent = "";
            modal3.classList.remove("active");
        }, 5000);
    } else if (!male && !female) {
        document.getElementById("alert").textContent = "Debe seleccionar un genero para poderse registrar";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);

    } else if (!termsAndConditions) {
        document.getElementById("alert").textContent = "Debe aceptar los terminos y condiciones para poderse registrar";
        modal.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert").textContent = "";
            modal.classList.remove("active");
        }, 5000);
    } else {
        formulario();
        document.getElementById("alert2").textContent = "El formulario se ha enviado correctamente";
        modal2.classList.add("active");
        setTimeout(() => {
            document.getElementById("alert2").textContent = "";
            modal2.classList.remove("active");
        }, 5000);
    }

    tryagain.addEventListener("click", () => {
        modal.classList.remove("active");

    });

    tryagain2.addEventListener("click", () => {
        modal2.classList.remove("active");
    });

    tryagain3.addEventListener("click", () => {
        modal3.classList.remove("active");
    });


    closeicon.addEventListener("click", () => {
        modal.classList.remove("active");

    });

    closeicon2.addEventListener("click", () => {
        modal2.classList.remove("active");
    });

    closeicon3.addEventListener("click", () => {
        modal3.classList.remove("active");
    });

    document.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
        } else if (event.target === modal2) {
            modal2.classList.remove("active");
        } else if (event.target === modal3) {
            modal3.classList.remove("active");
        }
    });

}


function tabla() {
    let frag = document.createDocumentFragment()

    registros.forEach((item, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");
        let editar = document.createElement("button");
        let borrar = document.createElement("button");
        editar.textContent = "📝"
        editar.addEventListener("click", () => {
            edicion(item, index)
        });
        borrar.textContent = "❌"
        borrar.addEventListener("click", () => {
            eliminar(index)
        });
        td1.textContent = item.name,
        td2.textContent = item.lastname,
        td3.textContent = item.birthdate,
        td4.textContent = item.phone,
        td5.textContent = item.email,
        td6.textContent = item.documenttype,
        td7.textContent = item.documentnumber,
        td8.textContent = item.male ? "Masculino" : "Femenino",
        td9.appendChild(editar)
        td9.appendChild(borrar)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        frag.appendChild(tr)
        document.getElementById("tabla").appendChild(frag)

    });

}

function edicion(r, i) {
    oper = true
    indice = i
    console.log(r);
    document.getElementById("name").value = r.name;
    document.getElementById("lastname").value = r.lastname;
    document.getElementById("birthdate").value = r.birthdate;
    document.getElementById("phone").value = r.phone;
    document.getElementById("email").value = r.email;
    document.getElementById("documentType").value = r.documenttype;
    document.getElementById("documentNumber").value = r.documentnumber;
    document.getElementById("male").checked = r.male;
    document.getElementById("female").checked = r.female;
    document.getElementById("termsAndConditions").checked = r.termsAndConditions;

}

function eliminar(i){
    index=i
registros.splice(index,1);
document.getElementById("tabla").innerHTML = "";
tabla();

}