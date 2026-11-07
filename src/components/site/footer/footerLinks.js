import { getServices } from "@/components/services/servicesData";
import { ui } from "@/lib/locales/ui";

/** Footer navigation. Every destination is a section that exists on the page. */
export const getQuickLinks = (lang) => [
  { label: ui["nav.home"][lang], href: "/" },
  { label: ui["cta.aboutUs"][lang], href: "/about" },
  { label: ui["nav.clinic"][lang], href: "#clinic" },
  { label: ui["nav.services"][lang], href: "/services" },
  { label: ui["label.faq"][lang], href: "#faq" },
  { label: ui["cta.contactUs"][lang], href: "/contact" },
  { label: ui["nav.bookOnline"][lang], href: "#booking" },
];

/**
 * Every treatment the clinic offers, taken from the same list the services page
 * and the home page's offers slider read, so a new treatment lands in the footer
 * the moment it is added there — in both languages.
 */
export const getFooterTreatments = (lang) =>
  getServices(lang).map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  }));