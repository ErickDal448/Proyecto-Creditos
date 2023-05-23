/* Compatibilidad con github pages */
/* direccionamiento de archivos js de bootstrap */
function getBootstrapBundlePath() {
  let path = '/Bootstrap/node_modules/bootstrap/dist/js/bootstrap.bundle.js';
  if (window.location.hostname === 'erickdal448.github.io') {
    path = '/Proyecto-Creditos' + path;
  }
  return path;
}
/* enlace al apartado inicio */
function goToOtherFile() {
  // Obtener los valores ingresados por el usuario
  let numCuenta = document.getElementById("InputNumCuenta1").value;
  let nip = document.getElementById("NIP1").value;

  // Verificar si los valores ingresados son válidos
  if (numCuenta === "Alumno" && nip === "Alumno") {
      // Si los valores son válidos, redirigir al usuario a otra página
      let path = '/Inicio.html';
      if (window.location.hostname === 'erickdal448.github.io') {
          path = '/Proyecto-Creditos' + path;
      }
      window.location.href = path;
  } 
  else if(numCuenta === "Editor" && nip === "Editor"){
    // Si los valores son válidos, redirigir al usuario a otra página
    let path = '/InicioEditor.html';
    if (window.location.hostname === 'erickdal448.github.io') {
        path = '/Proyecto-Creditos' + path;
    }
    window.location.href = path;
  }
  else {
      // Si los valores no son válidos, mostrar un mensaje de error
      alert("Número de cuenta o NIP incorrecto");
  }
}

/* coneccion con la imagen perfil */
window.onload = function() {
//   var path = 'Imagenes/Icon Perfil.png';
//   if (window.location.hostname === 'erickdal448.github.io') {
//     path = '/Proyecto-Creditos/' + path;
//   }
//   document.getElementById('profile-icon').src = path;
}

/* Conectividad con puerto swagger */
// let port = window.myPort;

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

/* Inicio alumnos */
/* Cambio de imagen segun el porcentaje de progreso */
  // Obtener una referencia al elemento de la barra de progreso
  var progressBar1 = document.getElementById('progress-bar1');
function updateButtonImage() {
  // Obtener una referencia al elemento de imagen del botón
  var buttonImage = document.getElementById('button-image');
  // Obtener el porcentaje actual de la barra de progreso
  var percentage = parseInt(progressBar1.style.width);
  // Declarar el camino de la imagen
  var pathMed = '/Imagenes/FondoMedallas.png'

  // Actualizar el atributo "src" del elemento de imagen del botón según el porcentaje
  if(percentage == 0){
    pathMed = '/Imagenes/FondoMedallas.png'
    progressBar1.style.backgroundColor = '#6c6d6c';
  }
  else if (percentage <= 20) {
    pathMed = '/Imagenes/MedallaGen1.png';
    progressBar1.style.backgroundColor = '#205f14';
  } else if (percentage <= 40) {
    pathMed = '/Imagenes/MedallaGen2.png';
    progressBar1.style.backgroundColor = '#736e46';
  } else if (percentage <= 60) {
    pathMed = '/Imagenes/MedallaGen3.png';
    progressBar1.style.backgroundColor = '#6e93a3';
  } else if (percentage <= 80) {
    pathMed = '/Imagenes/MedallaGen4.png';
    progressBar1.style.backgroundColor = '#bbad44';
  } else {
    pathMed = '/Imagenes/MedallaGen5.png';
    progressBar1.style.backgroundColor = '#0F77A4';
  }

  if (window.location.hostname === 'erickdal448.github.io') {
    pathMed = '/Proyecto-Creditos' + pathMed;
  }

  buttonImage.src = pathMed;
}
  // Observar cambios en el atributo "style" de la barra de progreso
  var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'style') {
      // Actualizar la imagen del botón
      updateButtonImage();
      }
  });
  }); 
  // Iniciar la observación
  if (progressBar1) { // Verificar si el elemento existe antes de llamar al método `observe`
    observer.observe(progressBar1, { attributes: true });
  }

  // Crear una función para establecer el valor de la barra de progreso
  function setProgress(value) {
    var progressBar1 = document.getElementById('progress-bar1');
    
    progressBar1.style.width = value + '%';
  }
  var currentValue = 0;
  function incrementProgress() {
    currentValue += 10;
    setProgress(currentValue);

    if (currentValue > 100){
      progressBar1.style.width = 0 + '%';
      currentValue = 0;
    }
  }
