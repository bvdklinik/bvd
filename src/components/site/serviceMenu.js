import { getServices } from "@/components/services/servicesData";

/* Treatments grouped for the header menu. Slugs match servicesData. */
const GROUPS = [
  { tr: "Estetik", en: "Aesthetic", slugs: ["dental-veneers", "teeth-whitening"] },
  { tr: "Restoratif", en: "Restorative", slugs: ["dental-crowns", "dental-implants"] },
  { tr: "Ortodonti & Cerrahi", en: "Orthodontics & Surgery", slugs: ["invisalign", "teeth-extraction"] },
];

export const getServiceMenu = (lang) => {
  const services = getServices(lang);
  return GROUPS.map((g) => ({
    label: lang === "en" ? g.en : g.tr,
    items: g.slugs
      .map((slug) => services.find((s) => s.slug === slug))
      .filter(Boolean)
      .map((s) => ({ title: s.title, href: `/services/${s.slug}` })),
  }));
};