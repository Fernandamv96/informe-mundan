import { Database } from 'lucide-react'

const tiposDatos = [
  { tipo: 'Datos de identificación', ejemplo: 'Nombres, RUT, correos de funcionarios y pacientes', sensible: false },
  { tipo: 'Datos de salud', ejemplo: 'Historiales médicos, diagnósticos, tratamientos (NHS)', sensible: true },
  { tipo: 'Datos financieros', ejemplo: 'Cuentas bancarias, tarjetas de crédito de clientes', sensible: true },
  { tipo: 'Datos operacionales', ejemplo: 'Archivos cifrados de sistemas corporativos y gubernamentales', sensible: false },
]

const arco = [
  {
    derecho: 'Acceso',
    descripcion: 'El titular puede solicitar al responsable del banco de datos información sobre los datos que posee de él y su finalidad de uso.',
    articulo: 'Art. 12 Ley 19.628',
    impacto: 'En el contexto de WannaCry, las víctimas cuyos datos fueron comprometidos tenían derecho a saber qué información fue afectada.',
  },
  {
    derecho: 'Rectificación',
    descripcion: 'Permite corregir datos inexactos, incompletos o desactualizados que obran en poder del responsable.',
    articulo: 'Art. 12 Ley 19.628',
    impacto: 'Si el cifrado corrompió registros, las organizaciones debían restaurar y rectificar la información afectada.',
  },
  {
    derecho: 'Cancelación',
    descripcion: 'El titular puede exigir la eliminación de sus datos cuando no sean necesarios para la finalidad declarada.',
    articulo: 'Art. 12 Ley 19.628',
    impacto: 'Organizaciones deben eliminar datos que ya no se requieran para minimizar el impacto de futuros ataques.',
  },
  {
    derecho: 'Oposición',
    descripcion: 'El titular puede oponerse al tratamiento de sus datos para fines distintos a los declarados.',
    articulo: 'Art. 12 Ley 19.628',
    impacto: 'Relevante cuando organizaciones trataban datos con fines secundarios no autorizados antes del ataque.',
  },
]

export default function Datos() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <Database className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Datos Personales y Derechos ARCO</h2>
      </div>

      <p className="text-slate-600 text-sm">
        Aunque WannaCry no tuvo como objetivo principal la extracción de datos, el cifrado y potencial
        exposición de información personal activa las obligaciones de la Ley 19.628. El análisis asume
        el escenario hipotético de ocurrencia en Chile.
      </p>

      {/* Tipos de datos */}
      <div className="bg-white rounded-lg shadow p-5">
        <h3 className="font-semibold text-slate-800 mb-4 text-base">Tipos de datos comprometidos</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600">
                <th className="text-left p-2">Tipo de dato</th>
                <th className="text-left p-2">Ejemplo en el caso</th>
                <th className="text-left p-2">Categoría (Ley 19.628)</th>
              </tr>
            </thead>
            <tbody>
              {tiposDatos.map((d) => (
                <tr key={d.tipo} className="border-b border-slate-100">
                  <td className="p-2 font-medium text-slate-700">{d.tipo}</td>
                  <td className="p-2 text-slate-600">{d.ejemplo}</td>
                  <td className="p-2">
                    {d.sensible
                      ? <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium">Dato sensible</span>
                      : <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">Dato personal</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Los datos de salud tienen protección reforzada bajo el Art. 2° letra g) de la Ley 19.628 por ser datos sensibles.
          Su tratamiento requiere consentimiento expreso del titular.
        </p>
      </div>

      {/* Derechos ARCO */}
      <div>
        <h3 className="font-semibold text-slate-800 mb-4 text-base">Derechos ARCO — Aplicación al caso</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {arco.map((a) => (
            <div key={a.derecho} className="bg-white rounded-lg shadow p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {a.derecho}
                </span>
                <span className="text-xs text-slate-500">{a.articulo}</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">{a.descripcion}</p>
              <div className="bg-slate-50 rounded p-2 border-l-2 border-slate-400">
                <p className="text-xs text-slate-600"><strong>En WannaCry:</strong> {a.impacto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Obligaciones del responsable */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h3 className="font-semibold text-blue-800 mb-2">Obligaciones del responsable del banco de datos (Art. 11 Ley 19.628)</h3>
        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
          <li>Adoptar medidas de seguridad para proteger los datos de accesos no autorizados.</li>
          <li>Garantizar la exactitud e integridad de los datos almacenados.</li>
          <li>No ceder los datos a terceros no autorizados.</li>
          <li>Informar al titular cuando sus datos hayan sido comprometidos (obligación reforzada en proyecto de nueva ley).</li>
        </ul>
      </div>
    </div>
  )
}
