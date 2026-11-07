import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import EditorialHeading from "@/components/services/EditorialHeading";

/** One picture with its caption, drifting gently and zooming on hover. */
function Tile({ item, className = "", delay = 0 }) {
  return (
    <Reveal delay={delay} className={`group relative flex flex-col overflow-hidden rounded-lg ${className}`.trim()}>
      <div className="relative min-h-[12rem] flex-1">
        <ParallaxMedia
          src={item.img}
          alt={item.alt}
          frameClassName="absolute inset-0"
          zoom="hover"
          strength={0.6}
        />
      </div>
      <div className="bg-[#1f2733] px-5 py-3 md:px-6">
        <div className="tp-caption">{item.caption}</div>
      </div>
    </Reveal>
  );
}

/**
 * "Results" — the photographs that close the story. Either one large tile with
 * two stacked beside it, or three equal panels, depending on the page's layout.
 */
export default function TreatmentGallery({ gallery, variant = "mosaic", side = "left" }) {
  const items = gallery.items;
  const largeLeft = side === "left";

  return (
    <section>
      <div className="padding-global">
        <div className="section-y-lg">
          <EditorialHeading
            label={gallery.label}
            title={gallery.heading}
            lead={gallery.intro}
            split
          />

          {variant === "strip" ? (
            <div className="grid gap-2 md:grid-cols-3">
              {items.map((item, index) => (
                <Tile key={item.caption} item={item} delay={index * 90} className="aspect-[3/4]" />
              ))}
            </div>
          ) : (
            <div className="grid gap-2 lg:grid-cols-12">
              <Tile
                item={items[0]}
                className={`aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:min-h-[34rem] ${
                  largeLeft ? "lg:order-1" : "lg:order-2"
                }`}
              />
              <div
                className={`flex flex-col gap-2 lg:col-span-5 ${
                  largeLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Tile item={items[1]} delay={90} className="aspect-[3/2] lg:aspect-auto lg:flex-1" />
                <Tile item={items[2]} delay={160} className="aspect-[3/2] lg:aspect-auto lg:flex-1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}