import { Dumbbell, Users, GraduationCap, Calendar, Heart, Trophy } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Expert Instruction",
    description: "Learn from experienced instructors with proven track records in competition and teaching",
  },
  {
    icon: Users,
    title: "All Skill Levels",
    description: "Programs designed for beginners, intermediate students, and advanced competitors",
  },
  {
    icon: GraduationCap,
    title: "Kids Programs",
    description: "Age-appropriate martial arts training that builds confidence, discipline, and self-defense skills",
  },
  {
    icon: Trophy,
    title: "Competition Training",
    description: "Prepare for tournaments and competitions with specialized coaching and training programs",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Multiple class times throughout the week to fit your busy schedule",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Join a welcoming community of martial artists who support and motivate each other",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premier martial arts training in West Hartford. Expert instruction, supportive community, and programs for all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
              >
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
