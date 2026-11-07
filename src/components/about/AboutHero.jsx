import AccentButton from "@/components/site/AccentButton";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import { waitingArea } from "@/components/site/clinicPhotos";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

const COPY = {
  tr: {
    label: "Hakkımızda",
    heading: "Gülüşünüz bizim imzamız",
    body: "Güngören, İstanbul'da bir diş kliniğiyiz; her tedavi dijital görüntüleme ve ağız içi tarama ile planlanır ve başlamadan önce anlatılır. Sakin, acele ettirilmeyen randevular ve tedaviniz boyunca aynı diş hekimleri.",
    alt: "Kliniğin resepsiyon ve bekleme alanı",
  },
  en: {
    label: "About us",
    heading: "Your smile is our signature",
    body: "We are a dental clinic in Güngören, İstanbul, where every treatment is planned with digital imaging and intraoral scanning and explained before it begins — calm, unhurried appointments, and the same dentists throughout your care.",
    alt: "Reception and waiting lounge at the clinic",
  },
};

export default function AboutHero() {
  const resolveHref = useSectionLinks();
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section>
      <div className="padding-global">
        <div className="mt-8">
          <Reveal className="relative min-h-[34rem] overflow-hidden rounded-lg md:aspect-[16/9] md:min-h-[30rem]">
            <ParallaxMedia
              src={waitingArea}
              alt={copy.alt}
              frameClassName="absolute inset-0"
              zoom="in"
              strength={1}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151c]/85 via-[#12151c]/45 to-[#12151c]/20" />

            <div className="absolute inset-0 flex items-end">
              <div className="card-pad w-full">
                <div className="text-meta mb-2 text-[#d2d2d2]">{copy.label}</div>
                <h1 className="mb-4 max-w-[22ch] text-[#f9f9f9]">{copy.heading}</h1>
                <p className="mb-8 max-w-[34rem] text-[#e2e2e2]">{copy.body}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <AccentButton href={resolveHref("#booking")}>{t("cta.bookAppointment")}</AccentButton>
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