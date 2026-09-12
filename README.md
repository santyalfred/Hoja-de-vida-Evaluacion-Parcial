# Hoja de Vida — Santiago Alfred Michovich

## Datos
- **Nombre:** Santiago Alfred Michovich
- **Carrera:** Ingeniería de Sistemas
- **Universidad:** Universidad Católica Boliviana (UCB)

## Descripción del proyecto
Hoja de vida personal desarrollada como página web utilizando **HTML5 + CSS3
nativos**, sin frameworks (Bootstrap, Tailwind) ni JavaScript. El diseño aplica
colores, tipografía, márgenes, padding, bordes y sombras para lograr una
presentación profesional, además de **Flexbox** y **CSS Grid** para organizar
el contenido, y diseño **responsive** mediante `@media query`.

## Estructura del proyecto
```
michovich-santiago-hoja-vida/
├── index.html
├── css/
│   └── styles.css
├── assets/
│   ├── imagenes/
│   ├── audios/
│   └── videos/
└── README.md
```

## Etiquetas HTML5 utilizadas
- **Estructura:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Texto:** `<h1>`–`<h3>`, `<p>`, `<strong>`, `<em>`, `<mark>`, `<small>`, `<time>`, `<blockquote>`
- **Listas:** `<ul>`, `<li>`
- **Tablas:** `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- **Multimedia:** `<figure>`, `<figcaption>`, `<img>`, `<audio>`, `<video>`, `<source>`, `<track>`
- **Medición:** `<meter>` (nivel de dominio de tecnologías)
- **Contacto:** `<address>`
- **Formularios:** `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>` (text, email,
  tel, checkbox), `<textarea>`, `<select>`, `<option>`, `<button>` (submit, reset)

## CSS3 aplicado
- **Colores y tipografía:** paleta navy/verde/dorado, fuente serif en títulos y
  sans-serif en el cuerpo.
- **Márgenes, padding, bordes y sombras:** en tarjetas, formulario, tabla y figuras
  (`box-shadow`, `border-radius`, `border`).
- **Flexbox:** aplicado en la sección **Habilidades Técnicas** (`.skills-flex`),
  para organizar las 3 columnas (lenguajes, herramientas, habilidades) en fila.
- **CSS Grid:** aplicado en la sección **Proyectos Destacados** (`.projects-grid`),
  para organizar las tarjetas de proyecto en 2 columnas.
- **Diseño responsive:** una `@media (max-width: 700px)` que convierte la
  navegación, el Flexbox y el Grid en una sola columna para verse bien en celular.

## Elementos de accesibilidad implementados
- Atributo `lang="es"` en `<html>`.
- Enlace **"Saltar al contenido principal"**, visible al recibir foco con teclado.
- `alt` descriptivo en todas las imágenes.
- `<label for="...">` asociado correctamente a cada campo del formulario.
- Jerarquía correcta de encabezados (`h1` → `h2` → `h3`).
- Estilos de **foco visible** (`:focus-visible`) para navegación por teclado.
- `aria-label` y `aria-required` en formulario y elementos de medición.
- Campos obligatorios marcados con `required` y validación nativa (`pattern`,
  `minlength`, `maxlength`, `type="email"`, `type="tel"`).


