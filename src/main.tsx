import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastProvider } from './contexts/ToastContext'
import Analytics from './components/Analytics'

const gaId = import.meta.env.VITE_GA_ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        {gaId && <Analytics gaId={gaId} />}
      <App />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
