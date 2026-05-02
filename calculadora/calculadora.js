// logic.js - Historia 4: Calculadora de Promedio

function calcularPromedio(calificaciones) {
    if (!calificaciones || calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acc, val) => acc + val, 0);
    const promedio = suma / calificaciones.length;
    return parseFloat(promedio.toFixed(2));
}

function obtenerEstatus(promedio) {
    return promedio >= 6.0 ? "APROBADO" : "REPROBADO";
}

function validarCalificacion(calificacion) {
    return calificacion >= 0 && calificacion <= 10;
}

// Exportamos las funciones para que la prueba las pueda leer
module.exports = { calcularPromedio, obtenerEstatus, validarCalificacion };