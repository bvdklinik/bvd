import { useEffect, useRef } from "react";
import { observeReveal } from "@/lib/reveal";

/**
 * Wraps a block so it fades and lifts into place the first time it reaches the
 * viewport. `delay` staggers siblings; `as` lets the wrapper be the section's
 * own element (a link, a list item, a paragraph).
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => observeReveal(ref.current), []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}