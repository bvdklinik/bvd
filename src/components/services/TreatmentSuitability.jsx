import { Check } from "lucide-react";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { useI18n } from "@/lib/i18n";

/** Who the treatment suits, with the limits stated plainly beside the picture. */
export default function TreatmentSuitability({ suitability, mediaSide = "left" }) {
  const { t } = useI18n();
  const imageRight = mediaSide === "right";

  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className={`lg:col-span-5 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <ParallaxMedia
                  src={suitability.img}
                  alt={suitability.alt}
                  frameClassName="absolute inset-0"
                  imageClassName={suitability.imageClass}
                  zoom="in"
                  strength={0.7}
                />
              </div>
            </Reveal>

            <div className={`lg:col-span-7 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
              <Reveal className="mb-3 flex items-center gap-3">
                <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                <SectionLabel>{suitability.label}</SectionLabel>
              </Reveal>
              <Reveal as="h2" delay={70} className="mb-4">
                {suitability.heading}
              </Reveal>
              <Reveal delay={130} className="mb-6">
                <p className="max-w-[42rem]">{suitability.intro}</p>
              </Reveal>

              <ul className="grid gap-x-10 md:grid-cols-2">
                {suitability.items.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={160 + Math.min(index, 4) * 50}
                    className="flex items-start gap-3 border-t border-[#d2d2d2] py-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#c8a27a]/70">
                      <Check className="h-3 w-3 text-[#c8a27a]" />
                    </span>
                    <span className="text-[#313131]">{item}</span>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={250} className="mt-8 border-l-2 border-[#c8a27a] bg-[#f1efea] px-6 py-6">
                <div className="text-meta mb-2 text-[#37465c]">{t("label.worthKnowing")}</div>
                <p className="max-w-[42rem] text-[0.95rem]">{suitability.note}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}