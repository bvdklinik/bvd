import CTAButton from "../CTAButton";
import Logo from "../Logo";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

export default function FooterBrand() {
  const resolveHref = useSectionLinks();
  const { t } = useI18n();

  return (
    <div className="max-w-[26rem]">
      <a href="/" className="mb-6 block no-underline" aria-label={t("nav.homeLabel")}>
        <Logo className="w-[8.5rem]" />
      </a>
      <p className="mb-6 max-w-[22rem] text-[0.95rem]">{t("footer.blurb")}</p>
      <CTAButton href={resolveHref("#booking")}>{t("cta.bookAppointment")}</CTAButton>
    </div>
  );
}