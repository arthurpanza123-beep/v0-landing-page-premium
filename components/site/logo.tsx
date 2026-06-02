import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Central Play Plus"
      width={220}
      height={55}
      className={cn("h-12 w-auto object-contain", className)}
      priority
    />
  )
}
