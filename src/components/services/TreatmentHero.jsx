import AccentButton from "@/components/site/AccentButton";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

/** The banner light, chosen per treatment so each page opens differently. */
const TONES = {
  warm: "bg-gradient-to-t from-[#17130f]/90 via-[#12151c]/55 to-[#12151c]/10",
  cool: "bg-gradient-to-t from-[#0f1620]/90 via-[#12151c]/55 to-[#12151c]/10",
  deep: "bg-gradient-to-t from-[#0b0c0f]/92 via-[#12151c]/58 to-[#12151c]/12",
};

/**
 * Treatment banner: full-bleed photograph, a brass-lit title block over it, and
 * a ruled rail of key facts — with the clinic's number as the last cell.
 */
export default function TreatmentHero({ hero, facts, tone = "cool" }) {
  const resolveHref = useSectionLinks();
  const { t } = useI18n();
  const cells = [...facts, { label: t("label.talkToUs"), value: clinicPhone, href: clinicPhoneHref }];

  return (
    <section>
      <div className="padding-global">
        <Reveal as="nav" aria-label={t("nav.breadcrumb")} className="mt-6 flex items-center gap-4">
          <a
            href="/services"
            className="text-meta no-underline transition-colors duration-300 hover:text-[#37465c]"
          >
            {t("label.services")}
          </a>
          <span className="h-px w-6 bg-[#d2d2d2]" aria-hidden="true" />
          <span className="text-meta">{hero.heading}</span>
        </Reveal>

        <Reveal className="relative mt-4 min-h-[34rem] overflow-hidden rounded-lg md:aspect-[16/9] md:min-h-[32rem] lg:aspect-[21/10] lg:min-h-[36rem]">
          <ParallaxMedia
            src={hero.img}
            alt={hero.alt}
            frameClassName="absolute inset-0"
            imageClassName={hero.imageClass}
            zoom="in"
            strength={1}
            priority
          />
          <div className={`absolute inset-0 ${TONES.deep}`} />
          <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_86%_12%,rgba(200,162,122,0.20),transparent_58%)]" />

          <div className="absolute inset-0 flex items-end">
            <div className="card-pad w-full">
              <div className="mb-3 flex items-center gap-3">
                <span className="tp-rule h-px w-10 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                <SectionLabel light>{hero.label}</SectionLabel>
              </div>
              <h1 className="mb-5 max-w-[20ch] text-[#f9f9f9]">{hero.heading}</h1>
              <p className="mb-8 max-w-[38rem] text-[#e2e2e2]">{hero.intro}</p>
              <div className="flex flex-wrap items-center gap-3">
                <AccentButton href={resolveHref("#booking")}>{t("cta.bookAnAppointment")}</AccentButton>
                <AccentButton href="/services" variant="outlineLight">
                  {t("cta.allServices")}
                </AccentButton>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={140}
          className="mt-4 grid gap-px overflow-hidden rounded-lg bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-4"
        >
          {cells.map((cell) => (
            <div key={cell.label} className="bg-[#f9f9f9] px-6 py-6 md:px-7 md:py-7">
              <div className="text-meta mb-2">{cell.label}</div>
              {cell.href ? (
                <a
                  href={cell.href}
                  className="text-[1rem] text-[#313131] no-underline transition-colors duration-300 hover:text-[#37465c]"
                >
                  {cell.value}
                </a>
              ) : (
                <div className="text-[1rem] text-[#313131]">{cell.value}</div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}