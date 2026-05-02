const { validarEvento } = require('./agenda'); 

describe('Pruebas del Horario UVM', () => {
    test('El evento debe tener nombre y hora', () => {
        const resultado = validarEvento({ nombre: "Clase", hora: "07:00" });
        expect(resultado).toBe(true);
    });

    test('Debe fallar si el nombre está vacío', () => {
        const resultado = validarEvento({ nombre: "", hora: "09:00" });
        expect(resultado).toBe(false);
    });
});