import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Testimonials - Underdog MMA | West Hartford, CT",
  description:
    "Read testimonials from Underdog MMA students in West Hartford, CT. See what our martial arts community has to say about their training experience.",
  openGraph: {
    title: "Testimonials - Underdog MMA | West Hartford, CT",
    description:
      "Read testimonials from Underdog MMA students in West Hartford, CT. See what our martial arts community has to say about their training experience.",
    url: "https://underdogmma.com/testimonials",
    images: ["/underdog-facility.jpg"],
  },
};

export default function TestimonialsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
