import { useState } from 'react'
import { Shield, FileText, Scale, BarChart2, Users, Database, BookOpen, Bot, Menu, X } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

const secciones = [
  { id: 'resumen',           label: 'Resumen',          icon: FileText,    comp: Resumen },
  { id: 'marco',             label: 'Marco Normativo',  icon: Scale,       comp: Marco },
  { id: 'delitos',           label: 'Delitos',          icon: Shield,      comp: Delitos },
  { id: 'comparacion',       label: 'Comparación',      icon: BarChart2,   comp: Comparacion },
  { id: 'responsabilidades', label: 'Responsabilidades',icon: Users,       comp: Responsabilidades },
  { id: 'datos',             label: 'Datos Personales', icon: Database,    comp: Datos },
  { id: 'conclusiones',      label: 'Conclusiones',     icon: BookOpen,    comp: Conclusiones },
  { id: 'prompts',           label: 'Bitácora IA',      icon: Bot,         comp: Prompts },
]

export default function App() {
  const [activa, setActiva] = useState('resumen')
  const [menuAbierto, setMenuAbierto] = useState(false)

  const SeccionActual = secciones.find(s => s.id === activa)?.comp || Resumen

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield size={36} className="text-red-400" />
            <div>
              <h1 className="text-2xl font-bold leading-tight">
                Caso WannaCry 2017 — Análisis Legal
              </h1>
              <p className="text-slate-400 text-sm mt-0.5">
                TI3034 · Fundamentos de Seguridad de la Información · INACAP Valparaíso
              </p>
            </div>
          </div>
          {/* Hamburger mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-slate-800 shadow">
        {/* Desktop */}
        <div className="hidden md:flex max-w-6xl mx-auto overflow-x-auto">
          {secciones.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiva(id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors
                ${activa === id
                  ? 'text-white border-b-2 border-red-400 bg-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
        {/* Mobile dropdown */}
        {menuAbierto && (
          <div className="md:hidden flex flex-col">
            {secciones.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => { setActiva(id); setMenuAbierto(false) }}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium text-left transition-colors
                  ${activa === id
                    ? 'text-white bg-slate-700 border-l-4 border-red-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Contenido */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
        <SeccionActual />
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 text-slate-500 text-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-1">
          <span>Estudiante: Daniel Muñoz — <span className="font-mono">informe_mundan</span></span>
          <span>Docente: Rubén Schnettler L. · INACAP Valparaíso · Otoño 2026</span>
        </div>
      </footer>

    </div>
  )
}
