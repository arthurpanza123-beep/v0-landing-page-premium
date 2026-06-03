export const WHATSAPP_NUMBER = "5521995570902"

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export const WHATSAPP_DEFAULT = "https://wa.me/5521995570902?text=%F0%9F%9F%A2%20Ol%C3%A1!%20Tenho%20interesse%20e%20quero%20saber%20mais."

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
  whatsappMessage: string
}

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: "20",
    period: "/mês",
    description: "Para começar hoje com praticidade.",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
    whatsappMessage: "Olá, tudo bom?\nVim pelo site e gostaria do plano Mensal.",
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
    whatsappMessage: "Olá, tudo bom?\nVim pelo site e gostaria do plano Trimestral.",
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "90",
    period: "/6 meses",
    equivalent: "equivalente a R$ 15,00/mês",
    description: "Mais tempo de uso com melhor custo-benefício.",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
    whatsappMessage: "Olá, tudo bom?\nVim pelo site e gostaria do plano Semestral.",
  },
  {
    id: "anual",
    name: "Anual",
    price: "150",
    period: "/ano",
    equivalent: "equivalente a R$ 12,50/mês",
    description: "A opção mais econômica para o ano todo.",
    features: ["Configuração guiada", "Suporte humano", "Ativação imediata", "Sem fidelidade"],
    whatsappMessage: "Olá, tudo bom?\nVim pelo site e gostaria do plano Anual.",
  },
]
