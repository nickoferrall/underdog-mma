"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    text: "If you are looking for the real deal, if you are serious about becoming a proficient fighter, Underdog is the only place for you! There is no other mixed martial arts gym in the Hartford area that has what Underdog offers. Boxing, Muay Thai, Wrestling and MMA training.",
    author: "Yosef, Rabbi",
    source: "google",
  },
  {
    text: "Underdog BJJ provided me top-notch training in both martial arts and strength & conditioning. They accepted me as family and took me in as one of their own. The coaches and instructors provided me with mentorship and guidance that carried on beyond the mats.",
    author: "Cesar T., District Manager",
    source: "google",
  },
  {
    text: "I joined Underdog after fighting for a few other gyms, and the fight team and trainers made me feel like family. The team really cares about everyone here and the training is excellent. It is comforting to know you have the support of this team.",
    author: "Erik L., Construction Manager",
    source: "google",
  },
  {
    text: "Some people join fraternities in college. I joined Underdog. I was in a dark place in college, going through some tough times, and Underdog saved me. I joined because I missed martial arts training and this community helped me through.",
    author: "John D., S&C Coach",
    source: "google",
  },
  {
    text: "Since joining Underdog in 2010, I have gone from a relatively unknown mixed martial artist, to a top 50 ranked featherweight in the world; competing against the highest level fighters in the game today.",
    author: "Matt B., Pro MMA Fighter",
    source: "google",
  },
  {
    text: "Having been in the military and a student of the martial arts & police/military combat systems, I can say that Underdog offers exceptional training. The instruction and community are second to none.",
    author: "Lou, Commander USCG",
    source: "google",
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a martial arts community that supports and motivates each other every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100/60 via-slate-50/40 to-emerald-100/50 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px] opacity-60" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  {testimonial.source === "google" && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-60">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                      </svg>
                      <span>Google</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-foreground text-sm">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
