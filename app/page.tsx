import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { Steps } from "@/components/site/steps"
import { Compatibility } from "@/components/site/compatibility"
import { Catalog } from "@/components/site/catalog"
import { Benefits } from "@/components/site/benefits"
import { Comparison } from "@/components/site/comparison"
import { Plans } from "@/components/site/plans"
import { SocialProof } from "@/components/site/social-proof"
import { Faq } from "@/components/site/faq"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"
import { WhatsappFloat } from "@/components/site/whatsapp-float"
import { Ambient } from "@/components/site/ambient"
import { UrgencyBanner } from "@/components/site/urgency-banner"

export default function Page() {
  return (
    <>
      <UrgencyBanner />
      <Ambient />
      <Header />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Steps />
        <Compatibility />
        <Catalog />
        <Benefits />
        <Comparison />
        <Plans />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
