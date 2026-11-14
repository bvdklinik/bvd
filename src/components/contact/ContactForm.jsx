import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";
import { buildWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";
import ContactFormFields, { SUBJECTS } from "./ContactFormFields";

/* The stored subject stays in English; only the label the visitor reads changes. */
const EMPTY = {
  name: "",
  email: "",
  phone: "",
  subject: "General enquiry",
  message: "",
  consent: false,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.\-]{6,}$/;

function validate(form, t) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = t("error.name");
  if (!EMAIL.test(form.email.trim())) errors.email = t("error.email");
  if (form.phone.trim() && !PHONE.test(form.phone.trim())) errors.phone = t("error.phone");
  if (!form.subject) errors.subject = t("error.subject");
  if (form.message.trim().length < 10) errors.message = t("error.message");
  return errors;
}

const COPY = {
  tr: {
    label: "Mesaj gönderin",
    heading: "Size nasıl yardımcı olabileceğimizi anlatın",
    intro:
      "Ayrıntıları bize gönderin; seçeneklerle, en yakın randevu zamanıyla ve tedavinin neleri kapsadığıyla size geri dönelim.",
  },
  en: {
    label: "Send a message",
    heading: "Tell us how we can help",
    intro:
      "Send us the details and we will come back to you with the options, the next available appointment and what the treatment involves.",
  },
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  // Delivered over WhatsApp: opens a pre-filled message to the clinic's number.
  // Runs synchronously so the browser does not block the new tab.
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = SUBJECTS.find((s) => s.value === form.subject);
    openWhatsApp(
      buildWhatsAppMessage([
        `*${t("whatsapp.contactTitle")}*`,
        "",
        [t("form.fullName"), form.name],
        [t("form.email"), form.email],
        [t("form.phone"), form.phone],
        [t("form.subject"), subject ? t(subject.labelKey) : form.subject],
        "",
        form.message.trim(),
      ])
    );
    setStatus("sent");
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact-form">
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

          <Reveal delay={100} className="card-pad rounded-lg bg-[#eff1f5]">
            {status === "sent" ? (
              <div className="flex max-w-[42rem] items-start gap-4">
                <Check className="mt-1 h-6 w-6 shrink-0 text-[#37465c]" />
                <div className="text-[#313131]">
                  {t("whatsapp.sent")} {t("contact.sentUrgent")}{" "}
                  <a href={clinicPhoneHref} className="font-medium">
                    {clinicPhone}
                  </a>
                  .
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-4 block text-[0.9rem] uppercase text-[#37465c] underline"
                  >
                    {t("form.sendAnother")}
                  </button>
                </div>
              </div>
            ) : (
              <ContactFormFields
                form={form}
                errors={errors}
                sending={false}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}