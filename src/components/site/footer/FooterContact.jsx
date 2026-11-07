import ArrowIcon from "../ArrowIcon";
import FooterSocial from "./FooterSocial";
import FooterHours from "./FooterHours";
import { useI18n } from "@/lib/i18n";
import {
  clinicAddressLines,
  clinicDirections,
  clinicEmail,
  clinicEmailHref,
  clinicPhone,
  clinicPhoneHref,
} from "../clinicInfo";

const linkClass =
  "text-[1rem] text-[#313131] no-underline transition-colors duration-300 hover:text-[#37465c]";
const metaClass = "mb-1 text-[0.72rem] uppercase tracking-[0.1em] text-[#8a8a8a]";

export default function FooterContact() {
  const { t } = useI18n();

  return (
    <div>
      <h3 className="text-meta mb-3">{t("footer.contact")}</h3>
      <div className="mb-5">
        <div className={metaClass}>{t("label.phone")}</div>
        <a href={clinicPhoneHref} className={linkClass}>
          {clinicPhone}
        </a>
      </div>
      <div className="mb-5">
        <div className={metaClass}>{t("label.email")}</div>
        <a href={clinicEmailHref} className={linkClass}>
          {clinicEmail}
        </a>
      </div>
      <div className="mb-5">
        <div className={metaClass}>{t("label.address")}</div>
        <address className="text-[1rem] not-italic text-[#313131]">
          {clinicAddressLines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
      </div>
      <FooterHours />
      <a
        href={clinicDirections}
        target="_blank"
        rel="noreferrer"
        className={`${linkClass} inline-flex items-center gap-2`}
      >
        {t("cta.getDirections")}
        <ArrowIcon className="h-4 w-4 -rotate-45" />
      </a>
      <FooterSocial />
    </div>
  );
}