const btn = document.getElementById('showBtn');


btn.addEventListener('click', function() {
    
    const inputElement = document.getElementById('myInput');
    const outputElement = document.getElementById('output');
    
    
    const value = inputElement.value;

    if (value === "") {
        
        alert("入力値が空です。");
    } else {
        
        outputElement.innerText = value;
    }
});