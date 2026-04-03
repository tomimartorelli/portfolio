import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy loading de páginas para mejor performance
const Home = lazy(() => import('./pages/Home'))
const SobreMi = lazy(() => import('./pages/SobreMi'))
const Proyectos = lazy(() => import('./pages/Proyectos'))
const Disenos = lazy(() => import('./pages/Disenos'))
const Contacto = lazy(() => import('./pages/Contacto'))
const Pricing = lazy(() => import('./pages/Pricing'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Componente de carga mejorado
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-text-secondary text-sm">Cargando...</p>
      </div>
    </div>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<LoadingFallback />}>
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/disenos" element={<Disenos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
