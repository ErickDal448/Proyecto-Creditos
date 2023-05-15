function goToOtherFile() {
    var path = 'Inicio.html';
    if (window.location.hostname === 'ErickDal448.github.io') {
      path = '/Proyecto-Creditos/' + path;
    }
    window.location.href = path;
  }
  