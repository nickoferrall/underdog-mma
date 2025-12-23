import { Metadata } from "next"
import { HomeContent } from "@/components/home-content"

export const metadata: Metadata = {
  title: "Our Instructors - Underdog MMA | West Hartford, CT",
  description:
    "Meet the expert instructors at Underdog MMA. Our experienced martial arts coaches are committed to helping you achieve your training goals in West Hartford, Connecticut.",
  keywords: [
    "Underdog MMA instructors",
    "West Hartford martial arts coaches",
    "MMA trainers Connecticut",
    "BJJ instructors West Hartford",
    "Muay Thai coaches Connecticut",
  ],
  alternates: {
    canonical: "https://underdogmma.com/team",
  },
}

export default function TeamPage() {
  return <HomeContent scrollTo="team" />
}

