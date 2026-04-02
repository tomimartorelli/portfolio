import Card from './Card'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  type?: 'development' | 'design'
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  type = 'development',
}: ProjectCardProps) {
  return (
    <Card hover className="group h-full">
      <div className="flex h-full flex-col">
        {image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <div className="aspect-video w-full bg-gradient-to-br from-primary/20 via-border to-background-card transition-transform duration-300 group-hover:scale-105" />
          </div>
        )}
        <div className="flex flex-1 flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide">{title}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                type === 'development'
                  ? 'bg-border text-text-primary'
                  : 'bg-border text-text-primary'
              }`}
            >
              {type === 'development' ? 'Desarrollo' : 'Diseño'}
            </span>
          </div>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background-card px-2.5 py-0.5 text-xs text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-soft transition-colors"
            >
              Ver proyecto
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
