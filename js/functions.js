function goToOtherFile() {
    var path = 'Inicio.html';
    if (window.location.hostname === 'ErickDal448.github.io') {
      path = '/Proyecto-Creditos/' + path;
    }
    window.location.href = path;
  }
  
  window.onload = function() {
    let path = 'Imagenes/Icon Perfil.png';
    if (window.location.hostname === 'erickdal448.github.io') {
      path = '/Proyecto-Creditos/' + path;
    }
    document.getElementById('profile-icon').src = path;
  }