import ArrowIcon from "@/components/site/ArrowIcon";
import CTAButton from "@/components/site/CTAButton";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { useI18n } from "@/lib/i18n";

/**
 * One service row: photograph on one side, content panel on the other, sides
 * alternating down the page.
 */
export default function ServiceCard({ service, index }) {
  const { t } = useI18n();
  const flipped = index % 2 === 1;

  return (
    <Reveal className="grid items-stretch gap-4 lg:grid-cols-2">
      <div
        className={`relative min-h-[15rem] overflow-hidden rounded-lg md:min-h-[23rem] ${
          flipped ? "lg:order-2" : ""
        }`}
      >
        <ParallaxMedia
          src={service.img}
          alt={service.alt}
          frameClassName="absolute inset-0"
          imageClassName="object-[50%_30%]"
          zoom="in"
          strength={0.7}
        />
      </div>

      <div
        className={`card-pad-lg flex flex-col justify-between rounded-lg bg-[#eff1f5] ${
          flipped ? "lg:order-1" : ""
        }`}
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <SectionLabel>{t("label.services")}</SectionLabel>
          <ArrowIcon className="h-6 w-6 shrink-0 rotate-[-45deg] text-[#313131]" />
        </div>

        <div>
          <h3 className="mb-4 uppercase">{service.title}</h3>
          <p className="mb-8 max-w-[34rem]">{service.summary}</p>
          <CTAButton href={`/services/${service.slug}`} variant="dark">
            {t("cta.viewService")}
          </CTAButton>
        </div>
      </div>
    </Reveal>
  );
}