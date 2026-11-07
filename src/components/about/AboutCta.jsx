import AccentButton from "@/components/site/AccentButton";
import Reveal from "@/components/site/Reveal";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

const COPY = {
  tr: {
    label: "Konsültasyon",
    heading: "Tedavinizi birlikte planlayalım",
    body: "Gülüşünüzde neleri değiştirmek istediğinizi bize anlatın. Seçeneklere birlikte bakarız ve her birinin neleri kapsadığını açıklarız — baskı yok, karmaşık terim yok.",
  },
  en: {
    label: "Consultation",
    heading: "Let’s plan your treatment together",
    body: "Tell us what you would like to change about your smile. We will look at the options with you and explain what each one involves — no pressure, no jargon.",
  },
};

export default function AboutCta() {
  const resolveHref = useSectionLinks();
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section>
      <div className="padding-global">
        <div className="section-y">
          <Reveal className="card-pad-lg relative overflow-hidden rounded-lg border border-white/15 bg-[#37465c]">
            <div className="text-meta mb-3 text-[#c8a27a]">{copy.label}</div>
            <h2 className="mb-4 max-w-[26rem] text-[#e8e6e1]">{copy.heading}</h2>
            <p className="mb-8 max-w-[34rem] text-[#c4c3c0]">{copy.body}</p>
            <div className="flex flex-wrap items-center gap-3">
              <AccentButton href={resolveHref("#booking")}>{t("cta.bookAppointment")}</AccentButton>
              <AccentButton href="/contact" variant="outlineLight">
                {t("cta.contactUs")}
              </AccentButton>
              <a
                href={clinicPhoneHref}
                className="px-2 py-3 text-[0.95rem] text-[#c4c3c0] no-underline transition-colors duration-300 hover:text-[#e8e6e1]"
              >
                {clinicPhone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}