import AccentButton from "@/components/site/AccentButton";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

const BANDS = {
  blue: "bg-[#37465c]",
  ink: "bg-[#2c3a4e]",
};

/** The appointment band: brass-lit, with both a booking and a phone route. */
export default function TreatmentCta({ cta, tone = "blue" }) {
  const resolveHref = useSectionLinks();
  const { t } = useI18n();

  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <Reveal className={`relative overflow-hidden rounded-lg ${BANDS[tone]}`.trim()}>
            <div className="absolute inset-0 bg-[radial-gradient(95%_130%_at_88%_6%,rgba(200,162,122,0.24),transparent_56%)]" />

            <div className="card-pad-xl relative grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:items-center lg:gap-14">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="tp-rule h-px w-10 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                  <SectionLabel light>{t("label.booking")}</SectionLabel>
                </div>
                <h2 className="mb-3 max-w-[28ch] text-[#f9f9f9]">{cta.heading}</h2>
                <p className="max-w-[42rem] text-[#e2e2e2]">{cta.text}</p>
              </div>

              <div className="flex flex-wrap items-stretch gap-3 lg:flex-col">
                <AccentButton href={resolveHref("#booking")} className="lg:w-full">
                  {t("cta.bookAnAppointment")}
                </AccentButton>
                <AccentButton href={clinicPhoneHref} variant="outlineLight" className="lg:w-full">
                  {t("cta.call")} {clinicPhone}
                </AccentButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}