import { useCallback, useEffect, useRef, useState } from "react";
import ArrowIcon from "@/components/site/ArrowIcon";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import DoctorCard from "./DoctorCard";
import { getTeam } from "@/components/site/teamData";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "Diş hekimlerimiz",
    heading: "Gülüşünüzün arkasındaki ekip",
    intro:
      "Ortodonti, implant ve protez uygulamaları, kanal dolgusu ve diş beyazlatma aynı çatı altında: tedaviniz kliniğin kendi diş hekimleri tarafından planlanır.",
    previous: "Önceki hekimler",
    next: "Sonraki hekimler",
  },
  en: {
    label: "Our doctors",
    heading: "The team behind the smile",
    intro:
      "Orthodontics, implants and prosthetic restorations, root canal treatment and tooth whitening under one roof — your treatment is planned by the clinic's own dentists.",
    previous: "Previous doctors",
    next: "Next doctors",
  },
};

export default function AboutDoctors() {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const { lang } = useI18n();
  const copy = COPY[lang] ?? COPY.en;
  const team = getTeam(lang);

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
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="doctors">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[50rem]">
              <Reveal className="mb-2">
                <SectionLabel>{copy.label}</SectionLabel>
              </Reveal>
              <Reveal as="h2" delay={80} className="mb-4">
                {copy.heading}
              </Reveal>
              <Reveal delay={140}>{copy.intro}</Reveal>
            </div>

            <Reveal delay={180} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => slideBy(-1)}
                disabled={edges.start}
                aria-label={copy.previous}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#37465c] text-[#f9f9f9] transition-opacity duration-300 hover:bg-[#2c3a4e] disabled:opacity-30"
              >
                <ArrowIcon className="h-6 w-6 rotate-[-135deg]" />
              </button>
              <button
                type="button"
                onClick={() => slideBy(1)}
                disabled={edges.end}
                aria-label={copy.next}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#37465c] text-[#f9f9f9] transition-opacity duration-300 hover:bg-[#2c3a4e] disabled:opacity-30"
              >
                <ArrowIcon className="h-6 w-6" />
              </button>
            </Reveal>
          </div>

          <div
            ref={trackRef}
            onScroll={measure}
            className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {team.map((doctor, index) => (
              <Reveal
                key={doctor.name}
                delay={Math.min(index, 3) * 70}
                className="w-[84%] shrink-0 snap-start sm:w-[58%] lg:w-[31.7%]"
              >
                <DoctorCard doctor={doctor} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}