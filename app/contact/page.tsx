import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Contact Us - Underdog MMA | West Hartford, CT",
  description:
    "Contact Underdog MMA in West Hartford, Connecticut. Get directions, phone number, and schedule a free trial class. Call (860) 616-1365.",
  alternates: {
    canonical: "https://underdogmma.com/contact",
  },
  openGraph: {
    title: "Contact Us - Underdog MMA | West Hartford, CT",
    description:
      "Contact Underdog MMA in West Hartford, Connecticut. Get directions, phone number, and schedule a free trial class.",
    url: "https://underdogmma.com/contact",
    images: ["/underdog-facility.jpg"],
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="facility" />;
}
