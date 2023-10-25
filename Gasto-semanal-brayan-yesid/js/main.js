
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');

    const botoninput = document.getElementById('boton-input');
    const enviarbtn = document.getElementById('enviar-btn');
    const alerta = document.getElementById('alert');

    botoninput.addEventListener('input', function() { 
        if (isNaN(botoninput.value) || parseFloat(botoninput.value) <= 0 || botoninput.value.trim() === "") {
            enviarbtn.disabled = true;
            alerta.textContent = "Ingresa un número positivo válido.";
            setTimeout(function() {
                alerta.textContent = "";
            }, 5000);
        } else {
            enviarbtn.disabled = false;
        }
    });

    const closeModalBtn = document.querySelector('.closeicon');
    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    let presupuesto = 0;

    function establecerpre() {
        presupuesto = document.getElementById("infopresu").value;
        document.getElementById("presupuestoini").textContent = formatCurrency(presupuesto);
    }
});
