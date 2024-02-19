const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.querySelector('.resultado');
const sumarBtn = document.getElementById('sumar');
const restarBtn = document.getElementById('restar');

sumarBtn.addEventListener('click', () => {
    const suma = parseFloat(num1.value) + parseFloat(num2.value);
    resultado.textContent = `Resultado: ${suma}`;
});

restarBtn.addEventListener('click', () => {
    const resta = parseFloat(num1.value) - parseFloat(num2.value);
    resultado.textContent = `Resultado: ${resta >= 0 ? resta : 0}`;
});
