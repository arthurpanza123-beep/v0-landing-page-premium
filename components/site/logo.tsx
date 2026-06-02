import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Central Play Plus"
      width={180}
      height={45}
      className={cn("h-10 w-auto object-contain", className)}
      priority
    />
  )
}
