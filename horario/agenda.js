// Función que valida que los eventos tengan nombre
function validarEvento(evento) {
    if (!evento.nombre || evento.nombre.trim() === "") {
        return false;
    }
    return true;
}

// Esta línea es la que conecta este archivo con el de pruebas
module.exports = { validarEvento };