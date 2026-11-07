import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ArrowIcon from "@/components/site/ArrowIcon";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { clinicEmail, clinicEmailHref, clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    heading: "Sorunuz mu var?",
    intro:
      "Bu tedaviyle ilgili hastaların en sık sorduğu sorular, açıkça yanıtlandı. Geri kalan her şeyi konsültasyonunuzda yüz yüze konuşuruz.",
  },
  en: {
    heading: "Got any questions?",
    intro:
      "The questions patients ask most about this treatment, answered plainly. Anything else is covered in person at your consultation.",
  },
};

/**
 * The treatment's own questions and answers: heading and contact routes on the
 * left, the accordion on the right in the site's cream panel.
 */
export default function TreatmentFaq({ faqs }) {
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section id="faq">
      <div className="padding-global">
        <div className="section-y-lg">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal className="mb-3 flex items-center gap-3">
                  <span className="tp-rule h-px w-8 shrink-0 bg-[#c8a27a]" aria-hidden="true" />
                  <SectionLabel>{t("label.faq")}</SectionLabel>
                </Reveal>
                <Reveal as="h2" delay={70} className="mb-4">
                  {copy.heading}
                </Reveal>
                <Reveal delay={130} className="mb-7">
                  <p className="max-w-[28rem]">{copy.intro}</p>
                </Reveal>
                <Reveal delay={180} className="flex flex-col gap-2">
                  <a
                    href={clinicPhoneHref}
                    className="text-[0.95rem] text-[#313131] no-underline transition-colors duration-300 hover:text-[#37465c]"
                  >
                    {clinicPhone}
                  </a>
                  <a
                    href={clinicEmailHref}
                    className="text-[0.95rem] text-[#616161] no-underline transition-colors duration-300 hover:text-[#37465c]"
                  >
                    {clinicEmail}
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Reveal className="rounded-lg bg-[#f1efea]">
                <div className="card-pad-lg">
                  <AccordionPrimitive.Root type="single" collapsible defaultValue="faq-0">
                    {faqs.map((faq, index) => (
                      <AccordionPrimitive.Item
                        key={faq.q}
                        value={`faq-${index}`}
                        className="border-b border-[#d0d0d0] last:border-b-0"
                      >
                        <AccordionPrimitive.Header className="flex">
                          <AccordionPrimitive.Trigger className="group flex w-full items-start gap-6 py-6 text-left transition-colors duration-300 hover:text-[#37465c]">
                            <span className="text-meta mt-1.5 w-6 shrink-0 text-[#c8a27a]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-question flex-1">{faq.q}</span>
                            <ArrowIcon className="mt-1 h-4 w-4 shrink-0 rotate-45 transition-transform duration-500 ease-out group-data-[state=open]:rotate-[135deg]" />
                          </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          <div className="grid gap-6 pb-7 md:grid-cols-[1.5rem_1fr]">
                            <span aria-hidden="true" />
                            <p className="max-w-[46rem]">{faq.a}</p>
                          </div>
                        </AccordionPrimitive.Content>
                      </AccordionPrimitive.Item>
                    ))}
                  </AccordionPrimitive.Root>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}