// Para practicar:
// 1.Realizar un formulario que solicite: nombre, apellido y teléfono de un usuario, al guardar debe agregarse a una lista de usuarios en un array. Y mostrar el nuevo array en consola.
// 2.Formulario con input tipo radio seleccionando el género de una persona.

const button = document.getElementById('btn');
const name = document.getElementById('name');
const lastName = document.getElementById('lastname');
const number = document.getElementById('number');
const gender = document.getElementsByName('status'); 

const users = [
    {
        nombre: null, 
        apellido: null,
        numero: null,
        genero: null
    }
];

console.log("El array tiene valor de: ", users);

button.addEventListener("click", (e) => {
    e.preventDefault()

    users[0].nombre = name.value
    users[0].apellido = lastName.value
    users[0].numero = number.value

    for (let radio of gender)
    {
        if (radio.checked) {
            users[0].genero = radio.value
        }
    }
    console.log("El array con el nuevo valor:", users);
    
});



