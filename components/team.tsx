"use client"

import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Coach Russell Leak",
    role: "Head MMA Coach & Striking Instructor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Coach-Russell-Leak-153936.jpg",
    bio: "The owner of Underdog MMA, Sifu Russell Leak began training Jeet Kune Do under Master Instructor Chris Smith in 2003. A true teacher who is dedicated, passionate and has the rare ability to truly train and improve his students.",
  },
  {
    name: "Coach John Durrett",
    role: "Head S&C Coach / General Manager",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/John-Durrett-153657.jpg",
    bio: "Coach John Durrett has been working in the fitness/athletics industry as a personal trainer or strength and conditioning coach for over a decade.",
  },
  {
    name: "Professor Diogo Araujo",
    role: "Head Brazilian Jiu-Jitsu Instructor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Diogo-Moreno-Araujo-173884.jpg",
    bio: "Diogo 'Moreno' Araujo is the head Brazilian Jiu-Jitsu coach at Underdog MMA. A storied and active competitor who has competed on the regional, national, and international level.",
  },
  {
    name: "Coach Kia Gholampour",
    role: "Head Wrestling Coach / MMA Coach",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Kia-Gholampour-153659.jpg",
    bio: "Coach Kia wrestled for Farmington High School, while doing Greco-Roman and Freestyle wrestling in the off seasons at the Bristol Boys and Girls Club.",
  },
  {
    name: "Johnny Lopez",
    role: "Kid's BJJ Coach",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Johnny-Lopez-154330.jpg",
    bio: "Johnny Lopez began training at our academy in 2012 and quickly established himself as one of the top 125 lbs fighters in the area.",
  },
  {
    name: "Stephanie Fox",
    role: "Women's BJJ Coach",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Stephanie-Fox-218770.jpg",
    bio: "Stephanie Fox is a black belt in Brazilian Jiu-Jitsu under head coach Diogo 'Moreno' Araujo. She is an ambassador for Tap Cancer Out, a Jiu-Jitsu based nonprofit.",
  },
  {
    name: "Adel Lolic",
    role: "Striking Coach",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Adel-Lolic-154332.jpg",
    bio: "Coach Adel has been training and competing in various forms of martial arts for over a decade. He was a multi-sport athlete in high school.",
  },
  {
    name: "Christopher Samboy",
    role: "Wrestling / MMA Coach",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/6719/Christopher-Samboy-153655.jpg",
    bio: "Coach Chris Samboy began wrestling his Sophomore year of high school in 2010. His passion for the sport and combat sports has driven him ever since.",
  },
]

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced instructors bring years of training and competition experience to help you achieve your martial arts goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full max-w-[280px] ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[1px] opacity-70" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                <div className="relative w-full h-[280px] overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-center min-h-[100px]">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
