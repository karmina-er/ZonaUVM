// Funciones puras para facilitar las pruebas unitarias
const pagosLogica = {
    calcularDescuento: (monto, porcentaje) => {
        if (porcentaje < 0 || porcentaje > 100) return monto;
        return monto * (1 - (porcentaje / 100));
    },

obtenerEstadoSemaforo: (fechaPago, hoy = new Date()) => {
    // Normalizar 'hoy' a medianoche local
    const todayMidnight = new Date(hoy);
    todayMidnight.setHours(0, 0, 0, 0);
    
    // Normalizar 'fechaPago' a medianoche local (sin usar UTC para evitar desfases)
    const dueDate = new Date(fechaPago);
    const dueMidnight = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
    dueMidnight.setHours(0, 0, 0, 0);
    
    const timeDiff = dueMidnight.getTime() - todayMidnight.getTime();
    // Convertir la diferencia de milisegundos a días exactos
    const daysLeft = Math.round(timeDiff / (1000 * 3600 * 24));

    if (daysLeft < 0) return "vencido";
    if (daysLeft <= 5) return "urgente";
    if (daysLeft <= 15) return "alerta";
    return "a tiempo";
}
};

// Esto permite que Jest lo lea, pero no rompe el navegador
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pagosLogica;
}