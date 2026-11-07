import AccentButton from "@/components/site/AccentButton";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { treatmentRoom } from "@/components/site/clinicPhotos";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

const COPY = {
  tr: {
    heading: "Diş tedavileri",
    body: "Laminalar, kronlar, implantlar, beyazlatma, şeffaf plaklar ve diş çekimi — her tedavinin kendi sayfası var: neleri kapsadığı, kimlere uygun olduğu ve Güngören, İstanbul'daki kliniğimizde nasıl planlandığı.",
    alt: "Modern koltuk ve ekipmanlarla donatılmış diş tedavi odası",
  },
  en: {
    heading: "Dental treatments",
    body: "Veneers, crowns, implants, whitening, clear aligners and extractions — each treatment has its own page, with what it involves, who it suits and how it is planned at our clinic in Güngören, İstanbul.",
    alt: "Dental treatment room with a modern chair and equipment",
  },
};

/** The services page opens on the same full-bleed banner as the About page. */
export default function ServicesHero() {
  const resolveHref = useSectionLinks();
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section>
      <div className="padding-global">
        <div className="mt-8">
          <Reveal className="relative min-h-[34rem] overflow-hidden rounded-lg md:aspect-[16/9] md:min-h-[30rem]">
            <ParallaxMedia
              src={treatmentRoom}
              alt={copy.alt}
              frameClassName="absolute inset-0"
              imageClassName="object-[50%_58%]"
              zoom="in"
              strength={1}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151c]/85 via-[#12151c]/45 to-[#12151c]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_86%_12%,rgba(200,162,122,0.20),transparent_58%)]" />

            <div className="absolute inset-0 flex items-end">
              <div className="card-pad w-full">
                <div className="mb-3 flex items-center gap-3">
                  <span className="tp-rule h-px w-10 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                  <SectionLabel light>{t("label.services")}</SectionLabel>
                </div>
                <h1 className="mb-5 max-w-[22ch] text-[#f9f9f9]">{copy.heading}</h1>
                <p className="mb-8 max-w-[38rem] text-[#e2e2e2]">{copy.body}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <AccentButton href={resolveHref("#booking")}>{t("cta.bookAnAppointment")}</AccentButton>
                  <AccentButton href="/contact" variant="outlineLight">
                    {t("cta.contactUs")}
                  </AccentButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}