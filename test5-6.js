const addBtn = document.getElementById('addBtn');
const inputText = document.getElementById('inputText');
const tableBody = document.getElementById('tableBody');
const countDisplay = document.getElementById('countDisplay');

addBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) return;

    const newRow = tableBody.insertRow();
    const cellText = newRow.insertCell(0);
    const cellAction = newRow.insertCell(1);

    cellText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', () => {
        newRow.remove();
        updateCount();
    });
    cellAction.appendChild(deleteBtn);

    if (tableBody.rows.length > 3) {
        tableBody.deleteRow(0); 
    }

    updateCount();
    inputText.value = '';
});

function updateCount() {
    countDisplay.textContent = tableBody.rows.length;
}