import ArrowHover from "./ArrowHover";
import CTAButton from "./CTAButton";
import ParallaxMedia from "./ParallaxMedia";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { digitalScanning, patientInChair, smilePortrait } from "./clinicPhotos";
import { useI18n } from "@/lib/i18n";

/**
 * Three short guides from the clinic. Each one links to the treatment page it
 * belongs to, so the section doubles as a set of internal links into the
 * treatment pages rather than standing on its own.
 */
const COPY = {
  tr: {
    label: "Öne çıkan tedaviler",
    heading: "Tedavileri keşfedin",
    tag: "Tedavi",
    featured: {
      title: "Diş laminaları: tedavi neleri kapsar",
      desc: "Bir lamina nasıl planlanır, hazırlık ve yapıştırma randevuları nasıl geçer ve son sonuçta fotoğraflar ile renk seçiminin payı nedir.",
      alt: "Hastanın dişlerinin dijital modelini gösteren tarayıcı ekranı",
    },
    articles: [
      {
        title: "Şeffaf plaklar: günde 20 saat ne demek",
        alt: "Plak konsültasyonu sırasında tedavi koltuğundaki hasta",
      },
      {
        title: "Diş beyazlatma: renk tonu nasıl seçilir",
        alt: "Aydınlatılmış bir gülüşün yakın çekimi",
      },
    ],
  },
  en: {
    label: "Featured treatments",
    heading: "Explore treatments",
    tag: "Treatment",
    featured: {
      title: "Dental veneers: what the treatment involves",
      desc: "How a veneer is planned, what the preparation and bonding appointments look like, and the part photographs and shade selection play in the finished result.",
      alt: "Dental scanner screen showing a digital model of a patient's teeth",
    },
    articles: [
      {
        title: "Clear aligners: what 20 hours a day means",
        alt: "Patient in a dental chair during an aligner consultation",
      },
      {
        title: "Teeth whitening: how the shade is chosen",
        alt: "Close-up of a patient's brightened smile",
      },
    ],
  },
};

const IMAGES = {
  featured: digitalScanning,
  articles: [patientInChair, smilePortrait],
};

const HREFS = {
  featured: "/services/dental-veneers",
  articles: ["/services/invisalign", "/services/teeth-whitening"],
};

export default function Insights() {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  const featured = {
    tag: copy.tag,
    title: copy.featured.title,
    desc: copy.featured.desc,
    img: IMAGES.featured,
    alt: copy.featured.alt,
    href: HREFS.featured,
  };

  const articles = copy.articles.map((article, index) => ({
    tag: copy.tag,
    title: article.title,
    img: IMAGES.articles[index],
    alt: article.alt,
    href: HREFS.articles[index],
  }));

  return (
    <section id="insights" className="section-insights">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-8">
            <div className="grid items-end gap-6 md:grid-cols-2">
              <div className="flex flex-col items-start justify-end">
                <Reveal className="mb-2">
                  <SectionLabel>{copy.label}</SectionLabel>
                </Reveal>
                <Reveal as="h2" delay={80}>
                  {copy.heading}
                </Reveal>
              </div>
              <Reveal delay={140} className="md:justify-self-end">
                <CTAButton href="/services">{t("cta.allTreatments")}</CTAButton>
              </Reveal>
            </div>
          </div>

          <div className="mb-4">
            <div className="group grid gap-2 overflow-hidden rounded-lg md:grid-cols-2">
              <Reveal className="relative min-h-[16rem] overflow-hidden rounded-lg">
                <ParallaxMedia
                  src={featured.img}
                  alt={featured.alt}
                  frameClassName="h-full w-full"
                  zoom="hover"
                  strength={0.8}
                />
              </Reveal>
              <Reveal
                as="a"
                href={featured.href}
                delay={110}
                className="relative overflow-hidden rounded-lg bg-[#eff1f5] no-underline"
              >
                <div className="card-pad-sm h-full">
                  <div className="flex h-full w-full flex-col items-start justify-between">
                    <div className="flex w-full items-start justify-between">
                      <SectionLabel>{featured.tag}</SectionLabel>
                      <ArrowHover />
                    </div>
                    <div className="mt-8 w-full">
                      <div className="mb-4">
                        <h3>{featured.title}</h3>
                      </div>
                      <div>{featured.desc}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {articles.map((a, idx) => (
              <Reveal key={a.title} delay={idx * 90}>
                <div className="group grid grid-cols-2 gap-2 transition-transform duration-500 ease-out hover:-translate-y-1 max-[767px]:grid-cols-1">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <ParallaxMedia
                      src={a.img}
                      alt={a.alt}
                      frameClassName="h-full w-full"
                      zoom="hover"
                      strength={0.6}
                    />
                  </div>
                  <a
                    href={a.href}
                    className="relative overflow-hidden rounded-lg bg-[#eff1f5] no-underline"
                  >
                    <div className="card-pad-sm h-full">
                      <div className="flex h-full w-full flex-col items-start justify-between">
                        <div className="flex w-full items-start justify-between">
                          <SectionLabel>{a.tag}</SectionLabel>
                          <ArrowHover />
                        </div>
                        <div className="mt-6 w-full">
                          <h3>{a.title}</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}