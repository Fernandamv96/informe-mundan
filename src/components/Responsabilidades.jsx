import { Users } from 'lucide-react'

const actores = [
  {
    actor: 'Lazarus Group (atacantes)',
    tipo: 'Agresor',
    color: 'border-red-500 bg-red-50',
    badge: 'bg-red-100 text-red-700',
    penal: 'Responsables directos de los delitos tipificados en los Arts. 2°, 3°, 4°, 5° y 8° de la Ley 21.459. Penas privativas de libertad de hasta 10 años bajo la agravante de daño masivo.',
    civil: 'Obligación de indemnizar los daños y perjuicios causados a víctimas (Art. 2.314 Código Civil). En la práctica, la atribución a un Estado y la anonimización dificultan el ejercicio de la acción civil.',
    administrativa: 'No aplica directamente; sin embargo, la atribución estatal podría generar responsabilidad internacional del Estado de Corea del Norte.',
  },
  {
    actor: 'Microsoft',
    tipo: 'Proveedor',
    color: 'border-blue-500 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    penal: 'No existe responsabilidad penal. Microsoft publicó el parche MS17-010 el 14 de marzo de 2017, cumpliendo su deber de divulgación responsable.',
    civil: 'Posible responsabilidad civil por mantener soporte de SMBv1 en versiones antiguas y no notificar activamente a clientes sin soporte (Windows XP). Varios hospitales del NHS usaban versiones sin soporte al momento del ataque.',
    administrativa: 'Reguladores de distintos países analizaron si Microsoft cumplió estándares de notificación. No se aplicaron sanciones formales.',
  },
  {
    actor: 'Organizaciones afectadas (NHS, Telefónica, etc.)',
    tipo: 'Víctima / Responsable',
    color: 'border-yellow-500 bg-yellow-50',
    badge: 'bg-yellow-100 text-yellow-700',
    penal: 'No tienen responsabilidad penal por ser víctimas del ataque.',
    civil: 'Responsabilidad civil frente a sus usuarios por no aplicar el parche disponible. El NHS enfrentó demandas de pacientes por retrasos en atención médica derivados del ataque (Art. 2.314 CC aplicado por analogía bajo Ley 19.628 en contexto chileno).',
    administrativa: 'En Chile, bajo Ley 19.628, el responsable del banco de datos que no adoptó medidas de seguridad puede ser sancionado. Bajo GDPR (Reino Unido), el NHS fue investigado por la ICO.',
  },
  {
    actor: 'NSA (Agencia de Seguridad Nacional, EE.UU.)',
    tipo: 'Corresponsable',
    color: 'border-slate-500 bg-slate-50',
    badge: 'bg-slate-100 text-slate-700',
    penal: 'No tiene responsabilidad penal directa, pero su acumulación de vulnerabilidades sin divulgación (EternalBlue) generó debate ético-legal sobre responsabilidad estatal.',
    civil: 'Controversia sobre responsabilidad del Estado por no divulgar oportunamente la vulnerabilidad a Microsoft, lo que habría permitido un parche anterior. No se ejercieron acciones civiles exitosas.',
    administrativa: 'El caso impulsó debates sobre la política de divulgación de vulnerabilidades (VEP — Vulnerabilities Equities Process) y llevó a reformas internas.',
  },
]

export default function Responsabilidades() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <Users className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Responsabilidades Legales de los Actores</h2>
      </div>

      <div className="space-y-5">
        {actores.map((a) => (
          <div key={a.actor} className={`rounded-lg border-l-4 ${a.color} p-5 shadow-sm`}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h3 className="font-bold text-slate-800 text-base">{a.actor}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${a.badge}`}>{a.tipo}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-slate-700 mb-1">⚖️ Responsabilidad Penal</p>
                <p className="text-slate-600 leading-relaxed">{a.penal}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">💼 Responsabilidad Civil</p>
                <p className="text-slate-600 leading-relaxed">{a.civil}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">🏛️ Responsabilidad Administrativa</p>
                <p className="text-slate-600 leading-relaxed">{a.administrativa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
