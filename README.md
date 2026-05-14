# informe_mundan — WannaCry 2017

Análisis legal del caso WannaCry 2017 — TI3034 Fundamentos de Seguridad de la Información  
INACAP Valparaíso · Docente: Rubén Schnettler L. · Otoño 2026

## Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
# Abrir http://localhost:5173

# 3. Construir para producción
npm run build
```

## Estructura del proyecto

```
informe_mundan/
├── docs_mundan/           # Archivos Markdown del análisis legal
│   ├── 01_resumen_mundan.md
│   ├── 02_marco_mundan.md
│   ├── 03_delitos_mundan.md
│   ├── 04_comparacion_mundan.md
│   ├── 05_responsabilidades_mundan.md
│   ├── 06_datos_mundan.md
│   ├── 07_conclusiones_mundan.md
│   └── 08_prompts_mundan.md
├── src/
│   ├── components/        # Un componente React por sección
│   │   ├── Resumen.jsx
│   │   ├── Marco.jsx
│   │   ├── Delitos.jsx
│   │   ├── Comparacion.jsx
│   │   ├── Responsabilidades.jsx
│   │   ├── Datos.jsx
│   │   ├── Conclusiones.jsx
│   │   └── Prompts.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Proyecto inicial — informe_mundan WannaCry 2017"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/informe_mundan.git
git push -u origin main
```
