import CardsSection from "./../components/CardsSection"
import Demo from "./../components/Demo"
import Features from "./../components/Faetures"
import FAQSection from "./../components/FAQSection"
import FeatureAccordion from "./../components/FeatureAccordion"
import Footer from "./../components/Footer"
import Hero from "./../components/Hero"
import HowItWorks from "./../components/HowItWorks"
import Influencer from "./../components/Influencer"
import InfoSection from "./../components/InfoSection"
import Platforms from "./../components/Platforms"
import PricingSection from "./../components/PricingSection"
import Testimonials from "./../components/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <InfoSection />
      <Features />
      <Platforms />
      <HowItWorks />
      <Influencer />
      <FeatureAccordion />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <CardsSection />
    </>
  )
}