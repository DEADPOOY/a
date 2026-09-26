# landingpage

Landing page sencilla construida con HTML, CSS y JavaScript puro, publicada con GitHub Pages.

## Estructura

```
landingpage/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── .github/
    └── workflows/
        └── pages.yml
```

## Ver en vivo

https://deadpooy.github.io/landingpage/

## Desarrollo local

```bash
python3 -m http.server 8000
```

Despues abre <http://localhost:8000>.

## Publicar

Cada `push` a `main` dispara el workflow `.github/workflows/pages.yml`, que
despliega el sitio en GitHub Pages de forma automatica.
