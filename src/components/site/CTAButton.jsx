import ArrowIcon from "./ArrowIcon";

/**
 * Pill button: the resting face slides out of view while the inverted face
 * slides into place, matching the reference's button-hover treatment.
 */
export default function CTAButton({ children, href = "#booking", variant = "dark", className = "" }) {
  const dark = variant === "dark";
  const face = dark ? "bg-[#37465c] text-[#f9f9f9]" : "bg-[#f9f9f9] text-[#313131]";
  const hoverFace = dark ? "bg-[#f9f9f9] text-[#313131]" : "bg-[#37465c] text-[#f9f9f9]";
  const inner =
    "flex items-center gap-2 whitespace-nowrap px-8 py-2.5 text-[1rem] font-medium uppercase leading-[120%]";

  return (
    <a
      href={href}
      className={`group relative inline-block overflow-hidden rounded-[50px] no-underline ${face} ${className}`}
    >
      <span
        className={`${inner} transition-transform duration-500 ease-out group-hover:-translate-y-full`}
      >
        {children}
        <ArrowIcon className="-mr-2.5 -mt-0.5 h-6 w-6" />
      </span>
      <span
        className={`absolute inset-0 ${inner} ${hoverFace} translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0`}
      >
        {children}
        <ArrowIcon className="-mr-2.5 -mt-0.5 h-6 w-6" />
      </span>
    </a>
  );
}