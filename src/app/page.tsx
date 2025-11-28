import Footer from "@/components/footer";
import Hero from "@/components/hero";
import BenefitsSectionCards from "@/components/home/benefit-section";
import Empowering from "@/components/home/empowering";
import MirrorTrading from "@/components/home/mirror-trading";
import PricingPlans from "@/components/home/pricing-plan";
import WhyChooseUs from "@/components/home/why-choose-us";
import Navbar from "@/components/navbar";
import Stat from "@/components/stat";
import { getUser } from "./action/getUser";

// Data for testimonials
const testimonials = [
  {
    quote:
      "Apex Trade Funding gave me the opportunity to trade with real capital. The process was simple and straightforward.",
    author: "Michael T.",
    role: "Funded Trader",
  },
  {
    quote:
      "The best prop firm out there! Fast payouts and excellent support team.",
    author: "Sarah K.",
    role: "Forex Trader",
  },
  {
    quote:
      "Their evaluation process is fair and the profit split is industry-leading. Highly recommend!",
    author: "David R.",
    role: "Day Trader",
  },
];

export default async function Home() {
  const user = await getUser();
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar user={user} />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="bg-white py-16 md:py-24 ">
        <Stat />
      </section>

      {/* Features Section */}
      <Empowering />

      {/* How It Works Section */}
      <WhyChooseUs />

      {/* Benefits Section */}
      <BenefitsSectionCards />

      {/* Pricing Plans */}
      <PricingPlans />

      {/* Mirror Trading */}
      <MirrorTrading />

      <Footer />
    </div>
  );
}
