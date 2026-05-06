const addBtn = document.getElementById('addBtn');
const inputText = document.getElementById('inputText');
const tableBody = document.querySelector('#myTable tbody');
const countDisplay = document.getElementById('countDisplay');

let addCount = 0;

addBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) return; 

    addCount++;
    countDisplay.textContent = addCount;

    const newRow = tableBody.insertRow(); 
    const cellText = newRow.insertCell(0); 
    const cellAction = newRow.insertCell(1); 

    cellText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.style.display = 'none'; 
    cellAction.appendChild(deleteBtn);
 
    if (addCount >= 3) {
        addBtn.style.display = 'none';
    }

    inputText.value = '';
});