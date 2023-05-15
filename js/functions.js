/* Compatibilidad con github pages */
/* enlace al apartado inicio */
function goToOtherFile() {
    let path = "/Inicio.html";
    if (window.location.hostname === "ErickDal448.github.io") {
      path = "/Proyecto-Creditos" + path;
    }
    console.log(path);
    window.location.href = path;
}
/* coneccion con la imagen perfil */
window.onload = function() {
  let path = 'Imagenes/Icon Perfil.png';
  if (window.location.hostname === 'erickdal448.github.io') {
    path = '/Proyecto-Creditos/' + path;
  }
  document.getElementById('profile-icon').src = path;
}

/* Mostrar y quitar texto del apartado número de cuenta */
function handleInputFocusNum(input) {
  if (input.value === "Número de cuenta") {
    input.value = "";
  }
}
function handleInputBlurNum(input) {
  if (input.value === "") {
    input.value = "Número de cuenta";
  }
}

/* mostrar value del apartado NIP y uso del check */
function handleInputFocusNIP(input) {
  if (input.value === "NIP") {
    input.value = "";
  }
  input.type = "password";
}
function handleInputBlurNIP(input) {
  if (input.value === "") {
    input.value = "NIP";
    input.type = "text";
  }
}
function handleCheckboxChange(checkbox) {
  var input = document.getElementById('NIP1');
  if (input.value !== "NIP") {
    if (checkbox.checked) {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
}