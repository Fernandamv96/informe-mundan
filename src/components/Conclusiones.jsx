import { BookOpen, CheckCircle, AlertTriangle } from 'lucide-react'

const recomendaciones = [
  {
    titulo: 'Gestión proactiva de parches',
    desc: 'WannaCry explotó una vulnerabilidad para la cual existía parche desde dos meses antes. Las organizaciones deben implementar procesos de gestión de vulnerabilidades (ISO 27001, A.12.6.1) con plazos máximos de aplicación según criticidad.',
    icono: '🔧',
  },
  {
    titulo: 'Segmentación de redes',
    desc: 'La propagación lateral de WannaCry fue posible por redes planas sin segmentación. Dividir la red en segmentos con control de tráfico SMB habría contenido el daño significativamente.',
    icono: '🌐',
  },
  {
    titulo: 'Política de respaldo 3-2-1',
    desc: 'Las organizaciones que mantenían respaldos actualizados recuperaron sus sistemas sin pagar el rescate. La política 3-2-1 (3 copias, 2 medios distintos, 1 fuera de sitio) mitiga el impacto del ransomware.',
    icono: '💾',
  },
  {
    titulo: 'Plan de respuesta a incidentes',
    desc: 'El NHS tardó horas en coordinar su respuesta. Contar con un plan de respuesta a incidentes documentado y probado (ISO 27001, A.16) reduce el tiempo de contención y los daños operacionales.',
    icono: '📋',
  },
  {
    titulo: 'Deshabilitar protocolos obsoletos',
    desc: 'SMBv1 era un protocolo con más de 30 años al momento del ataque. Las organizaciones deben inventariar y desactivar protocolos y servicios obsoletos que amplían la superficie de ataque.',
    icono: '🚫',
  },
  {
    titulo: 'Actualización normativa en Chile',
    desc: 'La Ley 19.628 no exige notificación de brechas ni establece sanciones disuasivas. Chile debe modernizar su marco legal, avanzando en el proyecto de nueva Ley de Datos Personales (Boletín 11.144-07) y adheriendo plenamente al Convenio de Budapest.',
    icono: '⚖️',
  },
]

export default function Conclusiones() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <BookOpen className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Conclusiones y Recomendaciones</h2>
      </div>

      {/* Reflexión */}
      <div className="bg-white rounded-lg shadow p-6 space-y-3">
        <h3 className="font-semibold text-slate-800 text-base flex items-center gap-2">
          <CheckCircle size={18} className="text-green-500" /> Reflexión final del análisis
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          El caso WannaCry (2017) demuestra que los ataques informáticos de mayor impacto no explotan
          vulnerabilidades de día cero desconocidas, sino la negligencia organizacional frente a parches
          disponibles. La combinación de infraestructura crítica obsoleta, ausencia de segmentación de red
          y falta de respaldos convirtió un exploit conocido en una catástrofe global.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Desde la perspectiva jurídica chilena, las acciones del atacante configuran múltiples delitos bajo
          la Ley 21.459, con especial énfasis en el daño a infraestructura crítica como circunstancia agravante.
          Sin embargo, la atribución a actores estatales extranjeros hace prácticamente imposible el ejercicio
          de acciones penales o civiles en Chile, lo que evidencia la necesidad de cooperación internacional
          y de marcos normativos que contemplen la jurisdicción extraterritorial.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          En materia de datos personales, la Ley 19.628 presenta brechas críticas: no exige notificación
          de incidentes, sus sanciones son insuficientes como elemento disuasivo, y no contempla la especificidad
          de datos de salud con la profundidad que demanda un ataque de esta magnitud. La modernización
          normativa es urgente para que Chile alcance estándares internacionales comparables al GDPR.
        </p>
      </div>

      {/* Alerta */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
        <AlertTriangle className="text-amber-500 mt-0.5 shrink-0" size={18} />
        <p className="text-sm text-amber-800">
          <strong>Lección central:</strong> La ciberseguridad no es solo un problema técnico. Es un problema
          de gestión, cultura organizacional y marco legal. WannaCry pudo haber sido contenido con un parche
          aplicado a tiempo. La brecha fue humana, no tecnológica.
        </p>
      </div>

      {/* Recomendaciones */}
      <div>
        <h3 className="font-semibold text-slate-800 text-base mb-4">Recomendaciones de seguridad</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recomendaciones.map((r) => (
            <div key={r.titulo} className="bg-white rounded-lg shadow p-4">
              <p className="font-semibold text-slate-800 mb-1">
                <span className="mr-2">{r.icono}</span>{r.titulo}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
