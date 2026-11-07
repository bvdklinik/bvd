import AboutValues from "./AboutValues";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { alignerTrayHand } from "@/components/site/clinicPhotos";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "Klinik hakkında",
    heading: "Hassasiyet ve konfor üzerine kurulu bakım",
    paragraphs: [
      "Kliniğimiz modern diş hekimliğini Güngören'in merkezine taşımak için kuruldu: dikkatli bir değerlendirmenin, kanıta dayalı tedavinin ve her hastaya gerçek bir özenin tek bir sakin ve konforlu mekânda buluştuğu bir muayenehane.",
      "Her tedavi ayrıntılı bir değerlendirmeyle başlar. Ağız ve diş sağlığınızı titizlikle inceler, hassasiyet kattığı her yerde dijital görüntüleme ve ağız içi taramayı kullanır ve bunu kendi dişleriniz, hedefleriniz ve zamanınıza göre kurulmuş bir plana dönüştürürüz.",
      "Size kendimize davranılmasını istediğimiz gibi davranırız: steril ve özenle korunan bir klinik ile ne bulduğumuz, seçeneklerin neler olduğu ve her birinin neleri kapsadığı üzerine açık bir konuşma.",
    ],
    alt: "Şeffaf plağını takan hasta",
  },
  en: {
    label: "About the clinic",
    heading: "Care built on precision and comfort",
    paragraphs: [
      "Our clinic was founded to bring modern dentistry to the heart of Güngören: a practice where careful assessment, evidence-based treatment and genuine attention to each patient meet in one calm, comfortable space.",
      "Every treatment begins with a detailed assessment. We examine your oral and dental health thoroughly, use digital imaging and intraoral scanning wherever they add precision, and turn that into a plan built around your own teeth, your goals and your time.",
      "We treat you the way we would want to be treated: a sterile, carefully maintained clinic, and a clear conversation about what we found, what the options are and what each one involves.",
    ],
    alt: "Patient fitting a clear aligner tray",
  },
};

export default function AboutClinic() {
  const { lang } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section id="about-clinic">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-8 max-w-[50rem]">
            <Reveal className="mb-2">
              <SectionLabel>{copy.label}</SectionLabel>
            </Reveal>
            <Reveal as="h2" delay={80} className="mb-4">
              {copy.heading}
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div className="flex flex-col gap-5">
              {copy.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 80}>
                  <p className="max-w-[40rem]">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="relative min-h-[20rem] overflow-hidden rounded-lg lg:min-h-0">
              <ParallaxMedia
                src={alignerTrayHand}
                alt={copy.alt}
                frameClassName="h-full w-full"
                imageClassName="object-[50%_35%]"
                zoom="in"
                strength={0.7}
              />
            </Reveal>
          </div>

          <div className="mt-12 md:mt-16">
            <AboutValues />
          </div>
        </div>
      </div>
    </section>
  );
}