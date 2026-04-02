import { useTheme } from '../contexts/ThemeContext'

interface SectionDecorationsProps {
  arrow?: 'top-right' | 'top-left' | null
  asterisk?: 'bottom-left' | null
}

export default function SectionDecorations({
  arrow = null,
  asterisk = null,
}: SectionDecorationsProps) {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Flecha en top-left (apuntando diagonalmente hacia arriba-izquierda) */}
      {arrow === 'top-left' && (
        <div className="absolute top-0 left-0" style={{ transform: 'translate(-10%, -10%)' }}>
          <img 
            src={theme === 'light' ? "/img/flechanegra.png" : "/img/flechablanca.png"}
            alt=""
            loading="lazy"
            width={358}
            height={358}
            aria-hidden="true"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-[14.4rem] md:h-[14.4rem] lg:w-[19.2rem] lg:h-[19.2rem] xl:w-[22.4rem] xl:h-[22.4rem] object-contain"
          />
        </div>
      )}

      {/* Flecha en top-right */}
      {arrow === 'top-right' && (
        <div className="absolute top-0 right-0 z-0" style={{ transform: 'translate(10%, -10%)' }}>
          <img 
            src={theme === 'light' ? "/img/flechanegraderecha.png" : "/img/flechablancaderecha.png"}
            alt=""
            loading="lazy"
            width={358}
            height={358}
            aria-hidden="true"
            className="w-24 h-24 sm:w-32 sm:w-32 md:w-[14.4rem] md:h-[14.4rem] lg:w-[19.2rem] lg:h-[19.2rem] xl:w-[22.4rem] xl:h-[22.4rem] object-contain"
            style={{ display: 'block' }}
          />
        </div>
      )}

      {/* Asterisco en bottom-left */}
      {asterisk === 'bottom-left' && (
        <div className="hidden md:block absolute bottom-0 left-0" style={{ transform: 'translate(-10%, 10%)' }}>
          <img 
            src={theme === 'light' ? "/img/asterisconegro.png" : "/img/asteriscoblanco.png"}
            alt=""
            loading="lazy"
            width={358}
            height={358}
            aria-hidden="true"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-[14.4rem] md:h-[14.4rem] lg:w-[19.2rem] lg:h-[19.2rem] xl:w-[22.4rem] xl:h-[22.4rem] object-contain"
          />
        </div>
      )}

    </div>
  )
}
