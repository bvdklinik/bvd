import { Image } from "@/components/ui/image";
import { logoMark } from "./media";

/**
 * The clinic's logo.
 *
 * The source file is a transparent PNG with a margin around the artwork, so the
 * picture is scaled inside a cropped 8:5 frame (see .logo-frame) and offset to
 * cut that margin away. The offsets leave a sliver of transparent space rather
 * than a tight crop, so no edge of the mark can ever be clipped.
 */
export default function Logo({ className = "", priority = false }) {
  return (
    <span className={`logo-frame block overflow-hidden ${className}`.trim()}>
      <Image
        src={logoMark}
        alt="BVD Clinic"
        fittingType="fill"
        loading={priority ? "eager" : "lazy"}
        className="absolute -left-[2.4%] -top-[13.1%] h-[132.2%] w-[103.3%]"
      />
    </span>
  );
}