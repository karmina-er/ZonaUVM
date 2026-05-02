// pagos.test.js
const { calcularDescuento, obtenerEstadoSemaforo } = require('./pagos.js');

test('Debe calcular correctamente el pago con beca del 20%', () => {
    expect(calcularDescuento(1000, 20)).toBe(800);
});

test('Debe devolver "vencido" si la fecha es de ayer', () => {
    const ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    expect(obtenerEstadoSemaforo(ayer)).toBe('vencido');
});