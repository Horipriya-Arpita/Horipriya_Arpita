
export default function GradientBlur() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left purple/pink blur */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
  
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

        {/* Bottom right blue blur */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
  
        {/* Middle pink blur */}
        <div className="absolute border-5 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>
    )
  }
  