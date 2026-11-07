import CTAButton from "./CTAButton";
import ParallaxMedia from "./ParallaxMedia";
import Reveal from "./Reveal";
import { heroDesktop, heroMobile } from "./media";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    heading: "Gülüşünüz bizim önceliğimiz",
    body: "Diş hekimlerimiz rutin kontrolden laminalara, kronlara, implantlara ve şeffaf plaklara kadar her tedaviyi üstlenir; tedavi Güngören, İstanbul'daki kliniğimizde planlanır ve her şey başlamadan önce ayrıntılı biçimde anlatılır.",
    alt: "BVD Clinic'te gülümseyen hastayı karşılayan diş hekimi",
  },
  en: {
    heading: "We care about your smile",
    body: "Our dentists look after everything from routine check-ups to veneers, crowns, implants and clear aligners — planned at our clinic in Güngören, İstanbul and explained in full before anything begins.",
    alt: "Dentist welcoming a smiling patient at BVD Clinic",
  },
};

export default function Hero() {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section className="section-home-hero">
      <div className="padding-global">
        <div className="mt-8">
          <div className="relative grid min-h-[70vh] grid-rows-2 gap-4 overflow-hidden rounded-lg md:min-h-[80vh] md:grid-cols-2 md:grid-rows-1 lg:min-h-[85vh]">
            <ParallaxMedia
              src={heroDesktop}
              alt={copy.alt}
              frameClassName="absolute inset-0 hidden rounded-lg md:block"
              imageClassName="max-[991px]:object-[62%_50%]"
              strength={1}
              priority
            />

            <ParallaxMedia
              src={heroMobile}
              alt={copy.alt}
              frameClassName="absolute inset-0 rounded-lg md:hidden"
              imageClassName="object-bottom"
              strength={0}
            />

            <div className="relative md:max-[1023px]:rounded-lg md:max-[1023px]:bg-[#f9f9f9]">
              <div className="card-pad-lg h-full md:max-[1023px]:p-8">
                <div className="flex h-full w-full flex-col items-start justify-center">
                  <Reveal as="h1" className="mb-6 md:max-[1023px]:text-[2.75rem]">
                    {copy.heading}
                  </Reveal>
                  <div>
                    <Reveal delay={120} className="mb-8 max-w-[34rem]">
                      {copy.body}
                    </Reveal>
                    <Reveal delay={200}>
                      <CTAButton href="#booking">{t("cta.bookAppointment")}</CTAButton>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}