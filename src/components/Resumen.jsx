import { FileText, Calendar, Globe, AlertTriangle } from 'lucide-react'

export default function Resumen() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <FileText className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Resumen Ejecutivo del Caso</h2>
      </div>

      {/* Ficha del caso */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-500">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={18} className="text-red-500" />
            <span className="font-semibold text-slate-700">Fecha</span>
          </div>
          <p className="text-slate-600 text-sm">12 de mayo de 2017</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-slate-500">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={18} className="text-slate-500" />
            <span className="font-semibold text-slate-700">Alcance</span>
          </div>
          <p className="text-slate-600 text-sm">150 países · +200.000 sistemas</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-yellow-500">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={18} className="text-yellow-500" />
            <span className="font-semibold text-slate-700">Daño estimado</span>
          </div>
          <p className="text-slate-600 text-sm">USD 4.000 millones</p>
        </div>
      </div>

      {/* Descripción */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">¿Qué ocurrió?</h3>
        <p className="text-slate-600 leading-relaxed">
          El 12 de mayo de 2017 se desencadenó uno de los ataques de ransomware más devastadores de la historia: <strong>WannaCry</strong>. El malware cifraba los archivos de los equipos infectados con Windows y exigía un rescate en Bitcoin —equivalente entre USD 300 y USD 600— para entregar la clave de descifrado. La rapidez de su propagación fue excepcional: en menos de 24 horas comprometió más de 200.000 sistemas en 150 países.
        </p>
        <p className="text-slate-600 leading-relaxed">
          El vector de infección fue la vulnerabilidad <strong>EternalBlue</strong>, un exploit del protocolo SMBv1 de Windows, desarrollado originalmente por la Agencia de Seguridad Nacional de Estados Unidos (NSA) y filtrado públicamente por el grupo Shadow Brokers en abril de 2017. Microsoft había publicado el parche de seguridad <strong>MS17-010</strong> el 14 de marzo de 2017, casi dos meses antes del ataque, pero millones de organizaciones no lo habían aplicado.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Entre los sectores más afectados se encuentran el sistema de salud del Reino Unido (NHS), empresas de telecomunicaciones como Telefónica en España, organismos gubernamentales de Rusia y Ucrania, y entidades financieras de múltiples países. El investigador Marcus Hutchins encontró accidentalmente un <em>kill switch</em> registrando un dominio que el malware consultaba, lo que detuvo parte de la propagación.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Los gobiernos de Estados Unidos, Reino Unido y Australia atribuyeron el ataque al grupo <strong>Lazarus Group</strong>, vinculado a Corea del Norte, aunque esta atribución no fue reconocida formalmente por Pyongyang. El incidente evidenció la fragilidad de infraestructuras críticas ante vulnerabilidades conocidas y no parcheadas.
        </p>
      </div>

      {/* Actores */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Actores principales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { rol: 'Atacante', desc: 'Lazarus Group (atribuido a Corea del Norte)' },
            { rol: 'Víctimas', desc: '+200.000 organizaciones en 150 países' },
            { rol: 'Origen del exploit', desc: 'NSA (EternalBlue, filtrado por Shadow Brokers)' },
            { rol: 'Proveedor afectado', desc: 'Microsoft (vulnerabilidad en SMBv1 de Windows)' },
          ].map(({ rol, desc }) => (
            <div key={rol} className="flex gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="font-semibold text-slate-700 min-w-max">{rol}:</span>
              <span className="text-slate-600 text-sm">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
