const { obtenerAlertasCampus } = require('./mapa'); 

describe('Pruebas del Mapa Lince', () => {
    test('Debe cargar las alertas del campus correctamente', () => {
        const alertas = obtenerAlertasCampus();
        expect(Array.isArray(alertas)).toBe(true);
    });

    test('Cada alerta debe tener una descripción', () => {
        const alertas = obtenerAlertasCampus();
        if (alertas.length > 0) {
            expect(alertas[0]).toHaveProperty('descripcion');
        }
    });
});