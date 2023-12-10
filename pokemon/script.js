document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.getElementsByName('tipo');
    const errorMensaje = document.getElementById('errorMensaje');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const seleccionados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

            if (seleccionados.length > 2) {
                errorMensaje.textContent = 'Debes seleccionar exactamente dos tipos de Pokémon.';
                this.checked = false;
            } else {
                errorMensaje.textContent = '';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fechaActual = new Date();
    const fechaElement = document.getElementById("fecha-actual");
    const opcionesDeFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesDeFecha);
    fechaElement.textContent = "Fecha: " + fechaFormateada;
});
