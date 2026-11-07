import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";

/** Benefits as ruled editorial rows against a sticky heading column. */
export default function TreatmentBenefits({ benefits }) {
  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal className="mb-3 flex items-center gap-3">
                  <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                  <SectionLabel>{benefits.label}</SectionLabel>
                </Reveal>
                <Reveal as="h2" delay={70} className="mb-4">
                  {benefits.heading}
                </Reveal>
                <Reveal delay={130}>
                  <p className="max-w-[28rem]">{benefits.intro}</p>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex flex-col">
                {benefits.items.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={Math.min(index, 4) * 60}
                    className="group border-t border-[#d2d2d2] last:border-b"
                  >
                    <div className="py-7">
                      <div className="mb-2 flex items-baseline gap-4">
                        <span className="text-meta text-[#c8a27a]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="transition-colors duration-500 group-hover:text-[#37465c]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="max-w-[44rem] text-[0.95rem] md:ml-[5.5rem]">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}