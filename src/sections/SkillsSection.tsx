import ScrollAnimation from '../components/ScrollAnimation'
import SkillIcon from '../components/SkillIcon'
import MagicBentoCard from '../components/MagicBentoCard'
import SectionDecorations from '../components/SectionDecorations'

interface Skill {
  name: string
  level: number
}

interface SkillGroup {
  category: string
  description: string
  items: Skill[]
}

interface SkillsSectionProps {
  skills: SkillGroup[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
      {/* Transition elements */}
      <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-16 sm:pt-20 md:pt-0 pb-2 md:pb-0">
        <div className="mb-2 sm:mb-3 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-1.5 sm:gap-2 md:gap-4 mb-2 sm:mb-3 md:mb-4">
            <div className="flex-1">
              <ScrollAnimation direction="up" delay={0}>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-text-secondary font-medium mb-1 sm:mb-1.5 md:mb-2">
                  • SKILLS & EXPERTISE
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.05}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                  TECNOLOGÍAS QUE DOMINO
                </h2>
              </ScrollAnimation>
            </div>
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-primary/20 to-primary-soft/10 border border-primary/30 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-0.5">
                      {skills.reduce((total, group) => total + group.items.length, 0)}+
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-text-secondary uppercase tracking-wide">
                      Tecnologías
                    </p>
                  </div>
                </div>
                <div className="px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 lg:py-3 bg-background-cardHover border border-border rounded-lg">
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse"></div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-text-primary font-medium uppercase tracking-wide">
                      Always Learning
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 mt-2 sm:mt-3 md:mt-0">
          {skills.map((skillGroup, groupIndex) => (
            <ScrollAnimation key={groupIndex} delay={0.1 + groupIndex * 0.05} direction="up">
              <MagicBentoCard
                className="h-full flex flex-col p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 bg-background-cardHover rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                particleCount={4}
                glowColor="106, 13, 173"
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
              >
                <div className="mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 pb-0.5 sm:pb-1 md:pb-1.5 lg:pb-2 xl:pb-3 border-b border-border">
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-text-primary uppercase tracking-wide mb-0.5 sm:mb-1">
                    {skillGroup.category}
                  </h3>
                  {skillGroup.description && (
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-text-secondary leading-tight sm:leading-relaxed">
                      {skillGroup.description}
                    </p>
                  )}
                </div>
                <div className="flex-1 space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2 xl:space-y-3">
                  {skillGroup.items.map((skill, index) => (
                    <div key={index} className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                          <div className="text-text-secondary flex-shrink-0">
                            <SkillIcon name={skill.name} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                          </div>
                          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-text-primary truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] md:text-xs text-text-secondary font-medium flex-shrink-0 ml-1 sm:ml-1.5 md:ml-2">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-0.5 sm:h-1 md:h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-soft rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MagicBentoCard>
            </ScrollAnimation>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

