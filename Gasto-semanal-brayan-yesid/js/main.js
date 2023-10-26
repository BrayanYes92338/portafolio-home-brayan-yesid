function formatCurrency(amount) {

    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'USD' });
}

function presupuestoEstablecido() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');

    const botonInput = document.getElementById('boton-input');
    const enviarPresuBtn = document.getElementById('enviar-presu-btn'); 
    const alerta = document.getElementById('alert');

    botonInput.addEventListener('input', function() { 
        if (isNaN(botonInput.value) || parseFloat(botonInput.value) <= 0 || botonInput.value.trim() === "") {
            enviarPresuBtn.disabled = true;
            alerta.textContent = "Ingresa un número  válido.";
            setTimeout(function() {
                alerta.textContent = "";
            }, 5000);
        } else {
            enviarPresuBtn.disabled = false;
            alertas();
        }
    });

    const closeModalBtn = document.querySelector('.closeicon');
    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    enviarPresuBtn.addEventListener('click', function() {
        const preinicial = parseFloat(botonInput.value);
        const saldores = preinicial;
        document.getElementById("presupuestoini").textContent = formatCurrency(preinicial);
        modal.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    presupuestoEstablecido();

    
});

function alertas(){
 const minialert = document.getElementById('mini-alert');
        minialert.textContent = "Se ha ingresado el presupuesto de manera existosa";
    setTimeout(function() {
        minialert.textContent = "";
    }, 6000);
}