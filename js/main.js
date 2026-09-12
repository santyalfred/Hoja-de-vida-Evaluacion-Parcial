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

   /* Revisar si el usuario ya eligió un tema anteriormente */
  const tema_guardado = localStorage.getItem(CLAVE_ALMACENAMIENTO);

  if (tema_guardado === 'oscuro') {
    aplicar_tema(true);
  } else if (tema_guardado === 'claro') {
    aplicar_tema(false);
  } else {
    /* Si no hay preferencia guardada, seguir la del sistema operativo */
    const prefiere_oscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicar_tema(prefiere_oscuro);
  }

  /* Alternar el tema al hacer clic en el botón, y guardar la preferencia */
  boton_tema.addEventListener('click', function () {
    const esta_oscuro_ahora = html.classList.contains('tema_oscuro');
    const nuevo_estado_oscuro = !esta_oscuro_ahora;

    aplicar_tema(nuevo_estado_oscuro);
    localStorage.setItem(CLAVE_ALMACENAMIENTO, nuevo_estado_oscuro ? 'oscuro' : 'claro');
  });
}

/* Validación del formulario de contacto */
function inicializar_validacion_formulario() {
  const formulario = document.getElementById('form_contacto');
  if (!formulario) return;

  const estado_formulario = document.getElementById('form_estado');

  const campos = {
    nombre: {
      elemento: document.getElementById('nombre'),
      error: document.getElementById('error_nombre'),
      validar: function (valor) {
        if (valor.trim().length < 3) {
          return 'El nombre debe tener al menos 3 caracteres.';
        }
        return '';
      }
    },
    correo: {
      elemento: document.getElementById('correo'),
      error: document.getElementById('error_correo'),
      validar: function (valor) {
        const patron_correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patron_correo.test(valor.trim())) {
          return 'Ingresa un correo electrónico válido (ejemplo@dominio.com).';
        }
        return '';
      }
    },
    telefono: {
      elemento: document.getElementById('telefono'),
      error: document.getElementById('error_telefono'),
      validar: function (valor) {
        if (valor.trim() === '') return ''; /* el teléfono es opcional */
        const patron_telefono = /^\+?[0-9]{7,15}$/;
        if (!patron_telefono.test(valor.trim())) {
          return 'Ingresa un teléfono válido (7 a 15 dígitos, puede iniciar con +).';
        }
        return '';
      }
    },
    mensaje: {
      elemento: document.getElementById('mensaje'),
      error: document.getElementById('error_mensaje'),
      validar: function (valor) {
        if (valor.trim().length < 10) {
          return 'El mensaje debe tener al menos 10 caracteres.';
        }
        return '';
      }
    }
  };

  /* Validar un campo individual para luego mostrar/ocultar su mensaje de error */
  function validar_campo(clave) {
    const campo = campos[clave];
    const mensaje_error = campo.validar(campo.elemento.value);

    if (mensaje_error) {
      campo.elemento.classList.add('campo_invalido');
      campo.error.textContent = mensaje_error;
      return false;
    }

    campo.elemento.classList.remove('campo_invalido');
    campo.error.textContent = '';
    return true;
  }

  /* Validar en tiempo real, mientras el usuario escribe*/
  Object.keys(campos).forEach(function (clave) {
    campos[clave].elemento.addEventListener('input', function () {
      validar_campo(clave);
    });
  });

}