"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What martial arts programs does Underdog MMA offer?",
    answer:
      "Underdog MMA offers comprehensive training in Mixed Martial Arts (MMA), Brazilian Jiu-Jitsu (BJJ), Muay Thai, boxing, and wrestling. We also have specialized kids programs designed for children of all ages. All programs are designed for students of all skill levels, from complete beginners to advanced competitors.",
  },
  {
    question: "Do I need prior experience to start training?",
    answer:
      "No prior experience is necessary! We welcome complete beginners and have programs specifically designed for those new to martial arts. Our instructors will guide you through the fundamentals and help you progress at your own pace. Many of our most dedicated students started with no prior martial arts experience.",
  },
  {
    question: "What are your class schedules and membership options?",
    answer:
      "We offer multiple class times throughout the week to accommodate different schedules. Classes are available Monday through Friday evenings and Saturday mornings. We offer flexible membership options including monthly unlimited memberships and class packages. Contact us to learn about current pricing and find the best option for your training goals.",
  },
  {
    question: "Do you offer kids programs?",
    answer:
      "Yes! We have age-appropriate martial arts programs for children that focus on building confidence, discipline, respect, and self-defense skills in a fun, safe environment. Our kids programs teach fundamental techniques while emphasizing character development and physical fitness.",
  },
  {
    question: "Can I train for competition?",
    answer:
      "Absolutely! We have competition-focused training programs for students interested in competing in MMA, BJJ, Muay Thai, or boxing tournaments. Our experienced instructors provide specialized coaching, sparring sessions, and competition preparation to help you perform at your best.",
  },
  {
    question: "Can I visit the facility before joining?",
    answer:
      "Yes, we encourage everyone to visit our facility and see what we have to offer! We offer free trial classes so you can experience our training firsthand. Contact us to schedule a visit and meet our instructors. We'd love to show you why Underdog MMA is West Hartford's premier martial arts academy.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Underdog MMA
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-white rounded-2xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-bold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
