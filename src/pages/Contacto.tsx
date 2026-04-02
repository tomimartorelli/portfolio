import { useState, type FormEvent } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import LoadingSpinner from '../components/LoadingSpinner'
import { useToast } from '../contexts/ToastContext'
import { useAnalytics } from '../hooks/useAnalytics'
import { useTheme } from '../contexts/ThemeContext'
import emailjs from '@emailjs/browser'

interface FormData {
  firstName: string
  lastName: string
  email: string
  mensaje: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  mensaje?: string
}

export default function Contacto() {
  const { showToast } = useToast()
  const { trackEvent } = useAnalytics()
  const { theme } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Requerido'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Requerido'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'Mínimo 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS no está configurado correctamente. Por favor, configura las variables de entorno.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.mensaje,
          to_name: 'Tomás Martorelli',
        },
        publicKey
      )

      // Success
      showToast('Mensaje enviado con éxito. Te responderé pronto.', 'success')
      trackEvent('contact_form_submit', {
        status: 'success',
        email: formData.email,
      })
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mensaje: '',
      })
    } catch (error) {
      console.error('Error al enviar el email:', error)
      showToast('Error al enviar. Por favor intenta nuevamente o contáctame directamente.', 'error', 5000)
      trackEvent('contact_form_submit', {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <SEO 
        title="Contacto | Tomás Martorelli"
        description="Ponte en contacto conmigo para discutir tu próximo proyecto. Email, teléfono y redes sociales. Estoy disponible para nuevos proyectos y colaboraciones."
        url="/contacto"
      />
      <div className="min-h-screen bg-background text-text-primary">
        <section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-8 lg:pt-12 xl:pt-16 pb-4 md:pb-0">
              {/* Title */}
              <ScrollAnimation direction="up" delay={0}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-text-primary mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 leading-[1.1]">
                  Contacto
                </h1>
              </ScrollAnimation>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12">
                {/* Left Column - Contact Information */}
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:pr-8">
                  <div>
                    <p className="text-xs sm:text-sm text-text-secondary mb-0.5 sm:mb-1">Nombre</p>
                    <a 
                      href="mailto:tomas@martorelli.dev" 
                      className="text-sm sm:text-base text-text-primary hover:opacity-80 transition-opacity block"
                    >
                      tomas@martorelli.dev
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-xs sm:text-sm text-text-secondary mb-0.5 sm:mb-1">Teléfono</p>
                    <a 
                      href="tel:+5491123456789" 
                      className="text-sm sm:text-base text-text-primary hover:opacity-80 transition-opacity block"
                    >
                      +54 9 11 2345-6789
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-xs sm:text-sm text-text-secondary mb-0.5 sm:mb-1">Dirección</p>
                    <p className="text-sm sm:text-base text-text-primary">
                      Buenos Aires, Argentina
                    </p>
                  </div>

                  <div className={`pt-5 sm:pt-6 md:pt-8 border-t ${theme === 'dark' ? 'border-white/20' : 'border-border'}`}>
                    <div className="space-y-3 sm:space-y-4">
                      <a
                        href="https://linkedin.com/in/tomas-martorelli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors block"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/tomas-martorelli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors block"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right Column - Contact Form */}
              <ScrollAnimation direction="left" delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 lg:pl-8">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-xs sm:text-sm text-text-secondary mb-1.5 sm:mb-2">
                      Nombre <span className="text-text-primary">(requerido)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs text-text-secondary mb-1.5 sm:mb-2">
                          Nombre
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-0 border-b border-border px-0 py-1.5 sm:py-2 text-sm sm:text-base text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-primary transition-colors ${
                              errors.firstName ? 'border-red-500' : ''
                            }`}
                            placeholder=""
                          />
                          {errors.firstName && (
                            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-400">{errors.firstName}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs text-text-secondary mb-1.5 sm:mb-2">
                          Apellido
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-0 border-b border-border px-0 py-1.5 sm:py-2 text-sm sm:text-base text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-primary transition-colors ${
                              errors.lastName ? 'border-red-500' : ''
                            }`}
                            placeholder=""
                          />
                          {errors.lastName && (
                            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-400">{errors.lastName}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs sm:text-sm text-text-secondary mb-1.5 sm:mb-2">
                      Email <span className="text-text-primary">(requerido)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-0 border-b border-border px-0 py-1.5 sm:py-2 text-sm sm:text-base text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-primary transition-colors ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder=""
                      />
                      {errors.email && (
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs sm:text-sm text-text-secondary mb-1.5 sm:mb-2">
                      Mensaje <span className="text-text-primary">(requerido)</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full bg-transparent border-0 border-b border-border px-0 py-1.5 sm:py-2 text-sm sm:text-base text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-primary transition-colors resize-none ${
                          errors.mensaje ? 'border-red-500' : ''
                        }`}
                        placeholder=""
                      />
                      {errors.mensaje && (
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-400">{errors.mensaje}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 border border-border text-xs sm:text-sm uppercase tracking-wide text-text-primary transition-all duration-300 ${
                      isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-primary hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {isSubmitting && <LoadingSpinner size="sm" />}
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </form>
              </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
