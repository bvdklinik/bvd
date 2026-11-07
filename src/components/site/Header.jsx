import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import TextLink from "./TextLink";
import ServicesDropdown from "./ServicesDropdown";
import { getServiceMenu } from "./serviceMenu";
import { useI18n } from "@/lib/i18n";
import { useSectionLinks } from "@/lib/useSectionLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingInView, setBookingInView] = useState(false);
  const resolveHref = useSectionLinks();
  const { t, lang } = useI18n();

  /* Every page, plus the clinic section anchor, which resolves home from any route. */
  const links = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.clinic"), href: "#clinic" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const mobileLinks = [...links, { label: t("nav.bookOnline"), href: "#booking" }];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The floating mobile CTA steps aside once the booking form itself is on screen.
  useEffect(() => {
    const target = document.getElementById("booking");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setBookingInView(entry.isIntersecting),
      { rootMargin: "-15% 0px -15% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "nav-shell-scrolled" : ""}`}>
      <div className={`nav-box ${scrolled ? "nav-box-scrolled" : ""}`}>
        <div className="flex items-center gap-4">
          <a href="/" className="block no-underline" aria-label={t("nav.homeLabel")}>
            <Logo className="w-[6.25rem] md:w-[7rem]" priority />
          </a>
        </div>

        <nav className="hidden items-center gap-3 min-[992px]:flex">
          {links.map((l) => l.href === "/services" ? (
            <ServicesDropdown key={l.label} label={l.label} />
          ) : (
            <TextLink
              key={l.label}
              label={l.label}
              href={resolveHref(l.href)}
              className="px-[0.2rem]"
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 min-[992px]:flex">
          <LanguageSwitcher />
          <a
            href={resolveHref("#booking")}
            className="group flex items-center gap-2 text-[0.9rem] no-underline"
          >
            <span className="font-semibold uppercase text-[#313131]">{t("cta.bookAppointment")}</span>
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#37465c]">
              <ArrowIcon className="h-[25px] w-[25px] text-[#f9f9f9] transition-transform duration-300 ease-out group-hover:translate-x-[18px] group-hover:translate-y-[18px]" />
              <ArrowIcon className="absolute left-[-15px] top-[22px] h-[25px] w-[25px] text-[#f9f9f9] transition-transform duration-300 ease-out group-hover:translate-x-[18px] group-hover:-translate-y-[18px]" />
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2 min-[992px]:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded bg-[#37465c]"
          >
            <span className="block h-[1.5px] w-4 bg-[#f9f9f9]" />
            <span className="block h-[1.5px] w-4 bg-[#f9f9f9]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-panel bg-[#37465c] padding-global py-8 min-[992px]:hidden">
          <nav className="flex flex-col">
            {mobileLinks.map((l, idx) => (
              <div
                key={l.label}
                className="menu-item"
                style={{ animationDelay: `${60 + idx * 45}ms` }}
              >
                {idx > 0 && <div className="h-px w-full bg-white/25" />}
                <a
                  href={resolveHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[0.9rem] uppercase text-[#f9f9f9] no-underline"
                >
                  {l.label}
                </a>
                {l.href === "/services" && (
                  <div className="grid gap-4 pb-4 pl-4 sm:grid-cols-3">
                    {getServiceMenu(lang).map((g) => (
                      <div key={g.label}>
                        <div className="text-meta mb-1 text-[#c8a27a]">{g.label}</div>
                        {g.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-[0.9rem] text-[#f9f9f9]/80 no-underline transition-colors hover:text-[#f9f9f9]"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {!bookingInView && !open && (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] hidden justify-center max-[479px]:flex">
          <a
            href={resolveHref("#booking")}
            className="pointer-events-auto rounded-[50px] border border-white/40 bg-[#37465c]/90 px-8 py-3 text-[0.9rem] font-medium uppercase text-[#f9f9f9] no-underline shadow-[0_20px_45px_-22px_rgba(0,0,0,0.65)] backdrop-blur-md"
          >
            {t("cta.bookAppointment")}
          </a>
        </div>
      )}
    </header>
  );
}