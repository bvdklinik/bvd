import { Facebook, Instagram, MapPin } from "lucide-react";
import { clinicFacebook, clinicGoogleProfile, clinicInstagram } from "../clinicInfo";

const LINKS = [
  { href: clinicInstagram, label: "Instagram", Icon: Instagram },
  { href: clinicFacebook, label: "Facebook", Icon: Facebook },
  { href: clinicGoogleProfile, label: "Google", Icon: MapPin },
];

export default function FooterSocial() {
  return (
    <div className="mt-6 flex gap-3">
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`BVD Clinic ${label}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#d0d0d0] text-[#313131] no-underline transition-colors duration-300 hover:border-[#37465c] hover:bg-[#37465c] hover:text-[#f9f9f9]"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}