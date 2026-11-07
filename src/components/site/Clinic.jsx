import ArrowHover from "./ArrowHover";
import CTAButton from "./CTAButton";
import GlassPanel from "./GlassPanel";
import ParallaxMedia from "./ParallaxMedia";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { treatmentRoom, waitingArea } from "./clinicPhotos";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "Neredeyiz",
    heading: "Kliniğimiz",
    body: "Güngören, İstanbul'daki kliniğimiz sunduğumuz tedaviler için donatıldı: rutin muayeneler ve hijyen ziyaretlerinden implantlara, plaklara ve estetik uygulamalara kadar; her adım dijital görüntüleme ve ağız içi tarama ile planlanır.",
    waitingAlt: "BVD Clinic'te resepsiyon ve bekleme alanı",
    waitingCaption: "Resepsiyon ve bekleme alanı",
    roomAlt: "Modern koltuk ve ekipmanlarla donatılmış diş tedavi odası",
  },
  en: {
    label: "Where we are",
    heading: "Our clinic",
    body: "Our clinic in Güngören, İstanbul is equipped for the treatments we offer — from routine examinations and hygiene visits to implants, aligners and cosmetic work — with digital imaging and intraoral scanning used to plan each step.",
    waitingAlt: "Reception and waiting lounge at BVD Clinic",
    waitingCaption: "Reception & waiting lounge",
    roomAlt: "Dental treatment room with a modern chair and equipment",
  },
};

export default function Clinic() {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section id="clinic" className="section-home-clinic">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-4">
            <div className="max-w-[50rem]">
              <div className="mb-8">
                <Reveal className="mb-2">
                  <SectionLabel>{copy.label}</SectionLabel>
                </Reveal>
                <Reveal as="h2" delay={80} className="mb-4">
                  {copy.heading}
                </Reveal>
                <Reveal delay={150}>
                  <div>{copy.body}</div>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="relative aspect-[1700/827] overflow-hidden rounded-lg">
              <ParallaxMedia
                src={waitingArea}
                alt={copy.waitingAlt}
                frameClassName="h-full w-full"
                zoom="in"
                strength={0.7}
              />
              <Reveal delay={220} className="absolute bottom-6 left-6 hidden md:block">
                <GlassPanel className="px-5 py-3">
                  <div className="text-meta">{copy.waitingCaption}</div>
                </GlassPanel>
              </Reveal>
            </Reveal>

            <Reveal
              delay={90}
              className="group relative flex flex-col items-start justify-between overflow-hidden rounded-lg"
            >
              <ParallaxMedia
                src={treatmentRoom}
                alt={copy.roomAlt}
                frameClassName="absolute inset-0 rounded-lg"
                zoom="hover"
                strength={0.95}
              />
              <a href="#booking" tabIndex={-1} aria-hidden="true" className="absolute inset-0 z-10" />
              <div className="card-pad pointer-events-none relative z-20 flex h-full w-full flex-col items-start justify-between">
                <div className="flex w-full items-start justify-between">
                  <div className="h-px w-full" />
                  <ArrowHover light />
                </div>
                <CTAButton href="#booking" className="pointer-events-auto">
                  {t("cta.bookAppointment")}
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}