# 🛡️ informe_mundan — WannaCry 2017

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38BDF8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/Licencia-Educacional-green)

Análisis legal del caso **WannaCry 2017** presentado como aplicación web en React.  
Evaluación Sumativa N°2 · TI3034 Fundamentos de Seguridad de la Información  
INACAP Valparaíso · Docente: Rubén Schnettler L. · Otoño 2026

---

## 📋 Contenido del informe

| # | Archivo | Criterio | Descripción |
|---|---------|----------|-------------|
| 1 | `01_resumen_mundan.md` | Transversal | Resumen ejecutivo del caso |
| 2 | `02_marco_mundan.md` | 2.1.1 | Marco normativo nacional e internacional |
| 3 | `03_delitos_mundan.md` | 2.1.2 | Tipificación Ley 21.459 |
| 4 | `04_comparacion_mundan.md` | 2.1.3 | Comparación de marcos regulatorios |
| 5 | `05_responsabilidades_mundan.md` | 2.1.4 | Responsabilidades legales |
| 6 | `06_datos_mundan.md` | 2.1.5 | Datos personales y derechos ARCO |
| 7 | `07_conclusiones_mundan.md` | Transversal | Conclusiones y recomendaciones |
| 8 | `08_prompts_mundan.md` | Transversal | Bitácora de uso de IA |

---

## 🚀 Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:5173

# 3. Build para producción
npm run build
```

---

## 📁 Estructura del proyecto
informe_mundan/
├── docs_mundan/              # Análisis legal en Markdown
│   ├── 01_resumen_mundan.md
│   ├── 02_marco_mundan.md
│   ├── 03_delitos_mundan.md
│   ├── 04_comparacion_mundan.md
│   ├── 05_responsabilidades_mundan.md
│   ├── 06_datos_mundan.md
│   ├── 07_conclusiones_mundan.md
│   └── 08_prompts_mundan.md
├── src/
│   ├── components/           # Un componente por sección
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

---

## 🔗 Enlaces

- 📦 Repositorio: `https://github.com/Fernandamv96/informe-mundan`
- 🌐 Sitio desplegado: `https://informe-mundan.vercel.app`

---

## ⚖️ Normativa analizada

- **Ley 21.459** — Delitos Informáticos (Chile, 2022)
- **Ley 19.628** — Protección de Datos Personales (Chile)
- **GDPR** — Reglamento General de Protección de Datos (UE)
- **ISO/IEC 27001** — Gestión de Seguridad de la Información
- **Convenio de Budapest** — Cibercriminalidad (2001)
