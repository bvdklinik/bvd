import ArrowIcon from "./ArrowIcon";

/**
 * Diagonal arrow that swaps out for a second arrow on hover, mirroring the
 * reference's arrow-wrapper-hover widget.
 */
export default function ArrowHover({ light = false, className = "" }) {
  return (
    <span
      className={`relative block h-[30px] w-[25px] shrink-0 overflow-hidden ${
        light ? "text-[#f9f9f9]" : "text-[#313131]"
      } ${className}`}
    >
      <ArrowIcon className="absolute left-0 top-0 h-[25px] w-[25px] transition-transform duration-300 ease-out group-hover:translate-x-[17px] group-hover:translate-y-[17px]" />
      <ArrowIcon className="absolute left-[-17px] top-[17px] h-[25px] w-[25px] transition-transform duration-300 ease-out group-hover:translate-x-[17px] group-hover:-translate-y-[17px]" />
    </span>
  );
}