import { useState } from "react";
import ArrowHover from "./ArrowHover";
import ArrowIcon from "./ArrowIcon";
import CTAButton from "./CTAButton";
import ParallaxMedia from "./ParallaxMedia";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { getTeam } from "./teamData";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "Biz kimiz",
    heading: "Ekibimiz",
    intro:
      "Her tedavi kendi diş hekimlerimiz tarafından planlanır ve uygulanır; konsültasyonunuzda, tedavinizde ve kontrol randevularınızda aynı yüzlerle karşılaşırsınız",
    meetLabel: "Bizi tanıyın",
    panelHeading: "Birlikte planlanır, kendi diş hekimlerimizle",
    panelBody:
      "İmplant, ortodonti ve estetik vakaları tedavi başlamadan önce birlikte değerlendirilir; böylece size sunulan plan birden fazla açıdan ele alınmış olur.",
    previous: "Önceki hekim",
    next: "Sonraki hekim",
  },
  en: {
    label: "Who are we",
    heading: "Our team",
    intro:
      "Every treatment is planned and carried out by our own dentists — the same faces at your consultation, your treatment and your follow-up appointments",
    meetLabel: "Meet us",
    panelHeading: "Planned together, by our own dentists",
    panelBody:
      "Implant, orthodontic and cosmetic cases are reviewed together before treatment starts, so the plan you are given has been considered from more than one angle.",
    previous: "Previous doctor",
    next: "Next doctor",
  },
};

export default function Team() {
  const [i, setI] = useState(0);
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;
  const team = getTeam(lang);
  const doc = team[i];
  const next = () => setI((i + 1) % team.length);
  const prev = () => setI((i - 1 + team.length) % team.length);

  return (
    <section id="team" className="section-home-team">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-4">
            <Reveal className="mb-2">
              <SectionLabel>{copy.label}</SectionLabel>
            </Reveal>
            <Reveal as="h2" delay={80} className="mb-4">
              {copy.heading}
            </Reveal>
            <Reveal delay={150} className="max-w-[40rem]">
              {copy.intro}
            </Reveal>
          </div>

          <div className="relative grid gap-4 lg:min-h-[25rem] lg:grid-cols-[1fr_.75fr_.75fr_1fr]">
            <Reveal className="group relative overflow-hidden rounded-lg bg-[#37465c]">
              <a href="#booking" tabIndex={-1} aria-hidden="true" className="absolute inset-0 z-10" />
              <div className="card-pad pointer-events-none relative z-20 h-full">
                <div className="flex h-full w-full flex-col items-start justify-between">
                  <div className="mb-4 w-full">
                    <div className="flex w-full items-start justify-between">
                      <SectionLabel light>{copy.meetLabel}</SectionLabel>
                      <ArrowHover light />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-4">
                      <h3 className="text-[#f9f9f9]">{copy.panelHeading}</h3>
                    </div>
                    <div className="mb-8">
                      <div className="text-[#f2f2f2]">{copy.panelBody}</div>
                    </div>
                    <span className="pointer-events-auto inline-block">
                      <CTAButton href="/about" variant="light">
                        {t("cta.aboutUs")}
                      </CTAButton>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="relative pt-16 lg:col-span-3 lg:pt-0">
              <div className="grid h-full gap-4 md:grid-cols-3">
                <Reveal className="relative min-h-[280px] overflow-hidden rounded-lg md:min-h-0">
                  <ParallaxMedia
                    key={doc.name}
                    src={doc.img}
                    alt={`${doc.name}, ${doc.specialty} · BVD Clinic`}
                    frameClassName="doctor-fade h-full w-full"
                    imageClassName="object-[50%_28%]"
                    zoom="in"
                    strength={0.7}
                  />
                </Reveal>

                <div className="overflow-hidden rounded-lg bg-[#eff1f5] md:col-span-2">
                  <div key={doc.name} className="doctor-fade card-pad h-full">
                    <div className="flex h-full w-full flex-col items-start justify-between">
                      <div className="w-full">
                        <div className="mb-4">
                          <h3>{doc.name}</h3>
                        </div>
                      </div>
                      <div className="w-full text-[#616161]">{doc.bio}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-[60px] top-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#37465c] shadow-[0_16px_34px_-20px_rgba(0,0,0,0.7)] lg:top-[-16%]">
                <button
                  type="button"
                  onClick={prev}
                  aria-label={copy.previous}
                  className="flex h-full w-full items-center justify-center text-[#f9f9f9] transition-colors duration-300 hover:bg-[#2c3a4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9f9f9]"
                >
                  <ArrowIcon className="h-6 w-6 rotate-[-135deg]" />
                </button>
              </div>
              <div className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#37465c] shadow-[0_16px_34px_-20px_rgba(0,0,0,0.7)] lg:top-[-16%]">
                <button
                  type="button"
                  onClick={next}
                  aria-label={copy.next}
                  className="flex h-full w-full items-center justify-center text-[#f9f9f9] transition-colors duration-300 hover:bg-[#2c3a4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9f9f9]"
                >
                  <ArrowIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}