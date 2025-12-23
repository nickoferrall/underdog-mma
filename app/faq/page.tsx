import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "FAQ - Underdog MMA | West Hartford Martial Arts",
  description:
    "Frequently asked questions about Underdog MMA in West Hartford, CT. Learn about martial arts programs, memberships, class schedules, and training for all skill levels.",
  alternates: {
    canonical: "https://underdogmma.com/faq",
  },
  openGraph: {
    title: "FAQ - Underdog MMA | West Hartford Martial Arts",
    description:
      "Frequently asked questions about Underdog MMA in West Hartford, CT. Learn about martial arts programs, memberships, and training.",
    url: "https://underdogmma.com/faq",
    images: ["/underdog-facility.jpg"],
  },
};

export default function FAQPage() {
  return <HomeContent scrollTo="faq" />;
}
