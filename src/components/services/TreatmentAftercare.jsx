import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";

/** Recovery and long-term care, beside a photograph that stays in view. */
export default function TreatmentAftercare({ aftercare, mediaSide = "left" }) {
  const { t } = useI18n();
  const imageRight = mediaSide === "right";

  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className={`lg:col-span-5 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <ParallaxMedia
                      src={aftercare.img}
                      alt={aftercare.alt}
                      frameClassName="absolute inset-0"
                      imageClassName={aftercare.imageClass}
                      zoom="in"
                      strength={0.7}
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className={`lg:col-span-7 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
              <Reveal className="mb-3 flex items-center gap-3">
                <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                <SectionLabel>{aftercare.label}</SectionLabel>
              </Reveal>
              <Reveal as="h2" delay={70} className="mb-4">
                {aftercare.heading}
              </Reveal>
              <Reveal delay={130} className="mb-6">
                <p className="max-w-[42rem]">{aftercare.intro}</p>
              </Reveal>

              <div className="flex flex-col">
                {aftercare.items.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={160 + Math.min(index, 4) * 50}
                    className="border-t border-[#d2d2d2] py-5 last:border-b"
                  >
                    <h3 className="mb-2 text-[1.0625rem]">{item.title}</h3>
                    <p className="max-w-[42rem] text-[0.95rem]">{item.text}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[0.95rem] text-[#616161]">{t("label.unsureAfterwards")}</span>
                <a
                  href={clinicPhoneHref}
                  className="text-[0.95rem] font-medium text-[#313131] no-underline underline decoration-[#c8a27a] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#37465c]"
                >
                  {clinicPhone}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}