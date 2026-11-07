import { Image } from "@/components/ui/image";
import { useI18n } from "@/lib/i18n";
import { designPartnerLogo } from "../media";
import { clinicName } from "../clinicInfo";

/* The closing line: the clinic's own mark of ownership, and the studio that
   built the site, shown as its wordmark rather than set in the site's type. */
export default function FooterCredit() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col justify-between gap-3 min-[480px]:flex-row min-[480px]:items-center">
      <div className="text-[0.8rem] uppercase text-[#313131]">© {clinicName}</div>
      <div className="flex items-center gap-2">
        <span className="text-[0.8rem] uppercase text-[#313131]">{t("footer.designedBy")}</span>
        <Image
          src={designPartnerLogo}
          alt="OrganicxMedia"
          fittingType="fit"
          className="h-[0.9rem] w-auto opacity-80"
        />
      </div>
    </div>
  );
}