import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Reviews & Testimonials - Underdog MMA | West Hartford, CT",
  description:
    "Read reviews and testimonials from Underdog MMA students in West Hartford, CT. See what our martial arts community has to say about their training experience.",
  alternates: {
    canonical: "https://underdogmma.com/reviews",
  },
  openGraph: {
    title: "Reviews & Testimonials - Underdog MMA | West Hartford, CT",
    description:
      "Read reviews and testimonials from Underdog MMA students in West Hartford, CT. See what our martial arts community has to say.",
    url: "https://underdogmma.com/reviews",
    images: ["/underdog-facility.jpg"],
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
