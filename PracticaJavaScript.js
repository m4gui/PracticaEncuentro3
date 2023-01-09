const para = document.querySelector('p');
para.addEventListener('click', ModificarNombre);
function ModificarNombre() {
  let nombre = prompt('Ingresa tu nombre');
  let anioNac = prompt('Ingresa tu año de nacimiento');
  let edad = 2022 - anioNac;
  para.textContent = 'Hola soy ' + nombre + ' y tengo ' + edad;
}
//Ambitos
if (true) {
    var x = 5;
  }
  console.log(x);  // x es 5
  if (true) {
    let y = 5;
  }
  console.log(y); // ReferenceError: y no está definida