const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const contacto = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        website: document.getElementById("website").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value
    };

    localStorage.setItem(
        "contacto",
        JSON.stringify(contacto)
    );

    alert("Contacto guardado correctamente");

});

const datos = localStorage.getItem("contacto");

if (datos) {

    const contacto = JSON.parse(datos);

    console.log(contacto);

}