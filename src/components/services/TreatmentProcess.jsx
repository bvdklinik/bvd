import AccentButton from "@/components/site/AccentButton";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

/** The visit-by-visit sequence, set as a ruled timeline. */
export default function TreatmentProcess({ process }) {
  const resolveHref = useSectionLinks();
  const { t } = useI18n();

  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal className="mb-3 flex items-center gap-3">
                  <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                  <SectionLabel>{process.label}</SectionLabel>
                </Reveal>
                <Reveal as="h2" delay={70} className="mb-4">
                  {process.heading}
                </Reveal>
                <Reveal delay={130} className="mb-8">
                  <p className="max-w-[28rem]">{process.intro}</p>
                </Reveal>
                <Reveal delay={180}>
                  <AccentButton href={resolveHref("#booking")}>{t("cta.bookAnAppointment")}</AccentButton>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ol className="relative border-l border-[#d2d2d2] pl-8 md:pl-12">
                {process.steps.map((step, index) => (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={Math.min(index, 4) * 60}
                    className="relative pb-10 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-8 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-[#c8a27a] bg-[#f9f9f9] md:-left-12"
                    />
                    <div className="text-meta mb-2 text-[#c8a27a]">
                      {t("label.step")} {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mb-2 uppercase">{step.title}</h3>
                    <p className="max-w-[42rem]">{step.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}