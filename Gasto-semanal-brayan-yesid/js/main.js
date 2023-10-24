document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    
    const closeModalBtn = document.querySelector('.closeicon');
    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
});