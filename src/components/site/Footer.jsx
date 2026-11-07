import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import FooterBrand from "./footer/FooterBrand";
import FooterContact from "./footer/FooterContact";
import FooterCredit from "./footer/FooterCredit";
import FooterLinkColumn from "./footer/FooterLinkColumn";
import { getFooterTreatments, getQuickLinks } from "./footer/footerLinks";

const columnClass = "lg:px-8 lg:first:pl-0 lg:last:pr-0";

export default function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="site-footer">
      <div className="footer-inset bg-[#f2f2f2]">
        <div className="footer-horizontal py-12 md:py-16">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-0 lg:divide-x lg:divide-[#dcdcdc]">
              <div className={columnClass}>
                <FooterBrand />
              </div>
              <div className={columnClass}>
                <FooterLinkColumn title={t("footer.quickLinks")} links={getQuickLinks(lang)} />
              </div>
              <div className={columnClass}>
                <FooterLinkColumn
                  title={t("footer.treatments")}
                  links={getFooterTreatments(lang)}
                />
              </div>
              <div className={columnClass}>
                <FooterContact />
              </div>
            </div>
          </Reveal>

          <div className="my-10 h-px w-full bg-[#d0d0d0] md:my-12" />

          <FooterCredit />
        </div>
      </div>
    </footer>
  );
}