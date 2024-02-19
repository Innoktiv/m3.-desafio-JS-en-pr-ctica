function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  // Expresión regular para validar caracteres alfabéticos
  const regex = /^[a-zA-Z]+$/;

  // Validar nombre
  if (!regex.test(nombre)) {
    mostrarError("El nombre solo debe contener letras");
    return false;
  }

  // Validar asunto
  if (!regex.test(asunto)) {
    mostrarError("El asunto solo debe contener letras");
    return false;
  }

  // Validar mensaje
  if (!regex.test(mensaje)) {
    mostrarError("El mensaje solo debe contener letras");
    return false;
  }

  // Mostrar mensaje de éxito
  mostrarExito("Mensaje enviado con éxito");

  // Enviar formulario (opcional)
  // ...

  return true;
}

function mostrarError(mensaje) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p class="error">${mensaje}</p>`;
}

function mostrarExito(mensaje) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p class="exito">${mensaje}</p>`;
}
