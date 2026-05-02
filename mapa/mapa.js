// Esta es la lógica que el test de mapa va a revisar
function obtenerAlertasCampus() {
    return [
        { descripcion: "Tráfico pesado en entrada principal" },
        { descripcion: "Evento en el auditorio" }
    ];
}

module.exports = { obtenerAlertasCampus }; // Exportación necesaria para Jest