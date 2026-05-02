// logic.test.js - Pruebas Unitarias para Historia 4
const { calcularPromedio, obtenerEstatus, validarCalificacion } = require('./calculadora');

describe('Pruebas Unitarias - Historia 4: Calculadora de Promedio', () => {
    
    test('calcula el promedio correctamente', () => {
        expect(calcularPromedio([8, 9, 10])).toBe(9);
        expect(calcularPromedio([7.5, 8.5, 6.0])).toBe(7.33); 
    });

    test('determina el estatus APROBADO si el promedio es >= 6.0', () => {
        expect(obtenerEstatus(6.0)).toBe("APROBADO");
        expect(obtenerEstatus(8.5)).toBe("APROBADO");
    });

    test('determina el estatus REPROBADO si el promedio es < 6.0', () => {
        expect(obtenerEstatus(5.9)).toBe("REPROBADO");
    });

    test('valida correctamente los límites (0 a 10)', () => {
        expect(validarCalificacion(8.5)).toBe(true);  
        expect(validarCalificacion(11)).toBe(false);  
    });

});