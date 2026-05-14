import { Bot } from 'lucide-react'

const entradas = [
  {
    n: 1,
    herramienta: 'Claude (claude.ai)',
    seccion: 'Resumen ejecutivo (01_resumen_mundan.md)',
    prompt: 'Actúa como analista de ciberseguridad. Necesito un resumen ejecutivo del ataque WannaCry 2017 para un informe legal universitario. Incluye: fecha exacta, vector de infección (EternalBlue, SMBv1), alcance (países y sistemas afectados), actores involucrados (Lazarus Group, NSA, Microsoft, NHS), daño estimado en USD y el mecanismo del kill switch. El resumen debe tener entre 4 y 5 párrafos, con lenguaje técnico-formal.',
    aceptado: 'La estructura general, los datos cuantitativos (200.000 sistemas, 150 países, USD 4.000M) y la descripción del kill switch.',
    corregido: 'Se ajustó la mención al Lazarus Group para indicar que la atribución es oficial de EE.UU., RU y Australia, pero no reconocida por Corea del Norte. Se precisó que el parche MS17-010 fue publicado el 14 de marzo de 2017, no "semanas antes".',
  },
  {
    n: 2,
    herramienta: 'Claude (claude.ai)',
    seccion: 'Marco normativo (02_marco_mundan.md)',
    prompt: 'Para un informe legal universitario sobre el caso WannaCry 2017 (asignatura TI3034 INACAP), necesito identificar y justificar 6 marcos normativos aplicables. Deben incluir: mínimo 2 leyes chilenas (debe estar Ley 21.459 y Ley 19.628), mínimo 2 normas internacionales (GDPR, ISO 27001 o Convenio de Budapest). Para cada norma: código, nombre completo, clasificación nacional/internacional y un párrafo explicando su aplicabilidad específica al caso WannaCry.',
    aceptado: 'Los seis marcos identificados y la estructura de presentación. La justificación de aplicabilidad del GDPR al NHS fue especialmente útil.',
    corregido: 'Se agregó la mención a la adhesión de Chile al Convenio de Budapest en 2023, dato que la IA no incluyó originalmente. Se verificó la vigencia de la Ley 19.628 y su estado frente al proyecto de reforma.',
  },
  {
    n: 3,
    herramienta: 'Claude (claude.ai)',
    seccion: 'Tipificación de delitos (03_delitos_mundan.md)',
    prompt: 'Aplica la Ley 21.459 de Chile (Ley de Delitos Informáticos, 2022) al caso WannaCry 2017. Para cada artículo relevante (Arts. 2, 3, 4, 5 y 8), describe: (a) la conducta exacta del atacante que configura el delito, (b) el texto del artículo aplicable, (c) la pena asociada, (d) circunstancias agravantes aplicables al caso. El análisis debe plantear el escenario hipotético: "si WannaCry hubiera ocurrido bajo jurisdicción chilena". No inventar artículos; usar solo los de la Ley 21.459.',
    aceptado: 'El mapeo de conductas a artículos fue preciso. La identificación del Art. 8 para el fraude (rescate en Bitcoin) fue un aporte valioso.',
    corregido: 'Se verificó la pena del Art. 4 contra el texto oficial de la ley. La IA indicaba solo presidio menor; se corrigió a "medio a máximo" según el texto legal. Fue necesario consultar el texto oficial publicado en el Diario Oficial.',
  },
  {
    n: 4,
    herramienta: 'Claude (claude.ai)',
    seccion: 'Componentes React (App.jsx y todos los .jsx)',
    prompt: 'Crea una aplicación React completa con Vite y Tailwind CSS v3 para presentar un informe legal universitario sobre el caso WannaCry 2017. El proyecto se llama informe_mundan. Necesito: (1) App.jsx con navegación entre 8 secciones mediante tabs, header con ícono Shield de lucide-react, footer con datos del curso; (2) 8 componentes en src/components/ (Resumen, Marco, Delitos, Comparacion, Responsabilidades, Datos, Conclusiones, Prompts); cada componente debe mostrar el contenido real del análisis, no placeholders. Usa Tailwind para estilos, lucide-react para íconos. El diseño debe ser limpio y profesional.',
    aceptado: 'La estructura de navegación, el sistema de tabs responsive con menú hamburguesa para móvil, y el esquema de colores slate/red.',
    corregido: 'Se cambió de Tailwind v4 a v3 por compatibilidad con Node.js del laboratorio (postcss.config.js + tailwind.config.js separados). Se corrigió el import de íconos que la IA generó con nombres incorrectos. Se ajustó el footer para mostrar el sufijo correcto "mundan".',
  },
]

export default function Prompts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <Bot className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Bitácora de Uso de IA</h2>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        <strong>Herramienta utilizada:</strong> Claude (claude.ai) — modelo claude-sonnet-4.<br />
        <strong>Modalidad:</strong> Chatbot externo (navegador), sin acceso directo al proyecto.<br />
        <strong>Uso general:</strong> La IA se utilizó para estructurar el contenido legal, identificar normativa aplicable y generar los componentes React. En todos los casos, las respuestas fueron revisadas, corregidas y complementadas con fuentes primarias (textos legales oficiales y documentación técnica del incidente).
      </div>

      <div className="space-y-5">
        {entradas.map((e) => (
          <div key={e.n} className="bg-white rounded-lg shadow p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded">
                Interacción #{e.n}
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">
                {e.herramienta}
              </span>
              <span className="text-slate-500 text-xs">{e.seccion}</span>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-700 mb-1">Prompt utilizado:</p>
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-slate-600 font-mono text-xs leading-relaxed">
                  {e.prompt}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="font-semibold text-green-700 mb-1">✅ Qué se aceptó</p>
                  <p className="text-green-800 text-xs leading-relaxed">{e.aceptado}</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="font-semibold text-amber-700 mb-1">✏️ Qué se corrigió y por qué</p>
                  <p className="text-amber-800 text-xs leading-relaxed">{e.corregido}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reflexión final */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-slate-800 mb-3">Reflexión final sobre el uso de IA</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          El uso de Claude como asistente resultó útil principalmente para estructurar el contenido y generar
          código React funcional. La herramienta demostró buen manejo de legislación chilena general, aunque
          requirió verificación en detalles específicos como penas exactas y fechas de vigencia normativa.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          La limitación más relevante fue que la IA no siempre distingue entre el texto vigente de una ley
          y versiones anteriores o proyectos de reforma. Por ello, cada afirmación legal fue contrastada
          con el texto publicado en la Biblioteca del Congreso Nacional (bcn.cl).
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          En términos de eficiencia, la IA redujo significativamente el tiempo de estructuración del análisis,
          pero no reemplazó la comprensión del caso: un prompt vago habría generado contenido genérico inutilizable.
          La calidad del resultado dependió directamente de la precisión con que se describió el caso, la norma
          específica y el tipo de análisis requerido.
        </p>
      </div>
    </div>
  )
}
