const { deleteItemById, toggleStatus, filterItems } = require('./objetos');

test("elimina un elemento por id", () => {
    const items = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Termo" }
    ];

    const result = deleteItemById(items, 1);

    expect(result.length).toBe(1);
});

test("cambia estado correctamente", () => {
    const items = [
        { id: 1, status: "lost" }
    ];

    const result = toggleStatus(items, 1);

    expect(result[0].status).toBe("found");
});

test("filtra correctamente", () => {
    const items = [
        { name: "Laptop", location: "Biblioteca" },
        { name: "Termo", location: "Cafetería" }
    ];

    const result = filterItems(items, "cafe");

    expect(result.length).toBe(1);
});