import { BarChart2 } from 'lucide-react'

const ejes = ['Notificación de brecha', 'Sanciones máximas', 'Derechos del titular', 'Alcance geográfico', 'Aplicación a sector salud']

const marcos = [
  {
    nombre: 'Ley 19.628 (Chile)',
    sector: 'General',
    color: 'bg-red-600',
    valores: [
      'No establece plazo obligatorio',
      'Multa hasta 50 UTM',
      'Acceso, rectificación, cancelación, oposición (ARCO)',
      'Nacional',
      'Sí, como responsable de datos',
    ],
  },
  {
    nombre: 'GDPR (Unión Europea)',
    sector: 'General',
    color: 'bg-blue-600',
    valores: [
      '72 horas a la autoridad supervisora',
      '4% facturación global o €20M',
      'Acceso, rectificación, supresión, portabilidad, oposición',
      'Extraterritorial (datos de ciudadanos UE)',
      'Sí, incluye datos de salud como sensibles',
    ],
  },
  {
    nombre: 'HIPAA (EE.UU.)',
    sector: 'Salud',
    color: 'bg-green-600',
    valores: [
      '60 días tras descubrimiento',
      'USD 100 – 50.000 por violación (hasta USD 1,9M/año)',
      'Acceso y rectificación de historial clínico',
      'Nacional (EE.UU.), datos de pacientes',
      'Diseñado específicamente para sector salud',
    ],
  },
  {
    nombre: 'ISO/IEC 27001',
    sector: 'Transversal',
    color: 'bg-purple-600',
    valores: [
      'Define procedimientos internos de respuesta',
      'No aplica (estándar técnico, sin sanción legal)',
      'No aplica directamente',
      'Internacional (certificación voluntaria)',
      'Sí, como control de gestión de riesgos',
    ],
  },
]

export default function Comparacion() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <BarChart2 className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Comparación de Marcos Regulatorios</h2>
      </div>

      <p className="text-slate-600 text-sm">
        La tabla compara cuatro marcos regulatorios aplicables a los sectores afectados por WannaCry,
        evaluados en cinco ejes de análisis. El caso es especialmente relevante para el sector salud,
        dado el impacto del ataque sobre el NHS del Reino Unido.
      </p>

      {/* Tabla responsive */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm border-collapse bg-white">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="p-3 text-left font-semibold min-w-32">Eje de análisis</th>
              {marcos.map((m) => (
                <th key={m.nombre} className="p-3 text-left font-semibold min-w-40">
                  <div className={`inline-block px-2 py-0.5 rounded text-xs mb-1 text-white ${m.color}`}>{m.sector}</div>
                  <div>{m.nombre}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ejes.map((eje, i) => (
              <tr key={eje} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="p-3 font-medium text-slate-700 border-r border-slate-200">{eje}</td>
                {marcos.map((m) => (
                  <td key={m.nombre} className="p-3 text-slate-600 border-r border-slate-100 last:border-0">
                    {m.valores[i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        <strong>Análisis:</strong> El GDPR presenta el régimen más estricto, con notificación de 72 horas y sanciones millonarias.
        La Ley 19.628 chilena carece de plazos de notificación y sus sanciones son considerablemente más bajas,
        lo que refleja la necesidad de modernización que dio origen al proyecto de nueva ley de datos personales en Chile (Boletín 11.144-07).
        HIPAA, diseñado específicamente para salud, resulta el más aplicable al impacto de WannaCry sobre el NHS.
      </div>
    </div>
  )
}
