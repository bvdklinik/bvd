import { useCallback, useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import { getServices } from "@/components/services/servicesData";
import ArrowIcon from "./ArrowIcon";
import Reveal from "./Reveal";
import { checkUpInProgress } from "./clinicPhotos";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    eyebrow: "Hizmetlerimiz",
    title: "Diş tedavilerimiz",
    summary:
      "Kontrolden ve diş taşı temizliğinden laminalara, beyazlatmaya, implantlara ve şeffaf plaklara kadar her tedavi kendi diş hekimlerimiz tarafından planlanır ve uygulanır.",
    previous: "Önceki tedaviler",
    next: "Sonraki tedaviler",
    all: "Tüm hizmetler",
  },
  en: {
    eyebrow: "Our offers",
    title: "Our dental treatments",
    summary:
      "From check-ups and hygiene visits to veneers, whitening, implants and clear aligners — every treatment is planned and carried out by our own dentists.",
    previous: "Previous treatments",
    next: "Next treatments",
    all: "All services",
  },
};

/**
 * Our offers — the clinic's treatments on the blue slab, slid through as a
 * snap-scrolling track so each one has room for its own picture and its own
 * page. The list comes from the services page's data in the current language,
 * so a treatment added there appears here and in the footer without a second
 * copy to keep in step.
 */
export default function Services() {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;
  const services = getServices(lang);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setEdges({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const slideBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const tile = track.firstElementChild;
    const step = tile ? tile.getBoundingClientRect().width + 12 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="services">
      <div className="padding-global">
        <div className="section-y-lg">
          <Reveal className="porcelain-slab rounded-lg">
            <div className="porcelain-head">
              <div className="porcelain-intro">
                <div className="porcelain-eyebrow">{copy.eyebrow}</div>
                <h2 className="porcelain-title">{copy.title}</h2>
              </div>
              <div className="porcelain-summary">
                <p>{copy.summary}</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => slideBy(-1)}
                    disabled={edges.start}
                    aria-label={copy.previous}
                    className="porcelain-nav"
                  >
                    <ArrowIcon className="h-5 w-5 rotate-[-135deg]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => slideBy(1)}
                    disabled={edges.end}
                    aria-label={copy.next}
                    className="porcelain-nav"
                  >
                    <ArrowIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={trackRef}
              onScroll={measure}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="porcelain-tile w-[80%] shrink-0 snap-start sm:w-[47%] lg:w-[31.5%]"
                >
                  <div className="porcelain-tile-media">
                    <Image
                      src={service.img}
                      alt={service.alt}
                      className="h-full w-full object-cover"
                      fittingType="fill"
                    />
                  </div>
                  <div className="porcelain-tile-body">
                    <h3>
                      <a
                        href={`/services/${service.slug}`}
                        className="text-[#e8e6e1] no-underline transition-colors duration-300 hover:text-[#c8a27a]"
                      >
                        {service.title}
                      </a>
                    </h3>
                    <p>{service.tagline}</p>
                  </div>
                </article>
              ))}

              <div className="porcelain-tile porcelain-cta w-[80%] shrink-0 snap-start sm:w-[47%] lg:w-[31.5%]">
                <div className="porcelain-tile-media" aria-hidden="true">
                  <Image
                    src={checkUpInProgress}
                    alt=""
                    className="h-full w-full object-cover"
                    fittingType="fill"
                  />
                </div>
                <div className="porcelain-cta-label">{copy.eyebrow}</div>
                <div className="porcelain-cta-bottom">
                  <a href="/services">{copy.all}</a>
                  <span className="porcelain-arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h9M8 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}