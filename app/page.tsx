import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { Steps } from "@/components/site/steps"
import { Compatibility } from "@/components/site/compatibility"
import { Catalog } from "@/components/site/catalog"
import { Benefits } from "@/components/site/benefits"
import { Plans } from "@/components/site/plans"
import { Testimonials } from "@/components/site/testimonials"
import { SocialProof } from "@/components/site/social-proof"
import { Faq } from "@/components/site/faq"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"
import { WhatsappFloat } from "@/components/site/whatsapp-float"
import { Ambient } from "@/components/site/ambient"
import { SectionDivider } from "@/components/site/section-divider"
export default function Page() {
  return (
    <>
      <Ambient />
      <Header />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Steps />
        <SectionDivider variant="dots" />
        <Compatibility />
        <Catalog />
        <SectionDivider variant="gradient" />
        <Benefits />
        <Plans />
        <SectionDivider variant="dots" />
        <Testimonials />
        <SocialProof />
        <SectionDivider variant="gradient" />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
