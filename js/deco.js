
const formulario = document.getElementById('formulario');

formulario.addEventListener('focus', (evento)=>{
evento.target.style.background = 'rgba(87, 83, 83, 0.726)';
}, true);

formulario.addEventListener('blur', (evento)=>{
evento.target.style.background= 'white';
}, true)

 