"use client"

import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const programs = [
  {
    title: "Kids Martial Arts",
    description:
      "Give your child a chance to grow and develop confidence today. These classes are the perfect balance of maintaining health and fitness and improving confidence and discipline.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/6719/Kids-Martial-Arts-152317.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our kids program teaches martial arts fundamentals while building character, confidence, and physical fitness. Children learn respect, discipline, and self-defense in a supportive environment.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Self-Defense:</strong> Learn practical skills to stay safe</li>
            <li><strong>Confidence:</strong> Build self-esteem through achievement</li>
            <li><strong>Discipline:</strong> Develop focus and respect</li>
            <li><strong>Fitness:</strong> Stay active and healthy</li>
            <li><strong>Fun:</strong> Enjoy learning in a positive environment</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Brazilian Jiu-Jitsu",
    description:
      "Our Brazilian Jiu-Jitsu program can help you learn the skills of ground grappling one step at a time. We train men and women all across West Hartford and beyond. All experience levels are welcome.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/6719/BJJ-152321.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Brazilian Jiu-Jitsu emphasizes ground fighting and submission holds. Our BJJ program teaches you how to control and submit opponents regardless of size or strength through proper technique.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Features:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Fundamentals:</strong> Learn the basics of positions and submissions</li>
            <li><strong>Advanced Techniques:</strong> Refine your skills with complex moves</li>
            <li><strong>Live Sparring:</strong> Apply techniques in controlled rolling sessions</li>
            <li><strong>Belt Progression:</strong> Structured curriculum for advancement</li>
            <li><strong>Competition Training:</strong> Prepare for tournaments and competitions</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Striking",
    description:
      "Burn fat and build lean muscle while you learn some of the most effective self-defense skills around. Our Striking Classes in West Hartford are perfect for all ages and abilities.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/6719/Striking-152320.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our striking program develops powerful skills using Boxing and Muay Thai techniques, exceptional conditioning, and mental toughness.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Training Focus:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Striking Techniques:</strong> Punches, kicks, knees, and elbows</li>
            <li><strong>Clinch Work:</strong> Close-range fighting and control</li>
            <li><strong>Cardio Conditioning:</strong> Build incredible endurance</li>
            <li><strong>Pad Work:</strong> Develop power and accuracy</li>
            <li><strong>Sparring:</strong> Apply techniques in controlled scenarios</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Mixed Martial Arts",
    description:
      "Learn the best blend of fighting techniques with our MMA classes in West Hartford. We are helping our community get in shape fast and learn the best self-defense skills in town.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/6719/MMA-152322.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our MMA program combines the best techniques from multiple martial arts disciplines. Train in a safe, structured environment with experienced instructors who will help you develop both striking and grappling skills.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Training Includes:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Striking:</strong> Boxing and Muay Thai techniques</li>
            <li><strong>Grappling:</strong> Brazilian Jiu-Jitsu and wrestling</li>
            <li><strong>Fight Strategy:</strong> Learn to combine techniques effectively</li>
            <li><strong>Conditioning:</strong> Build strength and endurance</li>
            <li><strong>All Skill Levels:</strong> From beginners to advanced competitors</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Wrestling",
    description:
      "Our Wrestling Classes in West Hartford is the perfect way for beginners and experienced wrestlers to build their skills and challenge their bodies like never before.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/6719/Wrestling-2-153293.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Wrestling is one of the most effective martial arts for controlling opponents and taking fights to the ground. Our wrestling program teaches takedowns, positioning, and control techniques.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Training Includes:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Takedowns:</strong> Single legs, double legs, and throws</li>
            <li><strong>Position Control:</strong> Maintain dominant positions</li>
            <li><strong>Escapes:</strong> Get out of bad positions</li>
            <li><strong>Strength Training:</strong> Build functional strength</li>
            <li><strong>Competition Prep:</strong> Train for wrestling competitions</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Underdog Fitness",
    description:
      "Are you sick of boring treadmill workouts at over-priced gyms? Our Fitness programs offer a wide range of elements guaranteed to give you amazing results.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/6719/Fitness-Classes-152319.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Get started today to see real results and enjoy a support system like never before. Our fitness program combines martial arts conditioning with functional training.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Full Body Workouts:</strong> Burn fat and build muscle</li>
            <li><strong>Functional Training:</strong> Real-world fitness results</li>
            <li><strong>Community Support:</strong> Train with motivated people</li>
            <li><strong>Expert Coaching:</strong> Professional instruction</li>
            <li><strong>Flexible Schedule:</strong> Classes throughout the week</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function Classes() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)

  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert martial arts instruction for all skill levels. From beginners to competitors, we have the right program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 justify-items-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: program.objectPosition || "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  <Button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn mt-auto cursor-pointer"
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-100 p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              Take a Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience Underdog MMA</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Come visit our facility and see why Underdog MMA is West Hartford's premier martial arts academy. We'd love to meet you and show you what makes our training special.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                Request More Info
              </Button>
              <p className="text-sm text-muted-foreground">Programs for all skill levels • Expert instruction</p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedProgram?.title}</DialogTitle>
            <div className="text-base leading-relaxed pt-4">{selectedProgram?.fullDescription}</div>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => {
                setSelectedProgram(null)
                scrollToForm()
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Get Started
            </Button>
            <Button onClick={() => setSelectedProgram(null)} variant="outline" className="flex-1 cursor-pointer">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
