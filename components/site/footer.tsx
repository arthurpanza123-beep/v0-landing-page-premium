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
    <footer className="relative border-t border-border/60 pt-16 pb-12">
      <Container>
        {/* trust badges band */}
        <div className="mb-14 grid gap-4 rounded-3xl border border-border/60 bg-card/40 p-6 sm:grid-cols-3">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                <b.icon className="size-5" />
              </span>
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Atendimento e suporte humano para o seu entretenimento digital. Você escolhe, a gente
              configura.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Central Play Plus. Todos os direitos reservados.
          </p>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-whatsapp transition-opacity hover:opacity-80"
          >
            <MessageCircle className="size-4" />
            Falar agora
          </a>
        </div>
      </Container>
    </footer>
  )
}
