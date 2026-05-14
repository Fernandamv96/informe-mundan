import { Scale } from 'lucide-react'

const normas = [
  {
    codigo: 'Ley 21.459',
    nombre: 'Ley de Delitos Informáticos — Chile (2022)',
    tipo: 'Nacional',
    aplicacion: 'Tipifica el acceso ilícito a sistemas informáticos, la interceptación ilegal y el daño informático. Es la norma central para calificar penalmente las acciones del ataque WannaCry bajo jurisdicción chilena.',
    color: 'border-red-500',
    badge: 'bg-red-100 text-red-700',
  },
  {
    codigo: 'Ley 19.628',
    nombre: 'Protección de la Vida Privada — Chile (1999)',
    tipo: 'Nacional',
    aplicacion: 'Regula el tratamiento de datos personales en Chile. Aplica en tanto WannaCry comprometió bases de datos con información personal de pacientes y clientes en entidades afectadas.',
    color: 'border-blue-500',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    codigo: 'Ley 20.285',
    nombre: 'Ley de Transparencia — Chile (2008)',
    tipo: 'Nacional',
    aplicacion: 'Obliga a organismos públicos a proteger la información bajo su custodia. En un escenario chileno, entidades estatales afectadas por WannaCry deberían reportar el incidente y adoptar medidas correctivas.',
    color: 'border-green-500',
    badge: 'bg-green-100 text-green-700',
  },
  {
    codigo: 'ISO/IEC 27001',
    nombre: 'Estándar de Seguridad de la Información — Internacional',
    tipo: 'Internacional',
    aplicacion: 'Define controles de gestión de seguridad de la información. La falta de gestión de parches (MS17-010) representa una violación directa del control A.12.6.1 de gestión de vulnerabilidades técnicas.',
    color: 'border-purple-500',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    codigo: 'GDPR',
    nombre: 'Reglamento General de Protección de Datos — UE (2016)',
    tipo: 'Internacional',
    aplicacion: 'Aplicable a las organizaciones europeas afectadas (NHS, Telefónica). Exige notificación de brechas en 72 horas y medidas técnicas adecuadas. Sirve como referencia comparativa para el análisis.',
    color: 'border-yellow-500',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  {
    codigo: 'Budapest Convention',
    nombre: 'Convenio de Budapest sobre Cibercriminalidad (2001)',
    tipo: 'Internacional',
    aplicacion: 'Primer tratado internacional sobre delitos informáticos. Establece marcos de cooperación entre estados para perseguir ataques transfronterizos como WannaCry. Chile adhirió en 2023.',
    color: 'border-slate-500',
    badge: 'bg-slate-100 text-slate-700',
  },
]

export default function Marco() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <Scale className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Marco Normativo Aplicable</h2>
      </div>

      <p className="text-slate-600">
        Dado que el caso WannaCry ocurrió fuera de Chile, el análisis combina la legislación chilena vigente
        —aplicada bajo el escenario hipotético de que el incidente hubiera ocurrido en territorio nacional—
        con normativa internacional relevante para el tipo de ataque y los sectores afectados.
      </p>

      <div className="grid grid-cols-1 gap-4">
        {normas.map((n) => (
          <div key={n.codigo} className={`bg-white rounded-lg shadow p-5 border-l-4 ${n.color}`}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-bold text-slate-800">{n.codigo}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${n.badge}`}>{n.tipo}</span>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-2">{n.nombre}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{n.aplicacion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
