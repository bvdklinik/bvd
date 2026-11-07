const TONES = {
  light: "border-white/60 bg-white/65 text-[#313131] shadow-[0_20px_50px_-24px_rgba(20,20,20,0.45)]",
  dark: "border-white/20 bg-[#1a1d23]/50 text-[#f9f9f9] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)]",
};

/** Restrained glass surface: translucent, blurred, hairline border, soft shadow. */
export default function GlassPanel({ tone = "light", className = "", children }) {
  return (
    <div className={`rounded-lg border backdrop-blur-xl ${TONES[tone]} ${className}`.trim()}>
      {children}
    </div>
  );
}