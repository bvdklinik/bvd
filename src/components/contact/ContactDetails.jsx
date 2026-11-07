import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import ArrowIcon from "@/components/site/ArrowIcon";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import {
  clinicAddressLines,
  clinicDirections,
  clinicEmail,
  clinicEmailHref,
  clinicPhone,
  clinicPhoneHref,
  clinicWhatsapp,
} from "@/components/site/clinicInfo";
import { smileCloseUp } from "@/components/site/clinicPhotos";
import { useI18n } from "@/lib/i18n";

const linkClass =
  "text-[1.05rem] text-[#313131] no-underline transition-colors duration-300 hover:text-[#37465c]";

const COPY = {
  tr: {
    label: "İletişim bilgileri",
    heading: "Bize nasıl ulaşırsınız",
    intro:
      "Klinik Güngören, İstanbul'da; Bahçelievler, Merter, Esenler ve Bağcılar'dan kolayca ulaşılır ve merkeze yürüme mesafesindedir.",
    alt: "Sağlıklı ve doğal bir gülüşün yakın çekimi",
  },
  en: {
    label: "Contact details",
    heading: "How to reach us",
    intro:
      "The clinic sits in Güngören, İstanbul — easy to reach from Bahçelievler, Merter, Esenler and Bağcılar, and a short walk from the centre.",
    alt: "Close-up of a healthy, natural smile",
  },
};

export default function ContactDetails() {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  const items = [
    {
      label: t("label.phone"),
      icon: Phone,
      value: (
        <a href={clinicPhoneHref} className={linkClass}>
          {clinicPhone}
        </a>
      ),
    },
    {
      label: t("label.whatsapp"),
      icon: MessageSquare,
      value: (
        <a href={clinicWhatsapp} target="_blank" rel="noreferrer" className={linkClass}>
          {t("label.messageClinic")}
        </a>
      ),
    },
    {
      label: t("label.email"),
      icon: Mail,
      value: (
        <a href={clinicEmailHref} className={linkClass}>
          {clinicEmail}
        </a>
      ),
    },
    {
      label: t("label.address"),
      icon: MapPin,
      value: (
        <div>
          <address className="text-[1.05rem] not-italic text-[#313131]">
            {clinicAddressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <a
            href={clinicDirections}
            target="_blank"
            rel="noreferrer"
            className="group mt-3 inline-flex items-center gap-2 text-[0.9rem] uppercase text-[#37465c] no-underline"
          >
            {t("cta.getDirections")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <section id="contact-details">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-8 max-w-[50rem]">
            <Reveal className="mb-2">
              <SectionLabel>{copy.label}</SectionLabel>
            </Reveal>
            <Reveal as="h2" delay={80} className="mb-4">
              {copy.heading}
            </Reveal>
            <Reveal delay={140}>{copy.intro}</Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {items.map((item, index) => (
                <Reveal key={item.label} delay={index * 70} className="border-t border-[#d0d0d0] pt-5">
                  <div className="text-meta mb-2 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-[#37465c]" aria-hidden="true" />
                    {item.label}
                  </div>
                  {item.value}
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="relative min-h-[20rem] overflow-hidden rounded-lg">
              <ParallaxMedia
                src={smileCloseUp}
                alt={copy.alt}
                frameClassName="h-full w-full"
                imageClassName="object-[50%_45%]"
                zoom="in"
                strength={0.7}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}