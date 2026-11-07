/**
 * Uppercase label that swaps for a second copy on hover, mirroring the
 * reference's link-inner widget. The anchor carries vertical padding so the
 * touch target clears 40px even though the visible line is only 18px tall.
 */
export default function TextLink({ label, href, light = false, className = "", onClick }) {
  const tone = light ? "text-[#f9f9f9]" : "text-[#313131]";
  const hoverTone = light ? "text-[#d2d2d2]" : "text-[#616161]";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center py-3 no-underline ${className}`}
    >
      <span className="nav-link-hover">
        <span
          className={`block text-[0.9rem] uppercase leading-[120%] ${tone} transition-transform duration-300 ease-out group-hover:-translate-y-full`}
        >
          {label}
        </span>
        <span
          className={`absolute left-0 top-full block text-[0.9rem] uppercase leading-[120%] ${hoverTone} transition-transform duration-300 ease-out group-hover:-translate-y-full`}
        >
          {label}
        </span>
      </span>
    </a>
  );
}