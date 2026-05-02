function deleteItemById(items, id) {
    return items.filter(i => i.id !== id);
}

function toggleStatus(items, id) {
    return items.map(item => {
        if (item.id === id) {
            return {
                ...item,
                status: item.status === 'found' ? 'lost' : 'found'
            };
        }
        return item;
    });
}

function filterItems(items, text) {
    return items.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.location.toLowerCase().includes(text.toLowerCase())
    );
}

module.exports = {
    deleteItemById,
    toggleStatus,
    filterItems
};