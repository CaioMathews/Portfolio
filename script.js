document.getElementById('modoEscuro').addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
    const estaEscuro = document.body.classList.contains('modo-escuro');
    this.textContent = estaEscuro ? 'Claro' : 'Escuro';
});
