import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { Steps } from "@/components/site/steps"
import { Plans } from "@/components/site/plans"
import { Compatibility } from "@/components/site/compatibility"
import { Support } from "@/components/site/support"
import { Faq } from "@/components/site/faq"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"
import { WhatsappFloat } from "@/components/site/whatsapp-float"
import { Ambient } from "@/components/site/ambient"

export default function Page() {
  return (
    <>
      <Ambient />
      <Header />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Steps />
        <Plans />
        <Compatibility />
        <Support />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
