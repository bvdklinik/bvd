import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import ArrowIcon from "./ArrowIcon";
import { getServiceMenu } from "./serviceMenu";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

/**
 * Desktop mega menu for treatments: a photo panel on the left that follows the
 * hovered treatment, the three treatment groups on the right, and a footer row
 * linking to all services and the booking form.
 */
export default function ServicesDropdown({ label }) {
  const { lang, t } = useI18n();
  const resolveHref = useSectionLinks();
  const groups = getServiceMenu(lang);
  const items = groups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.label })));
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug);
  const active = items.find((i) => i.slug === activeSlug) ?? items[0];

  /* Not `relative`: the panel anchors to the sticky header so it stays centred
     on the page at every desktop width. The link's ::after bridges the gap
     between the link and the panel so hover is not lost on the way down. */
  return (
    <div className="group/dd">
      <a
        href="/services"
        aria-haspopup="true"
        className="relative flex items-center gap-1 px-[0.2rem] text-[0.9rem] uppercase text-[#313131] no-underline after:absolute after:-inset-x-6 after:top-full after:h-14 after:content-['']"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180" />
      </a>

      <div className="invisible absolute left-1/2 top-full z-[400] -translate-x-1/2 translate-y-3 pt-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100 group-focus-within/dd:visible group-focus-within/dd:translate-y-0 group-focus-within/dd:opacity-100">
        <div className="grid w-[min(58rem,calc(100vw-5rem))] grid-cols-[14rem_1fr] gap-2 rounded-2xl border border-[#37465c]/10 bg-white p-2 shadow-[0_45px_90px_-45px_rgba(23,32,48,0.55),0_2px_8px_rgba(23,32,48,0.04)]">
          {/* Photo panel — crossfades to the hovered treatment. */}
          <div className="relative min-h-[16rem] overflow-hidden rounded-xl bg-[#37465c]">
            {items.map((item) => (
              <div
                key={item.slug}
                aria-hidden="true"
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  item.slug === active?.slug ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              >
                <Image src={item.img} alt="" className="h-full w-full object-cover" fittingType="fill" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c2533]/95 via-[#1c2533]/40 to-[#1c2533]/5" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="mb-2 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#d9b892]">
                <span className="h-px w-5 bg-[#d9b892]" />
                <span className="whitespace-nowrap">{active?.group}</span>
              </div>
              <div className="text-[1.6rem] font-medium leading-[1.1] text-white [font-family:var(--font-heading)]">
                {active?.title}
              </div>
              <p className="mt-2 text-[0.8rem] font-light leading-snug text-white/75">
                {active?.tagline}
              </p>
            </div>
          </div>

          {/* Treatment groups. */}
          <div className="flex flex-col px-7 pb-5 pt-7">
            <div className="flex justify-between gap-8">
              {groups.map((g) => (
                <div key={g.label} className="min-w-0">
                  <div className="flex items-center gap-2 whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#b48d63]">
                    <span className="h-1 w-1 rounded-full bg-[#c8a27a]" />
                    {g.label}
                  </div>
                  <ul className="m-0 mb-8 mt-4 flex list-none flex-col gap-1 p-0">
                    {g.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onMouseEnter={() => setActiveSlug(item.slug)}
                          onFocus={() => setActiveSlug(item.slug)}
                          className="group/item flex items-center gap-2 py-1.5 no-underline"
                        >
                          <span
                            className={`relative whitespace-nowrap text-[1.2rem] font-medium leading-tight transition-colors duration-300 [font-family:var(--font-heading)] ${
                              item.slug === active?.slug ? "text-[#37465c]" : "text-[#2b2b2b]"
                            }`}
                          >
                            {item.title}
                            <span
                              className={`absolute -bottom-0.5 left-0 h-px bg-[#c8a27a] transition-all duration-500 ease-out ${
                                item.slug === active?.slug ? "w-full" : "w-0"
                              }`}
                            />
                          </span>
                          <ArrowIcon
                            className={`h-5 w-5 shrink-0 text-[#c8a27a] transition-all duration-300 ${
                              item.slug === active?.slug ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                            }`}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-[#37465c]/10 pt-4">
              <a
                href={resolveHref("#booking")}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#6b6b6b] no-underline transition-colors duration-300 hover:text-[#37465c]"
              >
                {t("cta.bookAppointment")}
              </a>
              <a
                href="/services"
                className="group/all flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#37465c] no-underline"
              >
                {t("cta.allServices")}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#37465c]/20 transition-colors duration-300 group-hover/all:border-[#37465c] group-hover/all:bg-[#37465c]">
                  <ArrowIcon className="h-4 w-4 text-[#37465c] transition-colors duration-300 group-hover/all:text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
