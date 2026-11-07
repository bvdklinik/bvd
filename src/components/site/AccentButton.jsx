import ArrowIcon from "./ArrowIcon";

const TONES = {
  solid: "rounded-full bg-[#37465c] text-[#f9f9f9] hover:bg-[#2c3a4e]",
  outline: "rounded-full border border-[#37465c] text-[#37465c] hover:bg-[#37465c] hover:text-[#f9f9f9]",
  outlineLight: "rounded-full border border-[#f9f9f9] text-[#f9f9f9] hover:bg-[#f9f9f9] hover:text-[#313131]",
};

/**
 * Square-cut action carrying the treatments band's brass accent, so the About and
 * Contact pages finish with the same voice as the home page.
 */
export default function AccentButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 px-8 py-3 text-[0.9rem] font-semibold uppercase tracking-[0.05em] no-underline transition-colors duration-300 ${TONES[variant]} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
    </a>
  );
}