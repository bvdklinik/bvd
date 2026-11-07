import Reveal from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

const HEADINGS = {
  tr: "Tedavinin öne çıkanları",
  en: "Treatment highlights",
};

/** Three treatment highlights, set as one ruled band rather than three cards. */
export default function TreatmentHighlights({ highlights }) {
  const { lang } = useI18n();

  return (
    <section>
      <div className="padding-global">
        <h2 className="sr-only">{HEADINGS[lang] ?? HEADINGS.en}</h2>
        <div className="section-y-lg">
          <div className="grid gap-px overflow-hidden rounded-lg bg-black/[0.08] md:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 90}
                className="bg-[#eff1f5] p-8 md:p-10"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-meta text-[#c8a27a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="tp-rule h-px flex-1 bg-[#c8a27a]/45" aria-hidden="true" />
                </div>
                <h3 className="mb-3 uppercase tracking-[0.01em]">{item.label}</h3>
                <p className="max-w-[26rem] text-[0.95rem]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}