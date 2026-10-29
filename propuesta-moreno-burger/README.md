# Propuesta Moreno Burger

Página de propuesta de menú digital para **Moreno Burger**. Sitio estático (HTML + CSS + JavaScript), sin build.

## Estructura

```
├── index.html          # Estructura de la página
├── css/styles.css      # Estilos (el logo se enlaza como variable --logo en :root)
├── js/app.js           # Lógica de la página
├── assets/img/logo.webp
└── .nojekyll           # Evita procesamiento de Jekyll en GitHub Pages
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
3. Tu sitio quedará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

## Probar en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
```
