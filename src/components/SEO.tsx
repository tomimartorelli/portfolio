import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({
  title = 'Tomás Martorelli | Portfolio',
  description = 'Portfolio de Tomás Martorelli - Desarrollador Full Stack, Diseñador UX/UI y Diseñador Gráfico. Especializado en React, TypeScript, Node.js y diseño moderno.',
  keywords = 'desarrollador full stack, react, typescript, diseñador ux/ui, diseñador gráfico, portfolio, web developer',
  image = '/img/logo.png',
  url = '',
  type = 'website',
}: SEOProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://tomasmartorelli.com'
  const fullUrl = url && url.startsWith('http') ? url : url && url.startsWith('/') ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image && image.startsWith('http') ? image : `${siteUrl}${image}`

  useEffect(() => {
    // Actualizar título
    document.title = title

    // Función auxiliar para actualizar o crear meta tags
    const setMetaTag = (property: string, content: string, attribute: 'name' | 'property' = 'property') => {
      let element = document.querySelector(`meta[${attribute}="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Función auxiliar para actualizar link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // Primary Meta Tags
    setMetaTag('title', title, 'name')
    setMetaTag('description', description, 'name')
    setMetaTag('keywords', keywords, 'name')

    // Canonical URL
    setLinkTag('canonical', fullUrl)

    // Open Graph / Facebook
    setMetaTag('og:type', type)
    setMetaTag('og:url', fullUrl)
    setMetaTag('og:title', title)
    setMetaTag('og:description', description)
    setMetaTag('og:image', fullImageUrl)

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:url', fullUrl)
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', fullImageUrl)

    // Cleanup function para restaurar valores por defecto al desmontar
    return () => {
      document.title = 'Tomás Martorelli | Portfolio'
    }
  }, [title, description, keywords, image, url, type, fullUrl, fullImageUrl])

  // Este componente no renderiza nada visualmente
  return null
}

