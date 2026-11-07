import { useEffect, useRef } from "react";
import { Image } from "@/components/ui/image";
import { registerParallax } from "@/lib/parallax";

/**
 * Media frame that reserves its own space (no layout shift while loading),
 * loads below-the-fold pictures lazily, scales its picture into view and drifts
 * it slightly slower than the page for depth.
 *
 * zoom="in"    picture eases down from a slight crop as the frame is revealed
 * zoom="hover" picture grows gently while the surrounding .group is hovered
 * strength     parallax travel, roughly 0–1 (0 disables the drift)
 */
export default function ParallaxMedia({
  src,
  alt,
  frameClassName = "",
  imageClassName = "",
  zoom,
  strength = 1,
  priority = false,
  children,
}) {
  const layer = useRef(null);

  useEffect(() => registerParallax(layer.current, strength), [strength]);

  const zoomClass = zoom === "hover" ? "zoom-hover" : zoom === "in" ? "zoom-reveal" : "";

  return (
    <div className={`media-frame ${frameClassName}`.trim()}>
      <div ref={layer} className="media-parallax">
        <div className={`media-zoom ${zoomClass}`.trim()}>
          <Image
            src={src}
            alt={alt}
            fittingType="fill"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={priority ? "high" : undefined}
            className={`media-img ${imageClassName}`.trim()}
          />
        </div>
      </div>
      {children}
    </div>
  );
}