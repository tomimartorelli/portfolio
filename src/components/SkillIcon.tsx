import { type ReactElement } from 'react'

interface SkillIconProps {
  name: string
  className?: string
}

export default function SkillIcon({ name, className = 'w-5 h-5' }: SkillIconProps) {
  const icons: Record<string, ReactElement> = {
    React: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    TypeScript: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    TailwindCSS: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
      </svg>
    ),
    'Next.js': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    Vite: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    Figma: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="6" y="6" width="4" height="4" rx="1" />
        <rect x="14" y="6" width="4" height="4" rx="1" />
        <rect x="6" y="14" width="4" height="4" rx="1" />
        <rect x="14" y="14" width="4" height="4" rx="1" />
        <rect x="10" y="10" width="4" height="4" rx="1" />
      </svg>
    ),
    'Adobe Illustrator': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    'Adobe Photoshop': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12l-4 4-4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    'UI/UX Design': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    Git: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v8M8 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    'Node.js': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    Firebase: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    'REST APIs': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="20" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    HTML5: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    CSS3: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    'Tailwind CSS': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
      </svg>
    ),
    JavaScript: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    'Vue.js': (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    PHP: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    Laravel: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    MySQL: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="8" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="16" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    MongoDB: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 7s7-3 7-7c0-4-3-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16c-2 0-4-1-4-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    GitHub: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    WordPress: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6M6 12h6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    Vercel: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 22h20L12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    Jest: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  }

  return icons[name] || (
    <div className={`${className} border border-current rounded`} />
  )
}

