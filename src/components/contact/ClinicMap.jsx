import { Navigation } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import {
  clinicAddressLines,
  clinicDirections,
  clinicGoogleProfile,
  clinicMapEmbed,
} from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "Bizi bulun",
    heading: "Güngören, İstanbul",
    mapTitle: "Güngören, İstanbul'daki kliniği gösteren harita",
  },
  en: {
    label: "Find us",
    heading: "Güngören, İstanbul",
    mapTitle: "Map showing the clinic in Güngören, İstanbul",
  },
};

export default function ClinicMap() {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section id="map">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Reveal className="mb-2">
                <SectionLabel>{copy.label}</SectionLabel>
              </Reveal>
              <Reveal as="h2" delay={80}>
                {copy.heading}
              </Reveal>
            </div>
            <Reveal delay={140}>
              <a
                href={clinicDirections}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-2 py-3 text-[0.9rem] font-medium uppercase text-[#313131] no-underline transition-colors duration-300 hover:text-[#37465c]"
              >
                {t("cta.getDirections")}
                <Navigation className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={100} className="overflow-hidden rounded-lg border border-[#d0d0d0] bg-[#f2f2f2]">
            <div className="aspect-[4/3] w-full md:aspect-[16/9] lg:aspect-[21/9]">
              <iframe
                title={copy.mapTitle}
                src={clinicMapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={140} className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[0.95rem] text-[#616161]">{clinicAddressLines.join(", ")}</span>
            <a
              href={clinicGoogleProfile}
              target="_blank"
              rel="noreferrer"
              className="text-[0.9rem] uppercase text-[#37465c] no-underline transition-colors duration-300 hover:text-[#313131]"
            >
              {t("cta.googleListing")}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}