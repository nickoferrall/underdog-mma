import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Martial Arts Programs - Underdog MMA | West Hartford, CT",
  description:
    "Explore martial arts programs at Underdog MMA in West Hartford, CT. MMA, Brazilian Jiu-Jitsu, Muay Thai, boxing, wrestling, and kids programs for all skill levels.",
  alternates: {
    canonical: "https://underdogmma.com/programs",
  },
  openGraph: {
    title: "Martial Arts Programs - Underdog MMA | West Hartford, CT",
    description:
      "Explore martial arts programs at Underdog MMA in West Hartford, CT. MMA, BJJ, Muay Thai, boxing, wrestling, and kids programs.",
    url: "https://underdogmma.com/programs",
    images: ["/underdog-facility.jpg"],
  },
};

export default function ProgramsPage() {
  return <HomeContent scrollTo="programs" />;
}
