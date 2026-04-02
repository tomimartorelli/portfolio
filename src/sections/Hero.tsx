interface HeroProps {
  onNavigate: (section: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 md:flex-row md:items-center">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70 animate-fade-in">
            Portafolio · 2025
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl animate-fade-in-up">
            Creo experiencias web modernas, limpias y rápidas.
          </h1>
          <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base animate-fade-in-up animation-delay-200">
            Soy desarrollador frontend especializado en{' '}
            <span className="font-semibold text-slate-100">React</span> y{' '}
            <span className="font-semibold text-slate-100">TailwindCSS</span>.
            También diseño interfaces gráficas modernas. Construyo experiencias
            centradas en el usuario, optimizadas para rendimiento y fáciles de
            mantener.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
            <button
              onClick={() => onNavigate('proyectos')}
              className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-primary-soft"
            >
              Ver proyectos
            </button>
            <button
              onClick={() => onNavigate('disenos')}
              className="rounded-full border border-slate-700/80 bg-slate-900/40 px-6 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm hover:border-slate-500/80 transition-colors"
            >
              Ver diseños
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="rounded-full border border-slate-700/80 bg-slate-900/40 px-6 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm hover:border-slate-500/80 transition-colors"
            >
              Hablemos
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 animate-fade-in-up animation-delay-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Disponible para proyectos freelance
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1">
              <span className="text-slate-300">Stack:</span>
              <span className="text-slate-100">
                React · TypeScript · Tailwind · Figma
              </span>
            </span>
          </div>
        </div>

        {/* Right Section - Card */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 shadow-2xl shadow-primary/20 backdrop-blur animate-fade-in-up animation-delay-300">
            <div className="pointer-events-none absolute inset-x-10 -top-10 h-40 bg-gradient-to-b from-primary/40 via-primary/0 to-transparent blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Perfil
                  </p>
                  <p className="text-lg font-semibold text-slate-50">
                    Desarrollador & Diseñador
                  </p>
                </div>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  React · Tailwind
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.65rem] text-slate-400">Experiencia</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">+3</p>
                  <p className="text-[0.7rem] text-slate-400">
                    años creando interfaces
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.65rem] text-slate-400">Proyectos</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">+10</p>
                  <p className="text-[0.7rem] text-slate-400">apps y landings</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.65rem] text-slate-400">Diseños</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">+20</p>
                  <p className="text-[0.7rem] text-slate-400">
                    piezas gráficas
                  </p>
                </div>
              </div>

              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
                <p className="font-medium text-slate-100">
                  ¿Qué puedo hacer por tu proyecto?
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      Diseñar interfaces responsive y modernas con TailwindCSS.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      Construir aplicaciones SPA con React y TypeScript.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      Crear diseños gráficos y branding para proyectos.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

