import AccentButton from "@/components/site/AccentButton";
import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import { clinicPhone, clinicPhoneHref, clinicWhatsapp } from "@/components/site/clinicInfo";
import { retainerInGlove } from "@/components/site/clinicPhotos";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "İletişim",
    heading: "BVD Clinic ile iletişime geçin",
    body: "Bir tedavi, ikinci bir görüş ya da randevu için sorularınız varsa bizi arayın, WhatsApp'tan yazın veya aşağıdaki formu gönderin. Klinik Güngören, İstanbul'da ve mesajlara geliş sırasına göre yanıt veriyoruz.",
    alt: "Şeffaf diş plağını tutan klinik ekibi üyesi",
  },
  en: {
    label: "Contact",
    heading: "Contact BVD Clinic",
    body: "Questions about a treatment, a second opinion or an appointment — call us, message us on WhatsApp, or send the form below. The clinic is in Güngören, İstanbul, and we answer in the order messages arrive.",
    alt: "Member of the clinical team holding a clear dental aligner",
  },
};

export default function ContactHero() {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section>
      <div className="padding-global">
        <div className="mt-8">
          <Reveal className="relative min-h-[30rem] overflow-hidden rounded-lg md:aspect-[21/9] md:min-h-[26rem]">
            <ParallaxMedia
              src={retainerInGlove}
              alt={copy.alt}
              frameClassName="absolute inset-0"
              imageClassName="object-[50%_38%]"
              zoom="in"
              strength={1}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151c]/85 via-[#12151c]/45 to-[#12151c]/20" />

            <div className="absolute inset-0 flex items-end">
              <div className="card-pad w-full">
                <div className="text-meta mb-2 text-[#d2d2d2]">{copy.label}</div>
                <h1 className="mb-4 max-w-[22ch] text-[#f9f9f9]">{copy.heading}</h1>
                <p className="mb-8 max-w-[34rem] text-[#e2e2e2]">{copy.body}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <AccentButton href={clinicPhoneHref}>
                    {t("cta.call")} {clinicPhone}
                  </AccentButton>
                  <AccentButton href={clinicWhatsapp} variant="outlineLight" external>
                    WhatsApp
                  </AccentButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}