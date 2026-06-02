export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,oklch(0.2_0.04_260)_0%,transparent_55%)]" />
      {/* top blue glow */}
      <div className="absolute -top-40 left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.18_255/0.28),transparent)] blur-2xl" />
      {/* left accent */}
      <div className="absolute top-[40%] -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,oklch(0.5_0.16_250/0.18),transparent)] blur-2xl" />
      {/* right accent */}
      <div className="absolute top-[70%] -right-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,oklch(0.5_0.14_240/0.16),transparent)] blur-2xl" />
      {/* fine grid */}
      <div className="bg-grid absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(100%_60%_at_50%_0%,#000,transparent)]" />
    </div>
  )
}
