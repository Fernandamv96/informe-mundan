# 08 — Bitácora de Uso de IA

## Herramienta utilizada
- **Herramienta:** Claude (claude.ai) — modelo claude-sonnet-4
- **Modalidad:** Chatbot externo (navegador)

---

## Interacción #1 — Resumen ejecutivo

**Sección:** 01_resumen_mundan.md  
**Prompt:** "Actúa como analista de ciberseguridad. Necesito un resumen ejecutivo del ataque WannaCry 2017 para un informe legal universitario. Incluye: fecha exacta, vector de infección (EternalBlue, SMBv1), alcance (países y sistemas afectados), actores involucrados (Lazarus Group, NSA, Microsoft, NHS), daño estimado en USD y el mecanismo del kill switch. El resumen debe tener entre 4 y 5 párrafos, con lenguaje técnico-formal."  
**Aceptado:** Estructura general, datos cuantitativos y descripción del kill switch.  
**Corregido:** Se precisó que la atribución al Lazarus Group es oficial de EE.UU., RU y Australia pero no reconocida por Corea del Norte. Se corrigió la fecha del parche MS17-010 (14 de marzo, no "semanas antes").

---

## Interacción #2 — Marco normativo

**Sección:** 02_marco_mundan.md  
**Prompt:** "Para un informe legal universitario sobre el caso WannaCry 2017 (TI3034 INACAP), identificar y justificar 6 marcos normativos: mínimo 2 leyes chilenas (Ley 21.459 y Ley 19.628), mínimo 2 normas internacionales (GDPR, ISO 27001 o Convenio de Budapest). Para cada norma: código, nombre completo, clasificación nacional/internacional y párrafo de aplicabilidad al caso."  
**Aceptado:** Los seis marcos y la justificación del GDPR aplicado al NHS.  
**Corregido:** Se agregó la adhesión de Chile al Convenio de Budapest en 2023, dato no incluido originalmente.

---

## Interacción #3 — Tipificación de delitos

**Sección:** 03_delitos_mundan.md  
**Prompt:** "Aplica la Ley 21.459 de Chile (2022) al caso WannaCry 2017. Para cada artículo relevante (Arts. 2, 3, 4, 5 y 8): conducta exacta del atacante, texto del artículo, pena asociada y agravantes. Escenario hipotético: si WannaCry hubiera ocurrido bajo jurisdicción chilena."  
**Aceptado:** Mapeo de conductas a artículos; identificación del Art. 8 para el fraude.  
**Corregido:** Se verificó la pena del Art. 4 contra el texto oficial (Diario Oficial). La IA indicaba solo "presidio menor"; el texto legal especifica "medio a máximo".

---

## Interacción #4 — Componentes React

**Sección:** App.jsx y todos los .jsx  
**Prompt:** "Crea una aplicación React completa con Vite y Tailwind CSS v3 para presentar un informe legal universitario sobre WannaCry 2017. Proyecto: informe_mundan. App.jsx con navegación entre 8 secciones mediante tabs, header con Shield de lucide-react, footer con datos del curso. 8 componentes en src/components/ con contenido real del análisis."  
**Aceptado:** Estructura de navegación, sistema de tabs responsive con menú hamburguesa.  
**Corregido:** Se cambió de Tailwind v4 a v3 por compatibilidad con Node.js del laboratorio. Se corrigieron nombres de íconos incorrectos y el sufijo del footer.

---

## Reflexión final

El uso de Claude fue útil para estructurar el contenido legal y generar componentes React funcionales. La herramienta requiere verificación en detalles específicos como penas exactas y fechas de vigencia normativa. La calidad del resultado dependió directamente de la precisión del prompt: describir el caso, la norma específica y el tipo de análisis requerido produjo resultados aprovechables; prompts vagos habrían generado contenido genérico inutilizable.
