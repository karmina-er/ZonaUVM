let subjects = JSON.parse(localStorage.getItem('uvm-subjects')) || [];

function save() {
    localStorage.setItem('uvm-subjects', JSON.stringify(subjects));
    render();
}

function render() {
    const list = document.getElementById('subjects-list');
    if (!list) return;
    list.innerHTML = '';
    
    subjects.forEach((sub, sIdx) => {
        const filled = sub.grades.filter(g => g !== null && g !== '');
        const sum = filled.reduce((a, b) => a + b, 0);
        const avgNum = filled.length > 0 ? (sum / filled.length) : 0;
        const allCompleted = filled.length === sub.partials;
        const remaining = sub.partials - filled.length;
        
        let statusClass = '';
        let inputClass = '';
        let mensaje = '';

        // Lógica de cálculo
        if (allCompleted) {
            // Caso: Todos los parciales llenos
            const isExento = avgNum >= 9.0;
            statusClass = isExento ? 'card-status-pass' : 'card-status-fail';
            inputClass = isExento ? 'border-pass' : 'border-fail';
            mensaje = isExento ? "Felicidades, estás exento" : "Te vas a examen";
        } else if (remaining > 0) {
            // Caso: Faltan parciales
            const needed = ((9.0 * sub.partials) - sum) / remaining;
            if (needed > 10) {
                mensaje = "Ya no es posible alcanzar exención";
            } else {
                mensaje = `Necesitas: <strong>${needed.toFixed(1)}</strong> para exentar`;
            }
        }

        const card = document.createElement('div');
        card.className = `subject-card ${statusClass}`;
        
        card.innerHTML = `
            <h3 class="subject-card-title">${sub.name}</h3>
            <div class="partials-container">
                ${sub.grades.map((g, pIdx) => `
                    <input type="number" 
                           class="grade-input-modern ${inputClass}" 
                           value="${g !== null ? g : ''}" 
                           placeholder="P${pIdx + 1}"
                           onchange="updateGrade(${sIdx}, ${pIdx}, this.value)">
                `).join('')}
            </div>
            <div class="status-msg">
                Promedio: <strong>${allCompleted ? avgNum.toFixed(2) : '--'}</strong><br>
                ${mensaje}
            </div>
            <button class="btn-delete-subject" style="display:block; margin: 15px auto 0; color: #E30613;" 
            onclick="subjects.splice(${sIdx}, 1); save();">Eliminar</button>
        `;
        list.appendChild(card);
    });
}

function updateGrade(sIdx, pIdx, value) {
    subjects[sIdx].grades[pIdx] = value === '' ? null : parseFloat(value);
    save();
}

document.addEventListener("DOMContentLoaded", () => {
    // Lógica para alternar temas
    const themeBtn = document.getElementById('theme-toggle-nav');
    themeBtn.addEventListener('click', () => {
        // Toggle en body para CSS personalizado
        document.body.classList.toggle('light-mode');
        // Toggle en html para Tailwind 'dark:'
        document.documentElement.classList.toggle('dark');
        
        const isLight = document.body.classList.contains('light-mode');
        themeBtn.querySelector('i').className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    });

    // Lógica para añadir materia
    const addBtn = document.getElementById('btn-add-subject');
    if(addBtn) {
        addBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('subject-name-input');
            if (!nameInput.value.trim()) return alert("Ponle nombre a la materia.");
            subjects.push({ name: nameInput.value.trim(), partials: parseInt(document.getElementById('subject-partials-input').value), grades: Array(parseInt(document.getElementById('subject-partials-input').value)).fill(null) });
            nameInput.value = '';
            save();
        });
    }
    render();
});