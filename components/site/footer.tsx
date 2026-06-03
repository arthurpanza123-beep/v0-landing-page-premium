import { MessageCircle, Clock, Headphones, BadgeCheck, Phone, Instagram, Facebook, Shield, CreditCard } from "lucide-react"
import { Logo } from "./logo"
import { Container } from "./section"
import { WHATSAPP_DEFAULT, WHATSAPP_NUMBER } from "@/lib/site"

const COLUMNS = [
  {
    title: "Navegação",
    links: [
      { label: "Planos", href: "#planos" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Compatibilidade", href: "#compatibilidade" },
      { label: "Suporte", href: "#suporte" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
    ],
  },
]

const BADGES = [
  { icon: Clock, label: "Configuração em minutos" },
  { icon: Headphones, label: "Suporte humano" },
  { icon: BadgeCheck, label: "Sem fidelidade" },
]

const GUARANTEES = [
  { icon: Shield, label: "Garantia de 7 dias" },
  { icon: CreditCard, label: "Pagamento seguro via Pix" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 pt-16 pb-10">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <Container>
        {/* Trust badges band */}
        <div className="mb-12 grid gap-4 rounded-[1.5rem] border border-border/40 bg-card/30 p-6 sm:grid-cols-3">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <b.icon className="size-4" />
              </span>
              <span className="text-[0.85rem] font-medium text-foreground/90">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.85rem] leading-[1.7] text-muted-foreground/70">
              Atendimento e suporte humano para o seu entretenimento digital. Você escolhe, a gente configura.
            </p>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[0.85rem] font-medium text-whatsapp/80 transition-colors hover:text-whatsapp"
            >
              <Phone className="size-4" />
              (21) 99557-0902
            </a>
            
            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/centralplay.plus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579501032576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
            </div>
            
            {/* Guarantees */}
            <div className="mt-6 flex flex-wrap gap-3">
              {GUARANTEES.map((g) => (
                <span key={g.label} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                  <g.icon className="size-3.5" />
                  {g.label}
                </span>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                {col.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.85rem] text-muted-foreground/80 transition-colors duration-300 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.75rem] text-muted-foreground/50">
            © {new Date().getFullYear()} Central Play Plus. Todos os direitos reservados.
          </p>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-whatsapp/25 bg-whatsapp/10 px-4 py-2 text-[0.8rem] font-medium text-whatsapp transition-all duration-300 hover:border-whatsapp/40 hover:bg-whatsapp/15"
          >
            <MessageCircle className="size-4" />
            Falar agora
          </a>
        </div>
      </Container>
    </footer>
  )
}
