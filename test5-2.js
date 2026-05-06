const colors = ['lightblue', 'lightgreen', 'lightcoral'];
let currentIndex = 0;


const btn = document.getElementById('colorBtn');


btn.addEventListener('click', () => {

  currentIndex = (currentIndex + 1) % colors.length;

 
    const nextColor = colors[currentIndex];
    document.body.style.backgroundColor = nextColor;
 });