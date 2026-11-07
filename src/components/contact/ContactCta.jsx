import AccentButton from "@/components/site/AccentButton";
import Reveal from "@/components/site/Reveal";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

const COPY = {
  tr: {
    label: "Konsültasyon",
    heading: "Siz hazır olduğunuzda buradayız",
    body: "Bir tedaviyi sorun ya da konsültasyon randevusu alın. Seçeneklere sizinle birlikte bakarız ve her birinin neleri kapsadığını açıklarız.",
  },
  en: {
    label: "Consultation",
    heading: "Ready when you are",
    body: "Ask about a treatment or arrange a consultation. We will look at the options with you and explain what each one involves.",
  },
};

export default function ContactCta() {
  const resolveHref = useSectionLinks();
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section>
      <div className="padding-global">
        <div className="section-y">
          <Reveal className="card-pad-lg flex flex-col items-start justify-between gap-6 rounded-lg bg-[#eff1f5] md:flex-row md:items-end">
            <div>
              <div className="text-meta mb-3 text-[#37465c]">{copy.label}</div>
              <h2 className="mb-3 max-w-[24rem]">{copy.heading}</h2>
              <p className="max-w-[34rem]">{copy.body}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <AccentButton href={resolveHref("#booking")}>{t("cta.bookAppointment")}</AccentButton>
              <AccentButton href={clinicPhoneHref} variant="outline">
                {t("cta.callClinic")}
              </AccentButton>
              <span className="sr-only">{clinicPhone}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}