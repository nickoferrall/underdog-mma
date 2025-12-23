import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "About Us - Underdog MMA | West Hartford Martial Arts",
  description:
    "Learn about Underdog MMA in West Hartford, CT. Premier martial arts training with expert instruction in MMA, BJJ, Muay Thai, and more for all skill levels.",
  alternates: {
    canonical: "https://underdogmma.com/about",
  },
  openGraph: {
    title: "About Us - Underdog MMA | West Hartford Martial Arts",
    description:
      "Learn about Underdog MMA in West Hartford, CT. Premier martial arts training with expert instruction in MMA, BJJ, Muay Thai, and more.",
    url: "https://underdogmma.com/about",
    images: ["/underdog-facility.jpg"],
  },
};

export default function AboutPage() {
  return <HomeContent scrollTo="facility" />;
}
