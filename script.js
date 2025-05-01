function showSection(id) {
    document.querySelectorAll('.seccion').forEach(sec => {
      sec.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
  }
  
  // Mostrar animación por defecto
  showSection('animacion');
  
