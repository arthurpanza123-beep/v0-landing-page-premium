import { MessageCircle, Clock, Headphones, BadgeCheck } from "lucide-react"
import { Logo } from "./logo"
import { Container } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

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

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 pt-20 pb-14">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <Container>
        {/* trust badges band */}
        <div className="mb-16 grid gap-5 rounded-[1.5rem] border border-border/40 bg-card/30 p-7 sm:grid-cols-3">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <b.icon className="size-5" />
              </span>
              <span className="text-[0.9rem] font-medium text-foreground/90">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-xs text-[0.9rem] leading-[1.7] text-muted-foreground/70">
              Atendimento e suporte humano para o seu entretenimento digital. Você escolhe, a gente
              configura.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                {col.title}
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.9rem] text-muted-foreground/80 transition-colors duration-300 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-border/40 pt-10 sm:flex-row sm:items-center">
          <p className="text-[0.8rem] text-muted-foreground/50">
            © {new Date().getFullYear()} Central Play Plus. Todos os direitos reservados.
          </p>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-whatsapp/25 bg-whatsapp/10 px-5 py-2.5 text-[0.85rem] font-medium text-whatsapp transition-all duration-300 hover:border-whatsapp/40 hover:bg-whatsapp/15"
          >
            <MessageCircle className="size-4" />
            Falar agora
          </a>
        </div>
      </Container>
    </footer>
  )
}
