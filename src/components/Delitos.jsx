import { Shield } from 'lucide-react'

const delitos = [
  {
    articulo: 'Art. 2°',
    tipo: 'Acceso ilícito',
    accion: 'WannaCry explotó EternalBlue para acceder de forma no autorizada a sistemas Windows de terceros a través del puerto 445 (SMBv1).',
    pena: 'Presidio menor en su grado mínimo a medio (61 días – 3 años).',
    agravante: 'Agravado por afectar infraestructura crítica (hospitales, telecomunicaciones).',
  },
  {
    articulo: 'Art. 3°',
    tipo: 'Interceptación ilícita',
    accion: 'Durante la propagación, el malware interceptó comunicaciones de red internas para identificar nuevos equipos vulnerables en la misma subred.',
    pena: 'Presidio menor en su grado medio a máximo (541 días – 5 años).',
    agravante: 'Carácter automatizado y masivo de la interceptación.',
  },
  {
    articulo: 'Art. 4°',
    tipo: 'Ataque a la integridad de sistemas',
    accion: 'El ransomware cifró archivos críticos de los sistemas infectados, dejándolos inoperativos y causando interrupción de servicios esenciales como el NHS.',
    pena: 'Presidio menor en su grado medio a máximo (541 días – 5 años).',
    agravante: 'Daño a sistemas de salud pública constituyó riesgo para la vida de personas.',
  },
  {
    articulo: 'Art. 5°',
    tipo: 'Daño informático',
    accion: 'El cifrado irreversible de archivos (sin pago del rescate) equivale a destrucción de datos. Organizaciones que no tenían respaldo perdieron información de forma permanente.',
    pena: 'Presidio menor en su grado medio (541 días – 3 años).',
    agravante: 'Daño de carácter masivo y transfronterizo.',
  },
  {
    articulo: 'Art. 8°',
    tipo: 'Fraude informático',
    accion: 'La exigencia de pago en Bitcoin bajo la promesa de descifrado —que en muchos casos no se cumplió— configura un engaño con ánimo de lucro mediante sistema informático.',
    pena: 'Presidio menor en su grado máximo a presidio mayor en su grado mínimo (3 años y 1 día – 10 años).',
    agravante: 'Víctimas en múltiples países; lucro en criptomonedas difícil de rastrear.',
  },
]

export default function Delitos() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <Shield className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">Tipificación de Delitos — Ley 21.459</h2>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        <strong>Nota metodológica:</strong> El análisis aplica la Ley N° 21.459 de Chile (vigente desde 2022)
        bajo el escenario hipotético de que las acciones del ataque WannaCry hubieran ocurrido bajo
        jurisdicción chilena, mapeando cada conducta del atacante al artículo correspondiente.
      </div>

      <div className="space-y-4">
        {delitos.map((d) => (
          <div key={d.articulo} className="bg-white rounded-lg shadow p-5">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{d.articulo}</span>
              <span className="font-semibold text-slate-800">{d.tipo}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-slate-700">Conducta del atacante: </span>
                <span className="text-slate-600">{d.accion}</span>
              </div>
              <div>
                <span className="font-medium text-slate-700">Pena asociada: </span>
                <span className="text-slate-600">{d.pena}</span>
              </div>
              <div className="bg-slate-50 rounded p-2 border-l-2 border-slate-400">
                <span className="font-medium text-slate-700">Circunstancia agravante: </span>
                <span className="text-slate-600">{d.agravante}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
