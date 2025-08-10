document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario');
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function (e) {
        let valido = true;
        let errores = [];

        //Validaciones
        // Nombre
        const nombreVal = nombre.value.trim();
        if (!nombreVal) {
            valido = false;
            errores.push('El nombre es obligatorio.');
        } else {
            const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if (!soloLetras.test(nombreVal)) {  
                valido = false;
                errores.push('El nombre solo puede contener letras y espacios.');
            }
        }

        // Teléfono 
        const telefonoVal = telefono.value.trim().replace(/\D/g, ''); 
        if (!/^\d{10,}$/.test(telefonoVal)) {
            valido = false;
            errores.push('El teléfono debe tener al menos 10 dígitos y solo números.');
        }

        // Correo
        const correoVal = correo.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoVal)) {
            valido = false;
            errores.push('El correo no es válido. Ejemplo: usuario@dominio.com');
        }

        // Mensaje
        if (!mensaje.value.trim()) {
            valido = false;
            errores.push('El mensaje es obligatorio.');
        }

        // Mostrar errores
        if (!valido) {
            e.preventDefault();
            alert(errores.join('\n'));
        }
    });
});