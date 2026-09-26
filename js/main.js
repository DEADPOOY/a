const form = document.getElementById("form-contacto");
const mensaje = document.getElementById("form-mensaje");

const emailValido = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

function validar(campo, condicion, texto) {
    if (condicion) {
        campo.classList.remove("error");
        return true;
    }
    campo.classList.add("error");
    mensaje.textContent = texto;
    mensaje.className = "form-mensaje error";
    return false;
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = form.elements.nombre;
    const email = form.elements.email;
    const texto = form.elements.mensaje;

    const okNombre = validar(nombre, nombre.value.trim().length >= 3, "El nombre debe tener al menos 3 caracteres.");
    if (!okNombre) return;

    const okEmail = validar(email, emailValido(email.value.trim()), "El correo no tiene un formato valido.");
    if (!okEmail) return;

    const okMensaje = validar(texto, texto.value.trim().length >= 10, "El mensaje debe tener al menos 10 caracteres.");
    if (!okMensaje) return;

    mensaje.textContent = "Mensaje enviado. Te responderé pronto.";
    mensaje.className = "form-mensaje ok";
    form.reset();
});
