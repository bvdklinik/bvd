export default function SectionLabel({ children, light = false, className = "" }) {
  return (
    <div className={`text-meta ${light ? "text-[#f9f9f9]" : ""} ${className}`}>{children}</div>
  );
}