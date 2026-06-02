import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
        <Play className="size-4 fill-primary text-primary" />
        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md" aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">Central Play</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Plus</span>
      </div>
    </div>
  )
}
