export const WHATSAPP_NUMBER = "5500000000000"

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export const WHATSAPP_DEFAULT = whatsappLink(
  "Olá! Quero configurar meu plano da Central Play Plus.",
)

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Compatibilidade", href: "#compatibilidade" },
  { label: "Suporte", href: "#suporte" },
]

export type Plan = {
  id: string
  name: string
  price: string
  period: string
  equivalent?: string
  description: string
  highlight?: boolean
  badge?: string
  features: string[]
}

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: "20",
    period: "/mês",
    description: "Para começar hoje com praticidade.",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "50",
    period: "/3 meses",
    equivalent: "equivalente a R$ 16,67/mês",
    description: "Economia e continuidade.",
    highlight: true,
    badge: "Mais escolhido",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "90",
    period: "/6 meses",
    equivalent: "equivalente a R$ 15,00/mês",
    description: "Mais tempo de uso com melhor custo-benefício.",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
  },
  {
    id: "anual",
    name: "Anual",
    price: "150",
    period: "/ano",
    equivalent: "equivalente a R$ 12,50/mês",
    description: "A opção mais econômica para o ano todo.",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
  },
]
