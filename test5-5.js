const addBtn = document.getElementById('addBtn');
const inputText = document.getElementById('inputText');
const tableBody = document.querySelector('#myTable tbody');
const countDisplay = document.getElementById('countDisplay');

let addCount = 0;

addBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) return;

    addCount++;
    updateStatus(); 

    const newRow = tableBody.insertRow();
    const cellText = newRow.insertCell(0);
    const cellAction = newRow.insertCell(1);

    cellText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    
    deleteBtn.style.display = 'inline-block'; 

    deleteBtn.addEventListener('click', () => {
        newRow.remove(); 
        addCount--;      
        updateStatus();  
    });

    cellAction.appendChild(deleteBtn);
    inputText.value = '';
});

function updateStatus() {
    countDisplay.textContent = addCount;

    if (addCount >= 3) {
        addBtn.style.display = 'none'; 
    } else {
        addBtn.style.display = 'inline-block'; 
    }
}