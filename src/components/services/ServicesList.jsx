import ServiceCard from "./ServiceCard";
import { getServices } from "./servicesData";
import { useI18n } from "@/lib/i18n";

const HEADINGS = {
  tr: "BVD Clinic'te diş tedavileri",
  en: "Dental treatments at BVD Clinic",
};

export default function ServicesList() {
  const { lang } = useI18n();
  const services = getServices(lang);

  return (
    <section>
      <div className="padding-global">
        <h2 className="sr-only">{HEADINGS[lang] ?? HEADINGS.en}</h2>
        <div className="flex flex-col gap-4 pb-8 md:gap-6 md:pb-14">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}