import { useState } from 'react'
import ScrollAnimation from '../components/ScrollAnimation'
import SectionDecorations from '../components/SectionDecorations'

interface MethodItem {
  title: string
  description: string
}

interface MethodSectionProps {
  items: MethodItem[]
}

export default function MethodSection({ items }: MethodSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-black" style={{ height: '120vh' }}>
      {/* Transition elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#6A0DAD]/20 to-transparent"></div>
      <div className="absolute inset-0 bg-background z-0"></div>
      <SectionDecorations arrow="top-right" asterisk="bottom-left" />
      <div className="absolute inset-0 flex items-center justify-center z-10 overflow-y-auto">
        <div className="mx-auto w-full max-w-[90rem] relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Side - Large Title */}
          <div className="flex-shrink-0 lg:w-auto mb-4 sm:mb-5 md:mb-0">
            <ScrollAnimation direction="right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[12rem] font-bold text-text-primary uppercase tracking-tight leading-[0.9]">
                <span className="block">EL</span>
                <span className="block">MÉTODO</span>
              </h2>
            </ScrollAnimation>
          </div>
          
          {/* Right Side - Accordion */}
          <div className="flex-1 w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl lg:ml-auto">
            <div className="w-full">
              {items.map((item, index) => {
                const isOpen = openItems.has(index)
                const isFirst = index === 0
                return (
                  <ScrollAnimation key={index} delay={index * 0.05} direction="left">
                    <div className="relative">
                    {!isFirst && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-border"></div>
                    )}
                    <div className="relative bg-background">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between py-2.5 sm:py-3 md:py-4 lg:py-5 px-0 text-left hover:opacity-80 transition-opacity group bg-background relative z-10"
                      >
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-text-primary uppercase tracking-tight pr-2 sm:pr-3 md:pr-4">
                          {item.title}
                        </span>
                        <svg
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-text-primary flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{
                          transitionProperty: 'max-height, opacity',
                        }}
                      >
                        <div className={`pb-2.5 sm:pb-3 md:pb-4 lg:pb-5 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed bg-background transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  </ScrollAnimation>
                )
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

