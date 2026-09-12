document.addEventListener('DOMContentLoaded', function () {
  inicializar_tema();
  inicializar_validacion_formulario();
});

/*1. Modo claro y oscuro*/
function inicializar_tema() {
  const html = document.documentElement;
  const boton_tema = document.getElementById('theme_toggle');
  const icono_tema = document.getElementById('theme_toggle_icon');
  const texto_tema = document.getElementById('theme_toggle_text');

  const CLAVE_ALMACENAMIENTO = 'santiago_cv_tema';

  function aplicar_tema(es_oscuro) {
    if (es_oscuro) {
      html.classList.add('tema_oscuro');
      icono_tema.textContent = '☀️';
      texto_tema.textContent = 'Modo claro';
      boton_tema.setAttribute('aria-pressed', 'true');
    } else {
      html.classList.remove('tema_oscuro');
      icono_tema.textContent = '🌙';
      texto_tema.textContent = 'Modo oscuro';
      boton_tema.setAttribute('aria-pressed', 'false');
    }
  }
}

