"use client"

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" aria-hidden>
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(15, 23, 48, 1) 0%, rgba(20, 25, 55, 1) 50%, rgba(15, 20, 45, 1) 100%)"
        }}
      />
      
      {/* Animated blue orb - top left */}
      <div 
        className="absolute -left-[10%] -top-[10%] h-[800px] w-[800px] animate-float-slow rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Animated purple orb - bottom right */}
      <div 
        className="absolute -bottom-[15%] -right-[10%] h-[700px] w-[700px] animate-float-medium rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.30) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Animated cyan orb - center */}
      <div 
        className="absolute left-[30%] top-[40%] h-[600px] w-[600px] animate-float-reverse rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.20) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      {/* Blue orb - top right */}
      <div 
        className="absolute -right-[5%] top-[10%] h-[500px] w-[500px] animate-float-slow-reverse rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      {/* Warm accent orb - bottom left */}
      <div 
        className="absolute -left-[5%] bottom-[20%] h-[400px] w-[400px] animate-float-medium-reverse rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Additional subtle cyan - middle right */}
      <div 
        className="absolute right-[10%] top-[60%] h-[450px] w-[450px] animate-float-slow rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(34, 211, 238, 0.03) 40%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 150, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 150, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Noise texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
