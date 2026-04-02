import { type ReactNode } from 'react'
import Header from './Header'
import SkipToContent from './SkipToContent'
import ShareButtons from './ShareButtons'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary w-full">
      <SkipToContent />
      <Header />
      <main id="main-content" className="w-full m-0 p-0" tabIndex={-1}>{children}</main>
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-text-secondary text-center md:text-left">
              © 2025 Tomi. Desarrollado con React, TypeScript y TailwindCSS.
            </p>
            <ShareButtons className="hidden md:flex" />
          </div>
          <div className="flex justify-center md:hidden">
            <ShareButtons />
          </div>
        </div>
      </footer>
    </div>
  )
}
