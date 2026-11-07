import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import EditorialHeading from "@/components/services/EditorialHeading";

const LEAD = "text-[1.125rem] leading-[168%] text-[#313131]";

/** A sized, rounded, parallaxed frame — the only way photographs appear here. */
function Photo({ src, alt, imageClass, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`.trim()}>
      <ParallaxMedia
        src={src}
        alt={alt}
        frameClassName="absolute inset-0"
        imageClassName={imageClass}
        zoom="in"
        strength={0.7}
      />
    </div>
  );
}

/**
 * "What it is" — an editorial spread. The photograph either sits beside the copy
 * in an asymmetric split, or runs full width beneath the heading as a band,
 * depending on the treatment's layout direction.
 */
export default function TreatmentOverview({ overview, variant = "split", mediaSide = "right" }) {
  const imageRight = mediaSide === "right";
  const [lead, ...rest] = overview.paragraphs;

  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <EditorialHeading label={overview.label} title={overview.heading} split lead={null} />

          {variant === "band" ? (
            <>
              <Reveal>
                <Photo
                  src={overview.img}
                  alt={overview.alt}
                  imageClass={overview.imageClass}
                  className="aspect-[16/9] lg:aspect-[21/9]"
                />
              </Reveal>
              <Reveal delay={120} className="text-meta mt-5">
                {overview.caption}
              </Reveal>

              <div className="mt-10 lg:columns-2 lg:gap-14">
                <Reveal as="p" className={`mb-5 break-inside-avoid ${LEAD}`}>
                  {lead}
                </Reveal>
                {rest.map((paragraph, index) => (
                  <Reveal
                    key={paragraph}
                    className="mb-5 break-inside-avoid last:mb-0"
                  >
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className={`relative lg:col-span-7 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
                <Photo
                  src={overview.img}
                  alt={overview.alt}
                  imageClass={overview.imageClass}
                  className="aspect-[4/3] lg:aspect-[5/4]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 -right-4 hidden h-28 w-28 border-b border-r border-[#c8a27a]/60 lg:block"
                />
              </Reveal>

              <div className={`flex flex-col lg:col-span-5 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                <Reveal as="p" className={`mb-5 ${LEAD}`}>
                  {lead}
                </Reveal>
                {rest.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={100 + index * 60} className="mb-5 last:mb-0">
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
                <Reveal delay={220} className="text-meta mt-6 border-t border-[#d2d2d2] pt-4 lg:mt-auto">
                  {overview.caption}
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}